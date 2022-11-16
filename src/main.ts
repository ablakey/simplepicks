import Phaser from "phaser";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
  },
  backgroundColor: "#2d2d2d",
  parent: "viewport",
  scene: {},
});
