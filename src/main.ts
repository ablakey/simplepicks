import Phaser from "phaser";

class Emoji extends Phaser.GameObjects.Text {}

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    const e = new Emoji(this, 0, 0, "😃", {
      fontFamily: "Arial",
      fontSize: "412pt",
      color: "white",
    });
    e.setScale(0.5);
    this.add.existing(e);
    this.add.rectangle(200, 200, 148, 148, 0x6666ff);
    // const dude = new Dude(this, 250, 50);
  }
}

const target = document.querySelector<HTMLDivElement>("#viewport")!;

const game = new Phaser.Game({
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    // zoom: 0.5,
  },
  backgroundColor: "#2d2d2d",
  parent: "viewport",
  scene: new MainScene(),
});

console.log(game.canvas.width, game.canvas.height);
// For runtime debugging.
(window as any).game = game;
