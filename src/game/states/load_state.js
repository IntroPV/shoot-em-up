var load_state = {

    init: function() {},

    preload: function() {
        game.time.advancedTiming = true; // enables FPS

        game.load.image('background', 'assets/background_1780x600.png');
        game.load.image('starfield', 'assets/starfield_800x601.png');
        game.load.image('bullet', 'assets/bullet_16x7.png');
        game.load.spritesheet('ship', 'assets/ship_64x29.png', 64, 29);
        game.load.spritesheet('enemy1', 'assets/enemy1_40x30.png', 40, 30);
        game.load.spritesheet('enemy2', 'assets/enemy2_40x30.png', 40, 30);
        game.load.spritesheet('enemy3', 'assets/enemy3_40x30.png', 40, 30);
        game.load.spritesheet('enemy4', 'assets/enemy4_40x30.png', 40, 30);
        game.load.spritesheet('enemy5', 'assets/enemy5_40x30.png', 40, 30);
        game.load.spritesheet('explosion', 'assets/explosion_128x128.png', 128, 128);

        game.load.json('level_1', 'levels/l1.json');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
    	
    	game.state.start('play')
    },

    update: function() {}

};