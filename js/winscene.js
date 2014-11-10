var WinScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);

      var bg = new Sprite(WIDTH, HEIGHT);
      bg.backgroundColor = COLOR4;
      bg.opacity = 0.9;

      var btnRetry = new MutableText(0, 0, 0);
      btnRetry.setText('<');
      btnRetry.x = WIDTH / 16;
      btnRetry.y = HEIGHT / 12;
      btnRetry.addEventListener('touchend', this.retry);

      var btnGoNextLevel = new MutableText(0, 0, 0);
      btnGoNextLevel.setText('NEXT');
      btnGoNextLevel.x = (WIDTH / 2) - (btnGoNextLevel.width / 2);
      btnGoNextLevel.y = HEIGHT / 2;
      btnGoNextLevel.addEventListener('touchend', this.goNextLevel);

      var title = new MutableText(0, 0, 0);
      title.setText('WIN');
      title.x = (WIDTH / 2) - (title.width / 2);
      title.y = HEIGHT / 12;

      var levelDone = new MutableText(0, 0, 0);
      levelDone.setText('Level ' + (Game.instance.currentLevel + 1) + ' done');
      levelDone.x = (WIDTH / 2) - (levelDone.width / 2);
      levelDone.y = HEIGHT / 3;

      this.addChild(bg);
      this.addChild(btnRetry);
      this.addChild(btnGoNextLevel);
      this.addChild(title);
      this.addChild(levelDone);
   },
   retry: function() {
      Game.instance.replaceScene(new GameScene());
   },
   goNextLevel: function() {
      Game.instance.currentLevel += 1;
      this.tl.delay(15).then(function() {
         Game.instance.replaceScene(new GameScene());
      });
   }
});