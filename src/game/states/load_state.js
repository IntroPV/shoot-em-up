var load_state = {

    init: function() {},

    preload: function() {
    	game.load.spritesheet('ship', 'assets/ship_64x29.png', 64, 29);
    },

    create: function() {
    	if (!game.hasOwnProperty('keyboard')) {
    		game.keyboard = new Keyboard();
    		console.log("Agrego Keyboard", game.keyboard);
    	}
    	
    	game.state.start('play')
    },

    update: function() {}

};