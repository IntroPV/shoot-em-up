var game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    "game"
);

game.state.add('boot', boot_state);
game.state.add('play', play_state);
game.state.start('boot');