// https://www.reddit.com/r/dailyprogrammer/comments/5e4mde/20161121_challenge_293_easy_defusing_the_bomb/
// [2016-11-21] Challenge #293 [Easy] Defusing the bmb
// JS 18 Jan 2017
/*
If you cut a white cable you can't cut white or black cable.
If you cut a red cable you have to cut a green one
If you cut a black cable it is not allowed to cut a white, green or orange one
If you cut a orange cable you should cut a red or black one
If you cut a green one you have to cut a orange or white one
If you cut a purple cable you can't cut a purple, green, orange or white cable
*/

// the most dumb and straightforward way: IF-THEN-ELSE / SWITCH

function defuse(wires){
  for (var i = 1; i < wires.length; i++){
    /*if (wires[i-1] == "white" && (wires[i] == "white" || wires[i] == "black"))
        return "Boom";
    else if (wires[i-1] == "red" && wires[i] != "green")
      return "Boom";
    else if (*/
    switch(wires[i-1]) {
      case "white":
        if (wires[i] == "white" || wires[i] == "black") return "Boom";
        break;
      case "red":
        if (wires[i] != "green") return "Boom";
        break;
      case "black":
        if (wires[i] == "white" || wires[i] == "green" || wires[i] == "orange") return "Boom";
        break;
      case "orange":
        if (wires[i] != "red" && wires[i] != "black") return "Boom";
        break;
      case "green":
        if (wires[i] != "orange" && wires[i] != "white") return "Boom";
        break;
      case "purple":
       if (wires[i] == "purple" || wires[i] == "green" || wires[i] == "orange" || wires[i] == "white") return "Boom";
        break;
    }

  }

  return "Defused";
}


console.log(defuse(["white", "red", "green", "white"]));
console.log(defuse(["white", "orange", "green", "white"]));