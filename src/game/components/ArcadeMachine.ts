import Phaser from 'phaser';

export type MachineType = 'EXPERIENCE' | 'PROJECTS';

export default class ArcadeMachine extends Phaser.Physics.Arcade.Sprite {
  public machineType: MachineType;
  private interactionText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene, x: number, y: number, type: MachineType, texture: string = 'arcade-machine') {
    super(scene, x, y, texture);

    this.machineType = type;

    scene.add.existing(this);
    scene.physics.add.existing(this, true); // Estático

    // Texto de indicación (oculto por defecto)
    this.interactionText = scene.add.text(x, y - 60, 'Presiona [E]', {
      fontSize: '16px',
      color: '#ffffff',
      backgroundColor: '#6366f1',
      padding: { x: 8, y: 4 }
    }).setOrigin(0.5).setVisible(false);
    
    this.interactionText.setDepth(100);
  }

  showPrompt(visible: boolean) {
    this.interactionText.setVisible(visible);
  }
}
