var Operator = Class.create(MutableText, {
   initialize: function(width, value) {
      MutableText.call(this);

      this.value = value;
      this.text = value;
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