Ship = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.animations.add('idle');
	this.animations.play('idle', 24, true);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);

	up_key = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	down_key = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    
    this.update = function() {
		if (up_key.isDown) {
		    console.log("UP");
		}
		if (down_key.isDown) {
		    console.log("DOWN");
		}
	};
};

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;
