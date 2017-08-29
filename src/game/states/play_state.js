var play_state = {

    init: function() {},

    preload: function() {
    	game.time.advancedTiming = true; // enables FPS
	},

    create: function() {
        // Background
        var background = game.add.tileSprite(0, 0, 1781, 600, 'background');
        background.autoScroll(-25,0);
        var starfield = game.add.tileSprite(0, 0, game.width, game.height, 'starfield');
        starfield.autoScroll(-60,0);

        // Bullets
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(20, 'bullet');
        bullets.setAll('scale.x', 1.5);
        bullets.setAll('scale.y', 1.5);
        //bullets.scale.set(1.5, 1.5);
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);

        // Ships
    	new Ship(game, 70, game.world.centerY, bullets);
    },

    update: function() {},

    render: function() {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
    }

};