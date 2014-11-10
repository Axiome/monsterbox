window.onload = function() {
	var game = new Game(WIDTH, HEIGHT);
	game.fps = 30;
	game.currentChapter = 4;
	game.currentLevel = 0;
	game.currentEquation = null;
	game.currentGameScene = null;

	game.onload = function() {
		game.pushScene(new MainScene());
		game.preload('icon0.png');
	};

	game.start();
}