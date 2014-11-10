var LevelScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);

      var bg = new Sprite(WIDTH, HEIGHT);
      bg.backgroundColor = COLOR3;

      var btnGoBack = new MutableText(0, 0, 0);
      btnGoBack.setText('<');
      btnGoBack.x = WIDTH / 16;
      btnGoBack.y = HEIGHT / 12;
      btnGoBack.addEventListener('touchend', this.goBack);

      var title = new MutableText(0, 0, 0);
      title.setText('Select levelItem');
      title.x = (WIDTH / 2) - (title.width / 2);
      title.y = HEIGHT / 12;

      var levels = new Group();
      var numberOfLevels = 20;
      var lines = 0;
      for (var i = 0, j = 0; i < numberOfLevels; i++, j++) {
         if (j > (numberOfLevels / 4) - 1) {
            j = 0;
            lines++;
         }

         var level = i;
         var text = level + 1;
         var levelItem = new LevelItem(WIDTH / 10, '#4CB547', '#5FE359', text);
         levelItem.setPosition(((WIDTH / 6) * (j + .75)), (HEIGHT / (numberOfLevels / 4)) + ((HEIGHT / ((numberOfLevels / 4) + 1)) * lines));
         levelItem.setLevel(level);
         levelItem.addEventListener('touchend', this.goToLevel);
         levels.addChild(levelItem);
      }

      this.addChild(bg);
      this.addChild(btnGoBack);
      this.addChild(title);
      this.addChild(levels);
   },
   goBack: function() {
      Game.instance.replaceScene(new MainScene());
   },
   goToLevel: function() {
      Game.instance.currentLevel = this.getLevel();
      Game.instance.replaceScene(new GameScene());
   }
});