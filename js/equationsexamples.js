var Card = function(value) {
	this.value = value;
}
var tree = new TreeModel();

var numberChapters = 5;
var numberLevels = 20;
var equations = [];

for (var i = 0; i < numberChapters; i++) {
	equations[i] = [];

	for (var j = 0; j < numberLevels; j++) {
		equations[i][j] = null;
	}
}

// Chapter 5, Level 1: 0 + x = b
equations[4][0] = tree.parse({
	id: '=',
	children: [{
		id: '+',
		children: [{
			id: new Card(0, 0, '0', true)
		}, {
			id: new Card(0, 0, 'x', true)
		}]
	}, {
		id: new Card(0, 0, 'b', true)
	}]
});

// Chapter 5, Level 2: c = x + (-6) + 6
equations[4][1] = tree.parse({
	id: '=',
	children: [{
		id: new Card(0, 0, 'c'),
	}, {
		id: '+',
		children: [{
			id: '+',
			children: [{
				id: new Card(0, 0, 'x')
			}, {
				id: new Card(0, 0, '-6')
			}]
		}, {
			id: new Card(0, 0, '6')
		}]
	}]
});

// Chapter 5, Level 3: (-5) + 5 + c = e + (-e) + 2 + x
equations[4][2] = tree.parse({
	id: '=',
	children: [{
		id: '+',
		children: [{
			id: '+',
			children: [{
				id: new Card(0, 0, '-5')
			}, {
				id: new Card(0, 0, '5')
			}]
		}, {
			id: new Card(0, 0, 'c')
		}]
	}, {
		id: '+',
		childrend: [{
			id: '+',
			children: [{
				id: new Card(0, 0, 'e')
			}, {
				id: new Card(0, 0, '-e')
			}]
		}, {
			id: '+',
			children: [{
				id: new Card(0, 0, '2')
			}, {
				id: new Card(0, 0, 'x')
			}]
		}]
	}]
});

// Chapter 5, Level 4: (-c) + x + d = b
equations[4][3] = tree.parse({
	id: '=',
	children: [{
		id: '+',
		children: [{
			id: '+',
			children: [{
				id: new Card(0, 0, '-c')
			}, {
				id: new Card(0, 0, 'x')
			}]
		}, {
			id: new Card(0, 0, 'd')
		}]
	}, {
		id: new Card(0, 0, 'b')
	}]
});

// Chapter 5, Level 5: (e/e) + x + (-1) = d
equations[4][4] = tree.parse({
	id: '=',
	children: [{
		id: '+',
		children: [{
			id: '+',
			children: [{
				id: '/',
				children: [{
					id: new Card(0, 0, 'e')
				}, {
					id: new Card(0, 0, 'e')
				}]
			}, {
				id: new Card(0, 0, 'x')
			}]
		}, {
			id: new Card(0, 0, '-1')
		}]
	}, {
		id: new Card(0, 0, 'd')
	}]
});

// Chapter 5, Level 6: b = x + (f*5/f)
equations[4][5] = tree.parse({});

// Chapter 5, level 7: c * x = 8
equations[4][6] = tree.parse({});

// Chapter 5, level 8: a + 0 = c + (7*x) + (-c)
equations[4][7] = tree.parse({});

// Chapter 5, level 9: (-a) + (d*x) + c = c
equations[4][8] = tree.parse({});

// Chapter 5, level 10: (5/6) = (x/6)
equations[4][9] = tree.parse({});

// Chapter 5, level 11: (x*d)/(d*b) = (g/b)
equations[4][10] = tree.parse({});

// Chapter 5, level 12: (-1) + (g/g) + 6 = ((-5)*x)/7
equations[4][11] = tree.parse({});

// Chapter 5, level 13: c + (e*x) = d
equations[4][12] = tree.parse({});

// Chapter 5, level 14: a = (5*x) + 7
equations[4][13] = tree.parse({});

// Chapter 5, level 15: (-b) + (x/(-f)) = d
equations[4][14] = tree.parse({});

// Chapter 5, level 16: (1/x) = 1
equations[4][15] = tree.parse({});

// Chapter 5, level 17: (a/b) = (c/x)
equations[4][16] = tree.parse({});

// Chapter 5, level 18: (a/5) + x = (-c)
equations[4][17] = tree.parse({});

// Chapter 5, level 19: (a/x) + d + ((-b)/x) = 0
equations[4][18] = tree.parse({});

// Chapter 5, level 20: (2/x) + (d/e) = (b/x)
equations[4][19] = tree.parse({});