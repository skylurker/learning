// [2017-12-04] Challenge #343 [Easy] Major scales
// https://www.reddit.com/r/dailyprogrammer/comments/7hhyin/20171204_challenge_343_easy_major_scales/
// May 09, 2018

let notes = ["C",  "C#",  "D",  "D#",  "E",  "F",  "F#",  "G",  "G#",  "A",  "A#",  "B"];
let solfege = {"Do" : 0, "Re" : 2, "Mi" : 4, "Fa" : 5, "So" : 7, "La" : 9, "Si" : 11};


function note(scale, pronounce){
  console.log(notes[(notes.indexOf(scale) + solfege[pronounce]) % 12 ]);
}
note("C", "Do"); // -> "C"
note("C", "Re"); // -> "D"
note("C", "Mi"); // -> "E"
note("D", "Mi"); // -> "F#"
note("A#", "Fa"); // -> "D#"