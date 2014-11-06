var Operand = Class.create(Label, {
   initialize: function(width, value, positive) {
      Label.call(this);

      this.value = value;
      this.positive = positive;

      this.text = value;
      this.color = COLOR2;
      this.font = width + 'px Arial';
   },
   getValue: function() {
      return this.value;
   },
   setValue: function(value) {
      this.value;
   },
   isPositive: function() {
      return this.positive;
   },
   setPositive: function(positive) {
      this.positive = positive;
   },
   setPosition: function(x, y) {
      this.x = x;
      this.y = y;
   },
   ontouchstart: function(e) {
      this.originalX = this.x;
      this.originalY = this.y;
      this.originX = e.x - this.x;
      this.originY = e.y - this.y;
      this.opacity = 0.75;
   },
   ontouchcancel: function() {
      this.x = this.originalX;
      this.y = this.originalY;
      this.opacity = 1;
   },
   ontouchend: function(e) {
      // SI il y a intersection entre deux cartes ALORS
      var intersection = this.intersect(Operand);
      if (intersection.length > 1) {
         var operand1 = intersection[0];
         var operand2 = intersection[1];

         // SI les deux cartes sont des cartes opposées ALORS
         // On les supprime et on les remplace par une carte de valeur '0'
         if ((operand1.getValue() === operand.getValue())  && (operand1.isPositive() !== operand2.isPositive())) {
            var node = Game.instance.currentEquation.walk(function(node) {
               if ((node.model.id === operand1) || (node.model.id === operand1)) {
                  return node.model.id;
               }
            });
         }

         console.log(node);
      }

      // SI on appuie sur une carte de valeur '0' ALORS
      if (this.value === '0') {
         var currentCard = this;
         var nodes = Game.instance.currentEquation.first(function(node) {});
      }

      // On replace l'opérande si le drag est inutile
      this.x = this.originalX;
      this.y = this.originalY;
      this.opacity = 1;
   },
   ontouchmove: function(e) {
      var boundLeft = 0;
      var boundRight = WIDTH;
      var boundTop = 0;
      var boundBottom = HEIGHT;

      if (e.x > boundLeft && e.x < boundRight) {
         this.x = e.x - this.originX;
      }

      if (e.y > boundTop && e.y < boundBottom) {
         this.y = e.y - this.originY;
      }

      var intersection = this.intersect(Operand);
      if (intersection.length > 1) {
         console.log('intersection');
      }
   }
});