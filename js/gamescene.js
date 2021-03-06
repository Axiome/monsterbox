var GameScene = Class.create(Scene, {
   initialize: function() {
      Scene.apply(this);
      this.NBCARDS = 0;
		this.printedElemts = 0;	
      Game.instance.currentGameScene = this;
      Game.instance.currentEquation = new Equation().getEquation(Game.instance.currentChapter, Game.instance.currentLevel);

      console.log(Game.instance.currentEquation);

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
      for (var i = 0; i < NUMBERLEVEL; i++) {
         var level = new MutableText(0, 0, 0);
         level.setText('*');

         if (Game.instance.currentLevel >= i) {
            level.opacity = 1;
         } else {
            level.opacity = 0.25;
         }

         level.x = (WIDTH / 5) + (i * 32);
         level.y = 10;
         deckPanel.addChild(level);
      };

      this.addChild(bg);
      this.addChild(btnGoBack);
      this.addChild(score);
      this.addChild(btnPause);
      this.addChild(this.equationPanel);
      this.addChild(deckPanel);
      this.refresh();
   },
   refresh: function() {
      var equation = Game.instance.currentEquation;
      var nbCard = 0;
      equation.walk(function(node) {
         nbCard++;
      });

      this.NBCARDS = nbCard;
      this.recfresh(equation, this.NBCARDS, false, false, false, false);
      this.endLevel();
   },
   /*recfresh: function(node, cards, bool, biil, baal, buul) {
      newnbcards = cards;
      if (cards == 0) {
         return;
      }
		if(node.isRoot()){
			this.printedElemts = 0;
			if(!buul){
				var equal = node.model.id;
				equal.setPosition(WIDTH / 2, HEIGHT / 3);
				this.equationPanel.addChild(equal);
				newnbcards--;
				this.recfresh(node.children[0], newnbcards, false, false, false, true);
			} else {
				this.recfresh(node.children[1], newnbcards, false, false, true, true);
			}
		}
		else if (!node.hasChildren()) {
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
   },*/
	recfresh: function(node, cards, bool, biil, baal, buul) {
		var newnbcards = cards;
		if (cards == 0) {
			return;
		}
							  		
		if (node.isRoot()) {
			this.printedElemts = 0;
			if(!buul) {
				var equal = node.model.id;
				equal.setPosition(WIDTH / 2, HEIGHT / 3);
				this.equationPanel.addChild(equal);
				newnbcards--;
				this.recfresh(node.children[0], newnbcards, false, false, false, true);
			} else {
				this.recfresh(node.children[1], newnbcards, false, false, true, true);
			}
		} else if (!node.hasChildren()) {
		   var currentCard = node.model.id;
			console.log(currentCard);
			this.printedElemts++;
			if(!baal) {
		     	currentCard.setPosition((WIDTH / 2) - this.printedElemts * 60, HEIGHT / 3);
			} else {
				currentCard.setPosition((WIDTH / 2) + this.printedElemts * 60, HEIGHT / 3);
			}
			this.equationPanel.addChild(currentCard);
	      if (bool) {
		     	newnbcards--;
           	this.recfresh(node.parent, newnbcards, true, true, baal, true);
         } else {
           	newnbcards--;
        	this.recfresh(node.parent, newnbcards, true, false, baal, true);
         }
		} else {
        	if (!bool) {
  				if(!baal) {
        			this.recfresh(node.children[1], cards, false, false, baal, true);
				} else {
      			this.recfresh(node.children[0], cards, false, false, baal, true);
				}
	     	}
        	if (bool && !biil) {
  				this.printedElemts++;
        		var currentOperator = node.model.id;
				if(!baal) {
	     			currentOperator.setPosition((WIDTH / 2) - this.printedElemts * 60, HEIGHT / 3);
				} else {
					currentOperator.setPosition((WIDTH / 2) + this.printedElemts * 60, HEIGHT / 3);
				}
        		this.equationPanel.addChild(currentOperator);
        		newnbcards--;
				if(!baal) {
        			if (node.children[0].hasChildren()) {
           			this.recfresh(node.children[0], newnbcards, false, false, baal, true);
        			} else {
           			this.recfresh(node.children[0], newnbcards, true, false, baal, true);
	     			}
				} else {
	     			if (node.children[1].hasChildren()) {
	        			this.recfresh(node.children[1], newnbcards, false, false, baal, true);
	     			} else {
	        			this.recfresh(node.children[1], newnbcards, true, false, baal, true);
	     			}
	     		}
			}
	     	if (bool && biil) {
				if (!baal) {
	     			this.recfresh(node.parent, cards, true, true, baal, true);
	     		} else {
	     			this.recfresh(node.parent, cards, true, false, baal, true);
	     		}
	     	}
		}
	},


   clear: function() {
      var equation = Game.instance.currentEquation;
      equation.walk(function(node) {
         Game.instance.currentGameScene.equationPanel.removeChild(node.model.id);
      });
   },
   endLevel: function() {
      var equation = Game.instance.currentEquation;
      var rootNode = equation.first(function(node) {
         return node.isRoot();
      });

      if ((rootNode.children[0].model.id.getValue() === 'x') || (rootNode.children[1].model.id.getValue() === 'x')) {
         this.tl.delay(30).then(function() {
            Game.instance.replaceScene(new WinScene());
         });
      }
   },
   goBack: function() {
      Game.instance.replaceScene(new LevelScene());
   },
   pause: function() {
      Game.instance.pushScene(new PauseScene());
   }
});
