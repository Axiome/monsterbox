var Operator = Class.create(Label, {
   initialize: function(width, value) {
      Label.call(this);

      this.value = value;

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
   setPosition: function(x, y) {
      this.x = x;
      this.y = y;
   }
});