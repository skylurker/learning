// [Weekly #25] Escape the trolls
// https://www.reddit.com/r/dailyprogrammer/comments/4vrb8n/weekly_25_escape_the_trolls/
// 01 May 2018

/*
Phase 1

Create your character and make it moveable. You can use this amazing maze (see what I did there?) or create one yourself. 
If you are going to use ASCII for the game, I suggest you use <>v^ for your character since direction becomes important.

Place the character in a random spot and navigate it to the exit. X marks the exit.

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


let adventurer = '@';
let adventurerCoords = [0, 0];

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
			maze[y] = maze[y].replaceAt(x, adventurer);
			adventurerCoords = [x, y];
			//maze[y][x] = adventurer;
			whatever = false;
		}
	//console.log(maze[y][x]);
	}

}

function canWalkTo(x, y){
	return x >= 0 && 
		   x < maze[0].length &&
		   y >= 0 &&
		   y < maze.length &&
		   maze[y][x] != '#';
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  //console.log('keydown event\n\n' + 'key: ' + keyName);
  switch(keyName){
  	/*
  	case 'ArrowUp': console.log("arrow up!!"); break;
  	case 'ArrowDown': console.log("arrow down"); break;
  	case 'ArrowLeft': console.log("arrow left..."); break;
  	case 'ArrowRight': console.log("arrow right."); break;
  	*/
  	case 'ArrowUp': tryToStep(0, -1); break;
  	case 'ArrowDown': tryToStep(0, 1); break;
  	case 'ArrowLeft': tryToStep(-1, 0); break;
  	case 'ArrowRight': tryToStep(1, 0); break;
  }
});

function tryToStep(dx, dy){
	let curX = adventurerCoords[0];
	let curY = adventurerCoords[1];
	let newX = curX + dx;
	let newY = curY + dy;

	console.log("I'd like to move to", newX, newY);
	if(canWalkTo(newX, newY)){
		console.log("Yeah, I'll move to", newX, newY);
		if(maze[newY][newX] == 'X'){
			infobox.innerHTML = "<h1>You win!</h1>";
		}
		maze[curY] = maze[curY].replaceAt(curX, ' ');
		maze[newY] = maze[newY].replaceAt(newX, adventurer);
		adventurerCoords = [newX, newY];
		renderMaze();

	}
	
}

placeAdventurer();
renderMaze();
