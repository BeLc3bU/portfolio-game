import Phaser from 'phaser';
import Player from '../entities/Player';
import ArcadeMachine from '../components/ArcadeMachine';

export default class MainScene extends Phaser.Scene {
  private player!: Player;
  private machines!: Phaser.Physics.Arcade.StaticGroup;
  private interactKey!: Phaser.Input.Keyboard.Key;

  constructor() {
    super('MainScene');
  }

  preload() {
    // Carga de assets (rutas relativas a public/ o configuradas en vite)
    // Nota: Vite carga desde /src/game/assets si lo configuramos, 
    // pero por ahora usamos importaciones o rutas directas si están en public.
    // Como los movimos a src/game/assets, Phaser necesita la ruta correcta.
    this.load.image('player', new URL('../assets/player.png', import.meta.url).href);
    this.load.image('arcade-machine', new URL('../assets/arcade-machine.png', import.meta.url).href);
    this.load.image('floor', new URL('../assets/floor.png', import.meta.url).href);
    this.load.image('wall', new URL('../assets/wall.png', import.meta.url).href);
  }

  create() {
    // Fondo/Suelo simple (Patrón de rejilla)
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 15; j++) {
            this.add.image(i * 64, j * 64, 'floor').setOrigin(0).setAlpha(0.3);
        }
    }

    // Grupos
    this.machines = this.physics.add.staticGroup();

    // Crear Máquinas
    const expMachine = new ArcadeMachine(this, 300, 200, 'EXPERIENCE');
    const projMachine = new ArcadeMachine(this, 500, 200, 'PROJECTS');
    
    this.machines.add(expMachine);
    this.machines.add(projMachine);

    // Decoración (Paredes)
    for (let i = 0; i < 13; i++) {
        this.add.image(i * 64, 0, 'wall').setOrigin(0);
    }

    // Jugador
    this.player = new Player(this, 400, 400);

    // Colisiones
    this.physics.add.collider(this.player, this.machines);

    // Tecla de interacción
    if (this.input.keyboard) {
        this.interactKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    }

    // Instrucciones
    this.add.text(16, 16, 'Explora el Arcade: WASD para mover, E para interactuar', {
      fontSize: '18px',
      color: '#ffffff'
    }).setScrollFactor(0);
  }

  update() {
    this.player.update();

    // Lógica de proximidad para interacción
    let nearbyMachine: ArcadeMachine | null = null;
    
    this.machines.children.entries.forEach((machine: any) => {
      const dist = Phaser.Math.Distance.Between(this.player.x, this.player.y, machine.x, machine.y);
      if (dist < 100) {
        nearbyMachine = machine;
        machine.showPrompt(true);
      } else {
        machine.showPrompt(false);
      }
    });

    if (nearbyMachine && Phaser.Input.Keyboard.JustDown(this.interactKey)) {
      this.handleInteraction(nearbyMachine);
    }
  }

  private handleInteraction(machine: ArcadeMachine) {
    console.log(`Interactuando con máquina de: ${machine.machineType}`);
    // Aquí integraremos el sistema de agentes o modales de React
    this.cameras.main.flash(500, 99, 102, 241);
  }
}
