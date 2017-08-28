var play_state = {

    init: function() {

    },

    preload: function() {
    	game.time.advancedTiming = true; // to enable FPS
	},

    create: function() {
    	var ship = new Ship(game, 100, 300);
    },

    update: function() {
    },

    render: function() {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
    }

};