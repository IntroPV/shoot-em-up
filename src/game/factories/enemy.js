Enemy = function(game, x, y, sprite) {
    Phaser.Sprite.call(this, game, x, y, sprite);
    //this.scale.setTo(1.25, 1.25);
    this.animations.add('idle');
	this.animations.play('idle', 24, true);
    //this.anchor.setTo(0.5, 0.5);
    //game.add.existing(this);
    game.physics.arcade.enable(this);
    //this.body.collideWorldBounds = true;

    // Properties
    //this.speed = new Phaser.Point(-100, 0);
    
    //this.bullet_time = 0;
    //this.bullet_speed = 800;
    //this.bullet_cd = 200;

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;
