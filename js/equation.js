var Equation = Class.create({
   initialize: function() {
      this.tree = new TreeModel();
      this.equations = [];
      operatorOperandSize = WIDTH / 20;

      for (var i = 0; i < NUMBERCHAPTER; i++) {
         this.equations[i] = [];

         for (var j = 0; j < NUMBERLEVEL; j++) {
            this.equations[i][j] = null;
         }
      }

      // Chapter 5, Level 1: 0 + x = b
      this.equations[4][0] = this.tree.parse({
         id: new Operator(operatorOperandSize, '='),
         children: [{
            id: new Operator(operatorOperandSize, '+'),
            children: [{
               id: new Operand(operatorOperandSize, '0', true)
            }, {
               id: new Operand(operatorOperandSize, 'x', true)
            }]
         }, {
            id: new Operand(operatorOperandSize, 'b', true)
         }]
      });

      // Chapter 5, Level 2: c = x + (-6) + 6
      this.equations[4][1] = this.tree.parse({
         id: new Operator(operatorOperandSize, '='),
         children: [{
            id: new Operand(operatorOperandSize, 'c', true)
         }, {
            id: new Operator(operatorOperandSize, '+'),
            children: [{
               id: new Operator(operatorOperandSize, '+'),
               children: [{
                  id: new Operand(operatorOperandSize, 'x', true)
               }, {
                  id: new Operand(operatorOperandSize, '6', false)
               }]
            }, {
               id: new Operand(operatorOperandSize, '6', true)
            }]
         }]
      });

      // Chapter 5, Level 3: (-5) + 5 + c = e + (-e) + 2 + x
      this.equations[4][2] = this.tree.parse({
         id: new Operator(operatorOperandSize, '='),
         children: [{
            id: new Operator(operatorOperandSize, '+'),
            children: [{
               id: new Operator(operatorOperandSize, '+'),
               children: [{
                  id: new Operand(operatorOperandSize, '5', false)
               }, {
                  id: new Operand(operatorOperandSize, '5', true)
               }]
            }, {
               id: new Operand(operatorOperandSize, 'c', true)
            }]
         }, {
            id: new Operator(operatorOperandSize, '+'),
            children: [{
               id: new Operator(operatorOperandSize, '+'),
               children: [{
                  id: new Operand(operatorOperandSize, 'e', true)
               }, {
                  id: new Operand(operatorOperandSize, 'e', false)
               }]
            }, {
               id: new Operator(operatorOperandSize, '+'),
               children: [{
                  id: new Operand(operatorOperandSize, '2', true)
               }, {
                  id: new Operand(operatorOperandSize, 'x', true)
               }]
            }]
         }]
      });

      // Chapter 5, Level 4: (-c) + x + d = b
      this.equations[4][3] = this.tree.parse({
         id: new Operator(operatorOperandSize, '='),
         children: [{
            id: new Operator(operatorOperandSize, '+'),
            children: [{
               id: new Operator(operatorOperandSize, '+'),
               children: [{
                  id: new Operand(operatorOperandSize, 'c', false)
               }, {
                  id: new Operand(operatorOperandSize, 'x', true)
               }]
            }, {
               id: new Operand(operatorOperandSize, 'd', true)
            }]
         }, {
            id: new Operand(operatorOperandSize, 'b', true)
         }]
      });

      // Chapter 5, Level 5: (e/e) + x + (-1) = d
      this.equations[4][4] = this.tree.parse({
         id: new Operator(operatorOperandSize, '='),
         children: [{
            id: new Operator(operatorOperandSize, '+'),
            children: [{
               id: new Operator(operatorOperandSize, '+'),
               children: [{
                  id: new Operator(operatorOperandSize, '/'),
                  children: [{
                     id: new Operand(operatorOperandSize, 'e', true)
                  }, {
                     id: new Operand(operatorOperandSize, 'e', true)
                  }]
               }, {
                  id: new Operand(operatorOperandSize, 'x', true)
               }]
            }, {
               id: new Operand(operatorOperandSize, '1', false)
            }]
         }, {
            id: new Operand(operatorOperandSize, 'd', true)
         }]
      });

      // Chapter 5, Level 6: b = x + (f*5/f)
      this.equations[4][5] = this.tree.parse({});

      // Chapter 5, level 7: c * x = 8
      this.equations[4][6] = this.tree.parse({});

      // Chapter 5, level 8: a + 0 = c + (7*x) + (-c)
      this.equations[4][7] = this.tree.parse({});

      // Chapter 5, level 9: (-a) + (d*x) + c = c
      this.equations[4][8] = this.tree.parse({});

      // Chapter 5, level 10: (5/6) = (x/6)
      this.equations[4][9] = this.tree.parse({});

      // Chapter 5, level 11: (x*d)/(d*b) = (g/b)
      this.equations[4][10] = this.tree.parse({});

      // Chapter 5, level 12: (-1) + (g/g) + 6 = ((-5)*x)/7
      this.equations[4][11] = this.tree.parse({});

      // Chapter 5, level 13: c + (e*x) = d
      this.equations[4][12] = this.tree.parse({});

      // Chapter 5, level 14: a = (5*x) + 7
      this.equations[4][13] = this.tree.parse({});

      // Chapter 5, level 15: (-b) + (x/(-f)) = d
      this.equations[4][14] = this.tree.parse({});

      // Chapter 5, level 16: (1/x) = 1
      this.equations[4][15] = this.tree.parse({});

      // Chapter 5, level 17: (a/b) = (c/x)
      this.equations[4][16] = this.tree.parse({});

      // Chapter 5, level 18: (a/5) + x = (-c)
      this.equations[4][17] = this.tree.parse({});

      // Chapter 5, level 19: (a/x) + d + ((-b)/x) = 0
      this.equations[4][18] = this.tree.parse({});

      // Chapter 5, level 20: (2/x) + (d/e) = (b/x)
      this.equations[4][19] = this.tree.parse({});
   },
   getTree: function() {
      return this.tree;
   },
   getEquations: function() {
      return this.equations;
   },
   getEquation: function(chapter, level) {
      return this.equations[chapter][level];
   }
});