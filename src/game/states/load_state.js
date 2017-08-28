var load_state = {

    init: function() {},

    preload: function() {
    	game.load.spritesheet('ship', 'assets/ship_64x29.png', 64, 29);
    },

    create: function() {
    	game.state.start('play')
    },

    update: function() {}

};