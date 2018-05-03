// [2018-04-23] Challenge #358 [Easy] Decipher The Seven Segments
// https://www.reddit.com/r/dailyprogrammer/comments/8eger3/20180423_challenge_358_easy_decipher_the_seven/
// 03 May 2018

/*
Today's challenge will be to create a program to decipher a seven segment display, commonly seen on many older electronic devices.
*/

/*
console.log(" _ _ _ _ _ _ _ ".replace(/ /g, '.'));
console.log(" | _| _||_||_ |_ ||_||_|".replace(/ /g, '.'));
console.log(" ||_ _| | _||_| ||_| _|".replace(/ /g, '.'));
*/

// divide each string by groups of three symbols
// create constant sets representing digits
// compare strings
// btw maybe use unix-like sums... like
// 3 consists of three rows. Let " " be 0, "|" be 1, "_" be 2
// according to their positions, we get
// 3 => (0*100 + 2*10 + 0*1) + (0*100 + 2*10 + 1*1) + (0*100 + 2*10 + 0*1) = 61
// BUT that would make 2 and 5 the same
// so either we... we could multiply every row by its own coefficient
// hence
// 2 => (0*100 + 2*10 + 0*0)*100 + (0*100 + 2*10 + 1*1)*10 + (1*100 + 2*10 + 1*0)*1 = 2330
// 5 => (0*100 + 2*10 + 0*0)*100 + (1*100 + 2*10 + 1*0)*10 + (0*100 + 2*10 + 1*1)*1 = 3221


// split into several strings
// https://stackoverflow.com/a/6259543

// or maybe use mod??
/*
let str = " | _| _||_||_ |_ ||_||_|";
let str1 = str.split('').map(function(elem){
        if(elem==' ')
      return 0;
  else if(elem=='|')
    return 1;
  else if(elem=='_')
    return 2;
}).join('');
let arr = str1.match(/.{1,3}/g);

let mappedArr = arr.map(function(item){
  return item[0]*100 + item[1]*10 + item[2];
});

console.log(mappedArr);
*/

// duh NO!
// use this kind of thing:
//var chunks = [];
//for (var i = 0, charsLength = str.length; i < charsLength; i += 3) {
// chunks.push(str.substring(i, i + 3));
//}

// or, like, process every character in a loop
// divide the multiplier by 10 every time, until it's 1,
// then push the sum to a separate array and nullify the sum variable

// the easiest way would be to hardcode all the _| pieces

let input1 = 	"    _  _     _  _  _  _  _ \n" +
				"  | _| _||_||_ |_   ||_||_|\n" +
				"  ||_  _|  | _||_|  ||_| _|";

let input2 = 	"    _  _  _  _  _  _  _  _ \n" +
				"|_| _| _||_|| ||_ |_| _||_ \n" +
				"  | _| _||_||_| _||_||_  _|";

let input3 = 	" _  _  _  _  _  _  _  _  _ \n" +
				"|_  _||_ |_| _|  ||_ | ||_|\n" +
				" _||_ |_||_| _|  ||_||_||_|";

let input4 = 	" _  _        _  _  _  _  _ \n" +
				"|_||_ |_|  || ||_ |_ |_| _|\n" +
				" _| _|  |  ||_| _| _| _||_ ";

let digits = 	[" _ | ||_|", // 0
				"     |  |", // 1
				" _  _||_ ", // 2
				" _  _| _|", // 3
				"   |_|  |", // 4
				" _ |_  _|", // 5
				" _ |_ |_|", // 6
				" _   |  |", // 7
				" _ |_||_|", // 8
				" _ |_| _|"]; // 9

function decipher(input){
	let strings = input.split("\n");
	// divide each string into groups of three characters
	let chunks = strings.map(s => s.match(/.{1,3}/g)); 
	let result = "";
	for (let i = 0; i < 9; i++){
		// slap each bunch of groups into one string and find a match in the "digits" array to find the corresponding digit
		result += digits.indexOf(chunks[0][i]+chunks[1][i]+chunks[2][i]);
	}
	console.log(result);
}

decipher(input1);
decipher(input2);
decipher(input3);
decipher(input4);

