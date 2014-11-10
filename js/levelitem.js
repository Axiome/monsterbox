var LevelItem = Class.create(Group, {
   initialize: function(size, backgroundColor, foregroundColor, level) {
      Group.call(this);

      this.level = 0;

      var background = new Sprite(size, size);
      background.backgroundColor = backgroundColor;

      var foreground = new Sprite(size - (size / 20), size - (size / 20));
      foreground.backgroundColor = foregroundColor;
      foreground.x = foreground.width - (background.width * 0.925);
      foreground.y = foreground.height - (background.height * 0.925);

      var number = new MutableText(0, 0, 0);
      number.setText('' + level);
      number.x = (size / 2) - (number.width / 2);
      number.y = (size / 2) - (number.height / 2);

      var stars = new Group();
      for (var i = 0; i < this.random(1, 4); i++) {
         var star = new Sprite(16, 16);
         star.image = Game.instance.assets['icon0.png'];
         star.frame = 30;
         star.x = (size / 4) + (star.width * i);
         star.y = size - (star.height / 2);
         stars.addChild(star);
      }

      this.addChild(background);
      this.addChild(foreground);
      this.addChild(number);
      this.addChild(stars);
   },
   getLevel: function() {
      return this.level;
   },
   setLevel: function(level) {
      this.level = level;
   },
   setPosition: function(x, y) {
      this.x = x;
      this.y = y;
   },
   random: function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
   }
});