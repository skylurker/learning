/*THE GAME OF LIFE*/


// # walls and bricks
// o beings

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

// cells' coordinates
// vector != geometric vector. It's just x and y coordinates aka (x, y).
function Vector(x, y){ // this is a constructor, hence _V_ector and not _v_ector
	this.x = x;
	this.y = y;
};
Vector.prototype.plus = function(other){
	return new Vector(this.x + other.x, this.y + other.y);
};

// the Grid object
function Grid(width, height){
	this.space = new Array(width * height);
	this.width = width;
	this.height = height;
};
Grid.prototype.isInside = function (vector){
	return  vector.x >= 0 && vector.x < this.width &&
			vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector){
	return this.space[vector.x + this.width * vector.y]; // space[index] = x + y * width;
};
Grid.prototype.set = function(vector, value){
	this.space[vector.x + this.width * vector.y] = value;
}

// for debugging purposes
/* var grid = new Grid(5,5);
console.log(grid.get(new Vector(1,1)));
grid.set(new Vector(1,1), "B");
console.log(grid.get(new Vector(1,1)));
console.log(grid.isInside("lol")); // is it a good time to start hating JS? */

// The World

function elementFromChar(legend, ch){
	if (ch == " ") {return null;};
	var element = new legend[ch]();
	element.originChar = ch;
	return element;
}


var directions = {
	"n":  new Vector( 0, -1),
	"ne": new Vector( 1, -1),
	"e":  new Vector( 1,  0),
	"se": new Vector( 1,  1),
	"s":  new Vector( 0,  1),
	"sw": new Vector(-1,  1),
	"w":  new Vector(-1,  0),
	"nw": new Vector(-1, -1)
};

// Bouncing critter

function randomElement(array){
	return array[Math.floor(Math.random() * array.length)];
}
var directionNames = "n ne e se s sw w nw".split(" ");
// split(separator) turns the string into an array, separators are deleted
function BouncingCritter(){
	this.direction = randomElement(directionNames);
}
BouncingCritter.prototype.act = function(view){
	if (view.look(this.direction) != " "){
		this.direction = view.find(" ") || "s";
		// || "s" here in case every cell around is not empty, and we don't want this.direction to get null
	}
	return {type: "move", direction: this.direction};
}