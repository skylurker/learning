// Following this tutorial:
// How to Make Your First Roguelike
// by Ido Yehieli22 
// published at tutsplus.com on Dec 2013


// some constants

// font size
var FONT = 32;

// map dimensions
var ROWS = 10;
var COLS = 15;

// number of actors per level (including the player)
var ACTORS = 10;

// initialize Phaser (a game framework)

// From the tut: Since default monospace fonts tend to be about 60% 
// as wide as they are high, we've initialized the canvas size to be 
// 0.6 * the font size * the number of columns.
// We're also telling Phaser that it should call our create() function 
// immediately after it's finished initialising.
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create
});

function create() {
  // initialize the keyboard commands
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
}

function onKeyUp(event) {
  switch (event.keyCode) {
    // stub
    case Keyboard.LEFT:
    case Keyboard.RIGHT:
    case Keyboard.UP:
    case Keyboard.DOWN:
  }
}