class tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('noir', 'game/noir.jpg');
        this.load.image('carre', 'game/caree.png');
        this.load.image('cercle', 'game/cercle.png');
    }

    create() {
        this.noir=this.add.container(0,0);

        let noir=this.add.image(-100,-50, 'noir').setOrigin(0,0);
        this.noir.add(noir);
        let cercle=this.add.image(-10,310, 'cercle').setOrigin(0,0);
        cercle.setScale(0.2)

         let caree=this.add.image(-10,310, 'caree').setOrigin(0,0);
        caree.setScale(0.2)
    }
}


