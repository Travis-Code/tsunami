
var Tsunami = Tsunami || {};

//Tsunami.dimensions = Tsunami.getGameLandscapeDimensions(700,414);

//create a new Phaser.Game object and assign it to our custom Tsunami.game property.
// then add our states to the game property.
Tsunami.game = new Phaser.Game(700, 414, Phaser.AUTO);
Tsunami.game.state.add("Boot", Tsunami.BootState);
Tsunami.game.state.add("Preload", Tsunami.PreloadState);
Tsunami.game.state.add("TitleScreen", Tsunami.titleScreenState);
Tsunami.game.state.add("Game", Tsunami.GameState);
Tsunami.game.state.add("Win", Tsunami.winScreenState);

//start our boot state
Tsunami.game.state.start("Boot");