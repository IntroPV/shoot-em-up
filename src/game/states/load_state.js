var load_state = {

    init: function() {},

    preload: function() {
    	game.load.spritesheet('ship', 'assets/ship_64x29.png', 64, 29);
        game.load.image('background', 'assets/background_1780x600.png');
        game.load.image('starfield', 'assets/starfield_800x601.png');
        game.load.image('bullet', 'assets/bullet_16x7.png');
    },

    create: function() {
    	if (!game.hasOwnProperty('keyboard')) {
    		game.keyboard = new Keyboard();
    	}

        game.physics.startSystem(Phaser.Physics.ARCADE);
    	
    	game.state.start('play')
    },

    update: function() {}

};