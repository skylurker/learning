// [Weekly #25] Escape the trolls
// https://www.reddit.com/r/dailyprogrammer/comments/4vrb8n/weekly_25_escape_the_trolls/
// Created 01 May 2018
// Last modified 02 May 2018

/*
Phase 1

Create your character and make it moveable. You can use this amazing maze (see what I did there?) or create one yourself. 
If you are going to use ASCII for the game, I suggest you use <>v^ for your character since direction becomes important.

Place the character in a random spot and navigate it to the exit. X marks the exit.

*/

/*
Phase 2

We have a more powerfull character now. He can push blocks that are in front of him. 
He can only push blocks into an empty space, not into another block.

e.g.

Can push

#   #     
# > #   ##
#   #        

Can't push

#   #     
# > #####
#   #   

*/

/*
Нам нужно знать
 - где находится актор (в данном случае - игрок),
 - куда собирается пойти
 - есть ли там #
 - есть ли на следующей клетке - если она в пределах поля - #
*/

let maze = ["#####################################",
			"# #       #       #     #         # #",
			"# # ##### # ### ##### ### ### ### # #",
			"#       #   # #     #     # # #   # #",
			"##### # ##### ##### ### # # # ##### #",
			"#   # #       #     # # # # #     # #",
			"# # ####### # # ##### ### # ##### # #",
			"# #       # # #   #     #     #   # #",
			"# ####### ### ### # ### ##### # ### #",
			"#     #   # #   # #   #     # #     #",
			"# ### ### # ### # ##### # # # #######",
			"#   #   # # #   #   #   # # #   #   #",
			"####### # # # ##### # ### # ### ### #",
			"#     # #     #   # #   # #   #     #",
			"# ### # ##### ### # ### ### ####### #",
			"# #   #     #     #   # # #       # #",
			"# # ##### # ### ##### # # ####### # #",
			"# #     # # # # #     #       # #   #",
			"# ##### # # # ### ##### ##### # #####",
			"# #   # # #     #     # #   #       #",
			"# # ### ### ### ##### ### # ##### # #",
			"# #         #     #       #       # #",
			"#X###################################"];


let pre = document.getElementById("container");
let infobox = document.getElementById("infobox");

function renderMaze(){
	let mazeString = "";
	maze.forEach(function(element){
		// console.log(element);
		mazeString += element + "\n";
	});

	pre.textContent = mazeString;
}

//renderMaze();


// let adventurer = '@';
// let adventurerCoords = [0, 0];

function Actor(designation){
	this.designation = designation;
	this.coords = [0, 0];
}

let adventurer = new Actor('@');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//console.log("x = ", x, "y = ", y);

function placeAdventurer(){
	let whatever = true;
	let  count = 0;
	while(whatever && count < 1000){
		count++;
		let x = getRandomInt(0, maze[0].length);
		let y = getRandomInt(0, maze.length);
		console.log("x = ", x, "y = ", y);
		if (maze[y][x] == ' '){
			maze[y] = maze[y].replaceAt(x, adventurer.designation);
			//adventurerCoords = [x, y];
			adventurer.coords = [x, y];
			//maze[y][x] = adventurer;
			whatever = false;
		}
	//console.log(maze[y][x]);
	}

}


// dx and dy are where (relatively to our actor) is the block
Actor.prototype.canPushBlock = function(dx, dy){
	let curX = this.coords[0];
	let curY = this.coords[1];
	let desiredX = curX + dx;
	let desiredY = curY + dy;
	let desiredBlockX = desiredX + dx;
	let desiredBlockY = desiredY + dy;
	console.log("desired block coords: ", desiredBlockX, desiredBlockY);
	return  desiredBlockX >=0 &&
			desiredBlockX < maze[0].length &&
			desiredBlockY >= 0 &&
			desiredBlockY < maze.length &&
			maze[desiredBlockY][desiredBlockX] != '#';  // if the desired block position isn't occupied by another block;
}

/* TODO
	make some isInsideMaze function, like 
	this.X >=0 &&
	this.X < maze[0].length &&
	this.Y >= 0 &&
	this.Y < maze.length;

	or if we talk about blocks, maybe
	isInsideMaze(x, y) and so
	x >=0 && and so on
	since we're not gonna make an object for a desired block position, hence no 'this'.
*/

/* TODO
	Also maybe refactor and write like
	actor.coords.x instead of actor.coords[0]
	So coords = {x: 0, y: 0};
*/

// if the actor can walk to maze[y][x]
Actor.prototype.canWalkTo = function(x, y){
	return x >= 0 && 
		   x < maze[0].length &&
		   y >= 0 &&
		   y < maze.length &&
		   (maze[y][x] != '#' || this.canPushBlock(x - this.coords[0], y - this.coords[1]));
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  //console.log('keydown event\n\n' + 'key: ' + keyName);
  switch(keyName){
  	case 'ArrowUp': tryToStep(0, -1); break;
  	case 'ArrowDown': tryToStep(0, 1); break;
  	case 'ArrowLeft': tryToStep(-1, 0); break;
  	case 'ArrowRight': tryToStep(1, 0); break;
  }
});

function tryToStep(dx, dy){
	/*let curX = adventurerCoords[0];
	let curY = adventurerCoords[1];*/
	let curX = adventurer.coords[0];
	let curY = adventurer.coords[1];
	let newX = curX + dx;
	let newY = curY + dy;

	console.log("I'd like to move to", newX, newY);
	if(adventurer.canWalkTo(newX, newY)){
		console.log("Yeah, I'll move to", newX, newY);
		if(maze[newY][newX] == 'X'){ // reached exit
			infobox.innerHTML = "<h1>You win!</h1>";
			maze[curY] = maze[curY].replaceAt(curX, ' ');
			maze[newY] = maze[newY].replaceAt(newX, adventurer.designation);
		} else if(maze[newY][newX] == '#'){
			// redraw actor
			maze[curY] = maze[curY].replaceAt(curX, ' ');
			maze[newY] = maze[newY].replaceAt(newX, adventurer.designation);
			// redraw pushed block
			maze[newY + dy] = maze[newY + dy].replaceAt(newX + dx, '#');
		} else {
			maze[curY] = maze[curY].replaceAt(curX, ' ');
			maze[newY] = maze[newY].replaceAt(newX, adventurer.designation);
		}

		
		//adventurerCoords = [newX, newY];
		adventurer.coords = [newX, newY];

		renderMaze();

	}
	
}

placeAdventurer();
renderMaze();
