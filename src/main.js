var game = new Phaser.Game(
    1024,
    576, //768,
    Phaser.CANVAS,
    "game"
);

game.state.add('boot', boot_state);
game.state.add('load', load_state);
game.state.add('play', play_state);
game.state.start('boot');