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

// the structure of the map (it is static; once created, it doesn't change)
var map;

// the ASCII display: a 2D array of characters (and THIS thing does change)
var asciidisplay;

// initialize Phaser (a game framework)
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create
});
// From the tut: Since default monospace fonts tend to be about 60% 
// as wide as they are high, we've initialized the canvas size to be 
// 0.6 * the font size * the number of columns.
// We're also telling Phaser that it should call our create() function 
// immediately after it's finished initialising.


function create() {
  // initialize the keyboard commands
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
  console.log("function create");
  // initialize map
  initMap();
  
  // initialize screen
  asciidisplay = [];
  for (var y = 0; y < ROWS; y++) {
    var newRow = [];
    asciidisplay.push(newRow);
    for (var x = 0; x < COLS; x++)
      // newRow.push(initCell('', x, y));
      newRow.push(initCell(map[y][x], x, y));
  }
  drawMap();
}



function onKeyUp(event) {
  switch (event.keyCode) {
    // stub
    case Phaser.Keyboard.LEFT:
    case Phaser.Keyboard.RIGHT:
    case Phaser.Keyboard.UP:
    case Phaser.Keyboard.DOWN:
  }
}

function initCell(ch, x, y) {
  // add a single cell in a given position to the asciidisplay
  var style = { font: FONT + "px monospace", fill: "#fff"};
  console.log("function initCell");
  return game.add.text(FONT * 0.6 * x, FONT * y, ch, style);
}

// create a random map
function initMap() {
  map = [];
  for (var y = 0; y < ROWS; y++) { // like for int i = 0...
    var newRow = [];
    for (var x = 0; x < COLS; x++) { // like for int j = 0...
      if (Math.random() > 0.8)
	newRow.push('#'); // appr. 20% walls
      else
	newRow.push('.'); // appr. 80% floors
    }
    map.push(newRow);
  }
  console.log("function initMap");
}

// TODO: Try using an ordinary array for this
// (check whether there is a chance to use div and %
// so I can switch from array[x][y] to array[xy_element_position])

// TODO: Read about generating maps, including the articles mentioned in the tut:
// http://gamedevelopment.tutsplus.com/tutorials/how-to-use-bsp-trees-to-generate-game-maps--gamedev-12268
// http://gamedevelopment.tutsplus.com/tutorials/cave-levels-cellular-automata--gamedev-9664


function drawMap() {
  for (var y = 0; y < ROWS; y++) { // like for int i = 0...
    for (var x = 0; x < COLS; x++) 
      asciidisplay[y][x].content = map[y][x]; // x and y are as standard 2D coordinates: horiz and vert
  }
  console.log("function drawMap");
}
  
// TODO: check if asciidisplay is an array of objects or whut
// TODO: check what the "content" property is (is it native js or not)