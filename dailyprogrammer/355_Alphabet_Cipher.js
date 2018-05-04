// [2018-03-26] Challenge #355 [Easy] Alphabet Cipher
// https://www.reddit.com/r/dailyprogrammer/comments/879u8b/20180326_challenge_355_easy_alphabet_cipher/
// May 04, 2018

// the encoding table:
// letter "a" (zeroeth in alphabet string) in the k-th string
// is in ((26-k) mod 26)-th position
// letter "c" (second in alphabet string) in the k-th string
// is in ((26+2-k) mod 26)-th position

// console.log("abcdefghijklmnopqrstuvwxyz".length);
// console.log("zabcdefghijklmnopqrstuvwxy"[(26-25) % 26]);
// console.log("zabcdefghijklmnopqrstuvwxy"[(26+2-25) % 26]);

let message1 = "thepackagehasbeendelivered";
let key1 = "snitch";

function encrypt(message, key){
	let keyStr = key.repeat(message.length / key.length + 1);
	keyStr = keyStr.substring(0, message.length);

	/*
	Now you can look up the column S in the table
	and follow it down until it meets the T row.
	The value at the intersection is the letter L.
	*/

	let encrypted = "";

	for(let i = 0; i < message.length; i++){
	  let column = keyStr.charCodeAt(i) - 97;
	  let row = message.charCodeAt(i) - 97;
	  encrypted += String.fromCharCode((column + row) % 26 + 97);

	 // console.log("abcdefghijklmnopqrstuvwxyz".charAt(message1.charCodeAt(i) - 97),
	 // "abcdefghijklmnopqrstuvwxyz".charAt(keyStr1.charCodeAt(i) - 97));
	}

	return encrypted;
}

console.log(encrypt(message1,key1));

//console.log(message1.length, keyStr1, keyStr1.length);