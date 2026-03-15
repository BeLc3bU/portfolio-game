import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  private wasd: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  };
  private speed: number = 200;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    const body = this.body as Phaser.Physics.Arcade.Body;
    body.setCollideWorldBounds(true);
    body.setImmovable(false);
    
    // Ajustar el cuerpo físico para que coincida mejor con la base isométrica del sprite
    body.setSize(this.width * 0.6, this.height * 0.4);
    body.setOffset(this.width * 0.2, this.height * 0.6);

    this.cursors = scene.input.keyboard!.createCursorKeys();
    this.wasd = scene.input.keyboard!.addKeys('W,A,S,D') as any;
  }

  update() {
    const body = this.body as Phaser.Physics.Arcade.Body;
    if (!body) return;

    body.setVelocity(0);

    // Movimiento Horizontal
    if (this.cursors.left.isDown || this.wasd.A.isDown) {
      body.setVelocityX(-this.speed);
      this.setFlipX(true);
    } else if (this.cursors.right.isDown || this.wasd.D.isDown) {
      body.setVelocityX(this.speed);
      this.setFlipX(false);
    }

    // Movimiento Vertical
    if (this.cursors.up.isDown || this.wasd.W.isDown) {
      body.setVelocityY(-this.speed);
    } else if (this.cursors.down.isDown || this.wasd.S.isDown) {
      body.setVelocityY(this.speed);
    }

    // Normalizar velocidad en diagonales
    if (body.velocity.x !== 0 && body.velocity.y !== 0) {
      body.velocity.normalize().scale(this.speed);
    }
  }
}
