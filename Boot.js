var Tsunami = Tsunami || {};

// setting game config and loading the assets for the loading screen.
Tsunami.BootState ={
	init: function(){
		this.game.stage.backgroundColor = "##f4bb29";
		this.game.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		//initialize the arcade physics system
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	preload: function (){
		// assets we'll use in the loading screen.
		this.load.image("loadingBar", "assets/sprites/loading.png");
	},
	create: function(){
		this.state.start("Preload");

	}
};