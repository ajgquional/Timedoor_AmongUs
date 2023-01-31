import Phaser from 'phaser'
export default class AmongUsScene extends Phaser.Scene
{
    constructor()
    {
        super("among-us-scene");
    }

    preload()
    {
        // loading the images from the images folder inside public
        this.load.image("maps", "images/Maps.png");
        this.load.image("playerRed", "images/Red.png");
        this.load.image("playerGreen", "images/Green.png");
        this.load.image("playerPink", "images/Pink.png");
        this.load.image("playerOrange", "images/Orange.png");
        this.load.image("playerCyan", "images/Cyan.png");
    }
    
    create()
    {
        // placing the loaded images assets in the game screen
        this.add.image(960, 540, "maps");
        this.add.image(1000, 400, "playerRed");
        this.add.image(1700, 500, "playerGreen");
        this.add.image(350, 300, "playerPink");
        this.add.image(350, 800, "playerOrange");
        //this.add.image(900, 800, "playerCyan");
        this.add.image(950, 800, "playerCyan").setScale(0.5)
    }
}