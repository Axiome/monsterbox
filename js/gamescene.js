var GameScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);
      this.NBCARDS = 0;

      Game.instance.currentEquation = equations[Game.instance.currentChapter][Game.instance.currentLevel];

      var bg = new Sprite(WIDTH, HEIGHT);
      bg.backgroundColor = COLOR5;

      var btnGoBack = new MutableText(0, 0, 0);
      btnGoBack.setText('<');
      btnGoBack.x = WIDTH / 16;
      btnGoBack.y = HEIGHT / 12;
      btnGoBack.addEventListener('touchend', this.goBack);

      var score = new MutableText(0, 0, 0);
      score.setText('0/5');
      score.x = (WIDTH / 2) - (score.width / 2);
      score.y = HEIGHT / 12;

      var btnPause = new MutableText(0, 0, 0);
      btnPause.setText('||');
      btnPause.x = WIDTH - (btnPause.width * 2);
      btnPause.y = HEIGHT / 12;
      btnPause.addEventListener('touchend', this.pause);

      this.equationPanel = new Group(WIDTH, HEIGHT - (HEIGHT / 4));
      this.equationPanel.addChild(new Sprite(WIDTH, HEIGHT - (HEIGHT / 4)));
      this.equationPanel.x = 0;
      this.equationPanel.y = HEIGHT / 8;
      this.equationPanel.firstChild.backgroundColor = COLOR3;

      var deckPanel = new Group(WIDTH, HEIGHT / 6);
      deckPanel.addChild(new Sprite(WIDTH, HEIGHT / 6));
      deckPanel.x = 0;
      deckPanel.y = HEIGHT - deckPanel.firstChild.height;
      deckPanel.firstChild.backgroundColor = COLOR4;

      this.addChild(bg);
      this.addChild(btnGoBack);
      this.addChild(score);
      this.addChild(btnPause);
      this.addChild(this.equationPanel);
      this.addChild(deckPanel);
      this.refresh();
   },
   refresh: function() {
      var root = Game.instance.currentEquation;
      var nbCard = 0;

      root.walk(function(node) {
         nbCard++;
      });

      this.NBCARDS = nbCard;

      this.recfresh(root, this.NBCARDS, false, false);
   },
   recfresh: function(node, cards, bool, biil) {
      newnbcards = cards;
      if (cards == 0) {
         return;
      }

      if (!node.hasChildren()) {
         var currentCard = node.model.id;
         currentCard.setPosition((WIDTH / 4) + (this.NBCARDS - newnbcards) * 100, HEIGHT / 3);
         this.equationPanel.addChild(currentCard);
         if (bool) {
            newnbcards--;
            this.recfresh(node.parent, newnbcards--, true, true);
         } else {
            newnbcards--;
            this.recfresh(node.parent, newnbcards--, true, false);
         }
      } else {
         if (!bool) {
            this.recfresh(node.children[0], cards, false, false);
         }
         if (bool && !biil) {
            var currentOperator = node.model.id;
            currentOperator.setPosition((WIDTH / 4) + (this.NBCARDS - newnbcards) * 100, HEIGHT / 3);
            this.equationPanel.addChild(currentOperator);
            newnbcards--;
            if (node.children[1].hasChildren()) {
               this.recfresh(node.children[1], newnbcards, false, false);
            } else {
               this.recfresh(node.children[1], newnbcards, true, false);
            }
         }
         if (bool && biil) {
            this.recfresh(node.parent, cards, true, false);
         }
      }
   },
   goBack: function() {
      Game.instance.replaceScene(new LevelScene());
   },
   pause: function() {
      Game.instance.pushScene(new PauseScene());
   }
});