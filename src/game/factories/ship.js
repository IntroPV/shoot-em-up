Ship = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'ship');
    this.scale.setTo(1.25, 1.25);
    this.animations.add('idle');
	this.animations.play('idle', 24, true);
    this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
    game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;

    // Properties
    this.acceleration = new Phaser.Point(0,2000);
    this.body.drag = new Phaser.Point(0,2500);
    this.body.maxVelocity = new Phaser.Point(0,450);
    
    this.bullet_time = 0;
    this.bullet_speed = 800;
    this.bullet_cd = 200;


    // Methods
    this.update = function() {
    	// Move
		if (game.keyboard.up.isDown) {
			this.body.acceleration.set(0,-this.acceleration.y);
		} else if (game.keyboard.down.isDown) {
			this.body.acceleration.set(0,this.acceleration.y);
		} else {
			this.body.acceleration.set(0,0);
		}

		// Fire
		if (game.keyboard.space.isDown) {
			this.fireBullet();
		}
	};

	this.createBullets = function() {
		this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(10, 'bullet');
        this.bullets.setAll('scale.x', 2);
        this.bullets.setAll('scale.y', 2);
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 0.5);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
	};
	this.createBullets();

	this.fireBullet = function() {
	    if (game.time.now > this.bullet_time) {
	        bullet = this.bullets.getFirstExists(false);
	        if (bullet) {
	            bullet.reset(this.x + 25, this.y);
	            bullet.body.velocity.x = this.bullet_speed;
	            this.bullet_time = game.time.now + this.bullet_cd;
	        }
	    }

	}

};

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;
