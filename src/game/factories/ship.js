Ship = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.animations.add('idle');
	this.animations.play('idle', 24, true);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);

    // Properties
    //this.accel_speed = new Phaser.Point(0,0);
    this.accel = new Phaser.Point(0,15);
    this.speed = new Phaser.Point(0,0);
    this.max_speed = new Phaser.Point(0,30);

    // Methods
    this.update = function() {
    	console.log(this.speed);
    	var delta = game.time.elapsedMS / 1000;
    	var moved = false;
		if (game.keyboard.up.isDown) {
		    this.speed.subtract(0, this.accel.y * delta);
		    var max_up_speed = this.max_speed.y * -1;
		    if (this.speed.y < max_up_speed) {
		    	this.speed.y = max_up_speed;
		    }
		    moved = true;
		} else if (game.keyboard.down.isDown) {
			this.speed.add(0, this.accel.y * delta);
			var max_down_speed = this.max_speed.y;
		    if (this.speed.y > max_down_speed) {
		    	this.speed.y = max_down_speed;
		    }
			moved = true;
		}
		if (!moved) {
			this.speed.y = 0;
		}
		/*
		this.speed.y > 0
		? this.speed.subtract(new Phaser.Point(0, Math.min(this.speed.y, 0)))
		: this.speed.add(new Phaser.Point(0, Math.max(this.speed.y, 0)))
		*/
		this.move();
	};

	this.move = function() {
		this.y += this.speed.y > 0 
					? Math.min(this.speed.y, this.max_speed.y) 
					: (this.speed.y < 0 
						? Math.max(this.speed.y, this.max_speed.y * -1)
						: 0);
	}
};

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;
