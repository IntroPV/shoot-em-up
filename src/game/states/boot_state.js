var boot_state = {

    init: function() {
        var text = "Press 'Enter' to start playing!";
        var style = {font: "24px Arial", fill: "#fff", align: "center"};
        var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
        t.anchor.setTo(0.5, 0.5);
    },

    preload: function() {},

    create: function() {
    	enter_key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    	enter_key.onDown.add(function() {
    		game.state.start('load');
    	}, this);
    },

    update: function() {}

};