/*THE GAME OF LIFE*/


// # walls and bricks
// o beings

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#     ~    #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o     ~       #",
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
};
Grid.prototype.forEach = function(f, context){
	for (var y=0; y<this.height; y++){
		for (var x=0; x<this.width; x++){
			var value = this.space[x+y*this.width];
			if (value!=null)
				f.call(context, value, new Vector(x, y));
		}
	}
};
// for debugging purposes
/* var grid = new Grid(5,5);
console.log(grid.get(new Vector(1,1)));
grid.set(new Vector(1,1), "B");
console.log(grid.get(new Vector(1,1)));
console.log(grid.isInside("lol")); // is it a good time to start hating JS? */

// The World

function elementFromChar(legend, ch){
// Tutorial: A legend is an object that tells us what each character in the map means
	if (ch == " ") {return null;};
	var element = new legend[ch]();
	element.originChar = ch;
	return element;
}
/* Tutorial: In elementFromChar, first we create an instance
 of the right type by looking up the character’s constructor
  and applying new to it. Then we add an originChar property 
  to it to make it easy to find out what character the element 
  was originally created from.

We need this originChar property when implementing the world’s 
toString method. This method builds up a maplike string from 
the world’s current state by performing a two-dimensional loop 
over the squares on the grid.
*/
function charFromElement(element){
	if (element == null) return " ";
	else return element.originChar;
}
function World(map, legend){
	var grid = new Grid(map[0].length, map.length);
	this.grid = grid;
	this.legend = legend;

	map.forEach(function(line, y){
		for (var x=0; x<line.length; x++){
			grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
		}
	});
}
World.prototype.toString = function(){
	var output = "";
	for (var y = 0; y<this.grid.height; y++){
		for (var x=0; x<this.grid.width; x++){
			var element = this.grid.get(new Vector(x,y));
			output += charFromElement(element);
		}
		output += "\n";
	}
	return output;
};
World.prototype.turn = function(){
	var acted = [];
	this.grid.forEach(function(critter, vector){
		if (critter.act && acted.indexOf(critter) == -1){
			acted.push(critter);
			this.letAct(critter, vector);
		}
	}, this);
};
World.prototype.letAct = function(critter, vector){
	var action = critter.act(new View(this, vector));
	if (action && action.type == "move"){
		var dest = this.checkDestination(action, vector);
		if (dest && this.grid.get(dest) == null){
			this.grid.set(vector, null);
			this.grid.set(dest, critter);
		}
	}
};
World.prototype.checkDestination = function(action, vector){
	if (directions.hasOwnProperty(action.direction)){
		var dest = vector.plus(directions[action.direction]);
		if (this.grid.isInside(dest))
			return dest;
	}
};

function View(world, vector){
	this.world = world;
	this.vector = vector;
}
View.prototype.look = function(dir){
	var target = this.vector.plus(directions[dir]);
	if (this.world.grid.isInside(target))
		return charFromElement(this.world.grid.get(target));
	else
		return "#";
};
View.prototype.findAll = function(ch){
	var found = [];
	for (var dir in directions){
		//console.log("this.look(dir) "+this.look(dir));
		if (this.look(dir) == ch){
			found.push(dir);//THE TYPO WAS HERE: found.push[dir];
			//console.log("found.push[dir] "+found.push[dir]);
		}
	}
	//console.log("FindAll "+found);
	return found;
};
View.prototype.find = function(ch){
	var found = this.findAll(ch);
	if (found.length == 0) return null;
	return randomElement(found);
};

function Wall(){};
// Tutorial: A wall is a simple object—it is used only for taking up space and has no act method.


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
};
var directionNames = "n ne e se s sw w nw".split(" ");
// split(separator) turns the string into an array, separators are deleted
function BouncingCritter(){
	this.direction = randomElement(directionNames);
	//console.log("BouncingCritter direction "+this.direction);
};
BouncingCritter.prototype.act = function(view){
	if (view.look(this.direction) != " "){
		this.direction = view.find(" ") || "s";
		// || "s" here in case every cell around is not empty, and we don't want this.direction to get null
	}
	//console.log("BouncingCritter direction "+this.direction);
	return {type: "move", direction: this.direction};
	
};

// Wall follower
/* From the tutorial:
The critter keeps its left hand to the wall and follows along. */
function dirPlus(dir, n){
	var index = directionNames.indexOf(dir);
	return directionNames[(index + n + 8)%8];
};
function WallFollower(){
	this.dir = "s";
};
WallFollower.prototype.act = function(view){
	var start = this.dir;
	/* Below: if the WallFollower reached a corner like this (moving up aka north)


	        ~
	    ####
	       #
	       # 

	he turns to the left (aka west)
	*/
	if(view.look(dirPlus(this.dir, -3)) != " ") // 90 + 45 degrees counterclockwise
		//there was a typo: (view.look(this.dir, -3) instead of (view.look(dirPlus(this.dir, -3))
		//IF the critter just passed some obstacle; otherwise it'll go straight
		start = this.dir = dirPlus(this.dir, -2); // 90 degrees counterclockwise
	/* Below: if the WallFollower is in a corner like this (originally moving north)

		 #
	      # ~
	      ##
	       #
	       # 

	he moves to north-west
	*/
	while (view.look(this.dir) != " "){
		this.dir = dirPlus(this.dir, 1); //45 degrees clockwise
		if (this.dir == start) break; //so the loop won't get infinite accidentally
	}
	return {type: "move", direction: this.dir};
};

var world = new World (plan,   {"#": Wall,
								"o": BouncingCritter,
								"~": WallFollower});


//BouncingCritter();
//world.turn();
console.log(world.toString());

for (var i=0; i<15; i++){
	world.turn();
	console.log(world.toString());
}
