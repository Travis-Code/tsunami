var Tsunami = Tsunami || {};

//load game assets
Tsunami.PreloadState = {
    preload: function() {
        //show loading screen
        this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loadingBar");
        this.loadingBar.anchor.setTo(0.5);
        this.loadingBar.scale.setTo(3);
        //method that expands the loading bar from 0-100%
        this.load.setPreloadSprite(this.loadingBar);
       
        //load assets
        this.load.image("playAgainButton", "assets/sprites/playAgainButton.png");
        this.load.image('tsunami', 'assets/sprites/tsunami.png');
        this.load.image('backgroundCity', 'assets/sprites/waveBackgroundPicTwo.png');
        this.load.image('TsunamiStartScreen', 'assets/sprites/TsunamiStartScreen.png');
        this.load.image('playButton', 'assets/sprites/playButton.png');
        this.game.load.audio("cheer", ["assets/sprites/cheer.mp3", "assets/sounds/cheer.ogg"]);

        //spritesheet ("key", "path", xframeSize, yframeSize, num of frames in sheet.)    
        this.load.spritesheet("player", "assets/sprites/playerRunJump.png", 52, 86);
        //this.load.spritesheet("player", "assets/sprites/player_spritesheet.png",28, 30, 5, 1,1);
        this.load.spritesheet('cat', 'assets/sprites/cat.png', 61.9, 47);

        //load json file.
        this.load.text("level", "assets/prefabrications/level.json");

    },
    create: function() {
        this.state.start("TitleScreen");
    }
};