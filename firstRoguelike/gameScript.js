// Following this tutorial:
// How to Make Your First Roguelike
// by Ido Yehieli22 
// published at tutsplus.com on Dec 2013

// with edits by skylurker, Jul 2015

// typed with kwrite

// ------------------
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

// the list of all actors, where actorList[0] is the player
var player;
var actorList; // actorList[index] = {x coordinate, y coordinate, hitpoints}
var livingEnemies; 

// for a quick search: this one points to each actor in its position
var actorMap; // actorMap[actor.y_actor.x] = actor

// initialize Phaser (a game framework)
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
  create: create
});
// From the tut: Since default monospace fonts tend to be about 60% 
// as wide as they are high, we've initialized the canvas size to be 
// 0.6 * the font size * the number of columns.
// We're also telling Phaser that it should call our create() function 
// immediately after it's finished initialising.

// get a random integer number
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function initDisplay() {
  asciidisplay = [];
  for (var y = 0; y < ROWS; y++) {
    var newRow = [];
    asciidisplay.push(newRow);
    for (var x = 0; x < COLS; x++)
      newRow.push(' ');
    
  }
  console.log("function initDisplay");
}

// initialize a random map
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

// create actors at random locations
function initActors() {
  actorList = [];
  actorMap = {}; // associative array
  for (var e = 0; e < ACTORS; e++) {
    // create new actor
    var actor = {x: 0, y: 0, hp: e == 0 ? 3 : 1}; // 3 hitpoints for player, 1 for each monster
    do {
      // pick a random position which is both a floor AND is not occupied
      actor.y = randomInt(ROWS);
      actor.x = randomInt(COLS);
    } while (map[actor.y][actor.x] == '#' || actorMap[actor.y + "_" + actor.x] != null);
    
    // add references to the actor to both actorMap and actorList
    actorMap[actor.y + "_" + actor.x] = actor;
    actorList.push(actor);
  }
  
  // player is the first element of the array
  player = actorList[0];
  livingEnemies = ACTORS - 1;
  console.log("function initActors");
  console.log(player);
}

// show the actors
// enemies are displayed as e, and the player character as its number of hitpoints
function drawActors() {
  for (var a in actorList) {
    // if the creature is still alive and breathing
    if (actorList[a].hp > 0) {
      var a_x = actorList[a].x;
      var a_y = actorList[a].y;
      // assign place_on_the_screen[row][col].content = index_of_actor_in_actorList
      // if index_of_actor == 0 (i.e. it is the adventurer), then display hp; otherwise, display letter e
     //  asciidisplay[actorList[a].y][actorList[a].x].content = a == 0 ? '' + player.hp : 'e';
    // asciidisplay[actorList[a].y][actorList[a].x].content = (a == 0) ? initCell('@', actorList[a].x, actorList[a].y) : initCell('e', actorList[a].x, actorList[a].y);
    // initCell(map[y][x], x, y)
      asciidisplay[a_y][a_x] = (a == 0) ? '@' : 'e';
    }
  }
  console.log("function drawActors");
}
  
  
function drawCell(ch, x, y) {
  // add a single cell in a given position to the asciidisplay
  var style = { 
    font: FONT + "px monospace", 
    fill: "#fff",
  };
  console.log("function drawCell");
  return game.add.text(FONT * 0.6 * x, FONT * y, ch, style);
}

function render() {
  for (var y = 0; y < ROWS; y++) {
    for (var x = 0; x < COLS; x++)
      drawCell(asciidisplay[y][x], x, y);
  }
}


function drawMap() {
  for (var y = 0; y < ROWS; y++) { // like for int i = 0...
    for (var x = 0; x < COLS; x++) 
      asciidisplay[y][x] = map[y][x]; // x and y are as standard 2D coordinates: horiz and vert
    // initCell(map[y][x], x, y);
  }
  console.log("function drawMap");
}

  
// TODO: check if asciidisplay is an array of objects or whut
// TODO: check what the "content" property is (is it native js or not)
// TODO: try to implement "partial" rendering, 
// i.e. we render only those parts of the world which have changed, not the whole world

// check if the actor can walk this direction
function canGo(actor, dir) {
  return actor.x + dir.x >= 0 &&                // left side of the screen
  actor.x + dir.x <= COLS - 1 &&                // right side of the screen
  actor.y + dir.y >= 0 &&                       // upper side of the screen
  actor.y + dir.y <= ROWS - 1 &&                // lower side of the screen
  map[actor.y + dir.y][actor.x + dir.x] == '.'; // floor tile OR the enemy
}

// This function, given a valid direction,
// moves the actor to the desired empty tile,
// OR, if the tile is occupied with some other being, attacks it.
// (But does not move to the desired tile.)
// If the victim's HP level falls below zero, it dies and gets
// erased from the actorMap and actorList.
// This function DOES NOT redraw the map.
// Redrawing occures inside the onKeyUp function.
// Apparently, enemies attack each other, too.
function moveTo(actor, dir) {
 console.log("moveTo " + actor + dir);
  // check whether actor can move in the given direction
  if (!canGo(actor, dir))
    return false;
  
  // compose an index for the actorMap check
  var newKey = (actor.y + dir.y) + '_' + (actor.x + dir.x);
  // if the destination tile has an actor in it
  if (actorMap[newKey] != null) {
    var victim = actorMap[newKey];
    // decrement their hitpoints
    victim.hp--;
    // if the victim is dead, remove it from the actorMap and actorList
    if (victim.hp <=0 ) {
      actorMap[newKey] = null;
      actorList[actorList.indexOf(victim)] = null;
      // if it was an enemy
      if (victim != player) {
	livingEnemies--;
	// if all the enemies are destroyed
	if (livingEnemies == 0) {
	  // display "victory message"
	  var victory = game.add.text(
	    game.world.centerX, 
	    game.world.centerY, 
	    'You won!\nPress Ctrl + R to restart',
	    {fill : '#2e2', background : '#000', align : 'center'});
	  victory.anchor.setTo(0.5, 0.5);
	} // end livingEnemies == 0
      } // end victim != player
    } // end victim.hp <=0
  } else {
    // if the tile was empty:
    // remove reference to the actor's old position
    actorMap[actor.y + '_' + actor.x] = null;
    
    // update position
    actor.x += dir.x;
    actor.y += dir.y;
    
    // add reference to the actor's new position
    actorMap[actor.y + '_' + actor.x] = actor;
  }
  return true;
}

function create() {
  // initialize the keyboard commands
  game.input.keyboard.addCallbacks(null, null, onKeyUp);
  console.log("function create");
  initDisplay();
  // initialize map
  initMap();
  drawMap();
  // initialize actors
  initActors();
  drawActors();
  
  
  // initialize screen
  /*
   * asciidisplay = [];
  for (var y = 0; y < ROWS; y++) {
    var newRow = [];
    asciidisplay.push(newRow);
    for (var x = 0; x < COLS; x++)
      newRow.push(initCell('', x, y));
      newRow.push(initCell(map[y][x], x, y));
  }
  */
  //drawMap();
  //
  
  render();
  
 //debugging
  
 // asciidisplay[3][5].content = 'P';
 // drawCell('Q', 3, 5);
 // var walkTest = canGo(actorList[0], {x: -1, y: 1});
 // var walkTest2 = canGo(actorList[0], {x: 1, y: 0});
 // var walkTest3 = canGo(actorList[0], {x: 3, y: 3});
 // console.log("canGo(actorList[0], {x: -1, y: 1}) : " + walkTest);
 // console.log("canGo(actorList[0], {x: 1, y: 0}) : " + walkTest2);
 // console.log("canGo(actorList[0], {x: 3, y: 3}) : " + walkTest3);
  
}



function onKeyUp(event) {
  
  // move @ depending on the player's input
  var acted = false;
  switch (event.keyCode) {
    case Phaser.Keyboard.LEFT:
      acted = moveTo(player, {x: -1, y: 0});
      console.log("pressed Phaser.Keyboard.LEFT");
      break;
    case Phaser.Keyboard.RIGHT:
      acted = moveTo(player, {x: 1, y: 0});
      alert("Pressed Keyboard RIGHT");
      break;
    case Phaser.Keyboard.UP:
      acted = moveTo(player, {x: 0, y: -1});
      break;
    case Phaser.Keyboard.DOWN:
      acted = moveTo(player, {x: 0, y: 1});
      break;
  }
 if (acted)
   drawMap();
    drawActors();
   render();
}

