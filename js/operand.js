var Operand = Class.create(MutableText, {
	initialize: function(width, value, positive) {
		MutableText.call(this);

		this.value = value;
		this.positive = positive;

		if (!positive) {
			this.text = '(-' + value + ')';
		} else {
			this.text = value;
		}
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
			var node1 = Game.instance.currentEquation.first(function(node) {
				return node.model.id.getValue() === operand1.getValue();
			});
			var node2 = Game.instance.currentEquation.first(function(node) {
				return (node.model.id.getValue() === operand1.getValue()) && (node != node1);
			});
			console.log("node1 : ", node1.model.id.getValue());
			console.log("node1.parent : ", node1.parent.model.id.getValue());
			console.log("node2 : ", node2.model.id.getValue());
			// SI les deux cartes sont des cartes opposées ALORS
			// On les supprime et on les remplace par une carte de valeur '0'
			if ((operand1.getValue() === operand2.getValue()) && (operand1.isPositive() !== operand2.isPositive())) {
				Game.instance.currentGameScene.clear();
				// SI les deux cartes sont relier par un +
				if (node1.parent.model.id.getValue() === '+') {
					if (node1.parent === node2.parent) {
						if (node1.parent.parent.children[0] === node1.parent) {
							node1.parent.parent.children[0].model.id = new Operand(WIDTH / 20, '0', true);
						} else {
							node1.parent.parent.children[1].model.id = new Operand(WIDTH / 20, '0', true);
						}
						node1.drop();
						node2.drop();
					} else {
						if (node1.parent.parent.model.id.getValue() === '+') {
							if (node1.parent.parent === node2.parent) {
								if (node1.parent.children[0] === node1) {
									node1.parent.model.id = node1.parent.children[1].model.id;
									node1.parent.children[1].drop();
								} else {
									node1.parent.model.id = node1.parent.children[0].model.id;
									node1.parent.children[0].drop();
								}
								node1.drop();
								node2.model.id = new Operand(WIDTH / 20, '0', true);
							}
						}
					}
					// SI les deux cartes sont relier par un /
				} else {
					if (node1.parent.model.id.getValue() === '/') {
						if (node1.parent === node2.parent) {
							if (node1.parent.parent.children[0] === node1.parent) {
								node1.parent.parent.children[0].model.id = new Operand(WIDTH / 20, '1', false);
							} else {
								node1.parent.parent.children[1].model.id = new Operand(WIDTH / 20, '1', false);
							}
							node1.drop();
							node2.drop();
						} else {
							if (node1.parent.parent.model.id.getValue() === '/') {
								if (node1.parent.parent === node2.parent) {
									if (node1.parent.children[0] === node1) {
										node1.parent.mode.id = node1.parent.children[1].model.id;
										node1.parent.children[1].drop();
									} else {
										node1.parent.model.id = node1.parent.children[0].model.id;
										node1.parent.children[0].drop();
									}
									node1.drop();
									node2.model.id = new Operand(WIDTH / 20, '1', false);
								}
							}
						}
					}
				}
			} else {
				Game.instance.currentGameScene.clear();
				//SI les deux cartes ne sont pas opposer 
				if ((operand1.getValue() === operand2.getValue()) && (operand1.isPositive() === operand2.isPositive())) {
					Game.instance.currentGameScene.clear();
					//SI les deux cartes sont relier par un /
					if (node1.parent.model.id.getValue() === '/') {
						if (node1.parent === node2.parent) {
							if (node1.parent.parent.children[0] === node1.parent) {
								node1.parent.parent.children[0].model.id = new Operand(WIDTH / 20, '1', true);
							} else {
								node1.parent.parent.children[1].model.id = new Operand(WIDTH / 20, '1', true);
							}
							node1.drop();
							node2.drop();
						} else {
							if (node1.parent.parent.model.id.getValue() === '/') {
								if (node1.parent.parent === node2.parent) {
									if (node1.parent.children[0] === node1) {
										node1.parent.model.id = node1.parent.children[1].model.id;
										node1.parent.children[1].drop();
									} else {
										node1.parent.model.id = node1.parent.children[0].model.id;
										node1.parent.children[0].drop();
									}
									node1.drop();
									node2.model.id = new Operand(WIDTH / 20, '1', true);
								}
							}
						}
					}
				}
			}
		}

		// SI on appuie sur une carte de valeur '0' ALORS
		if (this.value === '0') {
			Game.instance.currentEquation.walk(function(node) {
				console.log(node.model.id.text);
			});
			Game.instance.currentGameScene.clear();
			var currentCard = this;
			var father;
			var brother;
			var grandFather;
			var node = Game.instance.currentEquation.first(function(node) {
				return node.model.id.value === '0';
			});
			father = node.parent;
			grandFather = node.parent.parent;
			if (father.children[0] === node) {
				brother = father.children[1];
				brother.parent = grandFather;
				if (grandFather.children[0] === father) {
					grandFather.children[0] = brother;
				} else {
					grandFather.children[1] = brother;
				}
			} else {
				brother = father.children[0];
				brother.parent = grandFather;
				if (grandFather.children[0] === father) {
					grandFather.children[0] = brother;
				} else {
					grandFather.children[1] = brother;
				}
			}
			node.drop();
		}
		console.log("after drop :");
		Game.instance.currentEquation.walk(function(node) {
			console.log(node.model.id.text);
		});
		Game.instance.currentGameScene.refresh();
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
			// console.log('intersection');
		}
	}
});