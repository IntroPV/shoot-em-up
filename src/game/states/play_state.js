var play_state = {

    init: function() {},

    preload: function() {},

    create: function() {
        var background = game.add.tileSprite(0, 0, 1781, 600, 'background');
        background.autoScroll(-25,0);
        var starfield = game.add.tileSprite(0, 0, game.width, game.height, 'starfield');
        starfield.autoScroll(-60,0);

        this.ship = new Ship(game, 70, game.world.centerY);
        this.enemies = this.createEnemies();
        this.explosions = this.createExplosions();
        this.state_text = this.createStateText();
    },

    update: function() {
        game.physics.arcade.overlap(this.ship.bullets, this.enemies, this.bulletCollision, null, this);
        game.physics.arcade.overlap(this.ship, this.enemies, this.shipCollision, null, this);
    },

    render: function() {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
        /*
        this.enemies.forEach(function(enemy){
            game.debug.body(enemy);
        });
        this.explosions.forEach(function(expl){
            game.debug.body(expl);
        });
        */
    },


    createEnemies: function() {
        var enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;
        enemies.x = 1000;

        var data = this.getLevelData(1);
        data.forEach(function(enemy){
            var tile_size = game.height / 10;
            var x = tile_size * enemy.x + tile_size/2;
            var y = tile_size * enemy.y + tile_size/2;
            enemies.add(new Enemy(game, x, y, 'enemy' + enemy.type));
        });

        enemies.setAll('scale.x', 1.25);
        enemies.setAll('scale.y', 1.25);
        enemies.setAll('anchor.x', 0.5);
        enemies.setAll('anchor.y', 0.5);
        enemies.setAll('body.velocity', new Phaser.Point(-150,0));

        return enemies;
    },

    getLevelData: function(level) {
        return game.cache.getJSON('level_1');
    },

    createExplosions: function() {
        explosions = game.add.group();
        explosions.createMultiple(20, 'explosion');
        explosions.setAll('anchor.x', 0.5);
        explosions.setAll('anchor.y', 0.5);

        explosions.forEach(function(expl){
            expl.animations.add('explosion');
        }, this);
        
        return explosions;
    },

    createStateText: function() {
        state_text = game.add.text(
            game.world.centerX, game.world.centerY, ' ', { font: '84px Arial', fill: '#fff' }
        );
        state_text.anchor.setTo(0.5, 0.5);
        state_text.visible = false;

        return state_text
    },

    bulletCollision: function(bullet, enemy) {
        bullet.kill();
        enemy.kill();

        var explosion = this.explosions.getFirstExists(false);
        if (explosion) {
            explosion.reset(enemy.body.center.x, enemy.body.center.y);
            explosion.play('explosion', 24, false, true);
        }
    },

    shipCollision: function(ship, enemy) {
        ship.kill();
        enemy.kill();

        var explosion = this.explosions.getFirstExists(false);
        if (explosion) {
            explosion.reset(ship.body.center.x, ship.body.center.y);
            explosion.scale.setTo(1.50, 1.50);
            explosion.play('explosion', 24, false, true);
        }

        this.state_text.text="GAME OVER";
        this.state_text.visible = true;
    }

};