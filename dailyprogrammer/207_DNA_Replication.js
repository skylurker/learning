/* [2015-03-23] Challenge #207 [Easy] Bioinformatics 1: DNA Replication

Description

DNA - deoxyribonucleic acid - is the building block of every organism. It contains information about hair color, skin tone, allergies, and more. It's usually visualized as a long double helix of base pairs. DNA is composed of four bases - adenine, thymine, cytosine, guanine - paired as follows: A-T and G-C.
Meaning: on one side of the strand there may be a series of bases
A T A A G C 
And on the other strand there will have to be
T A T T C G
It is your job to generate one side of the DNA strand and output the two DNA strands. Your program should take a DNA sequence as input and return the complementary strand.
Input

A A T G C C T A T G G C
Output

A A T G C C T A T G G C
T T A C G G A T A C C G
Extra Challenge

Three base pairs make a codon. These all have different names based on what combination of the base pairs you have. A handy table can be found here. The string of codons starts with an ATG (Met) codon ends when a STOP codon is hit.
For this part of the challenge, you should implement functionality for translating the DNA to a protein sequence based on the codons, recalling that every generated DNA strand starts with a Met codon and ends with a STOP codon. Your program should take a DNA sequence and emit the translated protein sequence, complete with a STOP at the terminus.
Input

A T G T T T C G A G G C T A A
Output

A T G T T T C G A G G C T A A
Met Phe Arg Gly STOP
*/


/*A foolish straightforward solution.
The function takes a string of uppercase characters A, T, G, C separated by spaces as input, gives this string and the other-side DNA string as output. */

function dnaReplicate(input){
	var output="";
	for (var i=0; i<input.length; i++){
		switch(input[i]){
			case " ": output+=" "; break;
			case "A": output+="T"; break;
			case "T": output+="A"; break;
			case "G": output+="C"; break;
			case "C": output+="G"; break;
			default: console.log("Something wicked this way comes");
		}
	}
	console.log(input);
	console.log(output);
//return true;
}

dnaReplicate("A A T G C C T A T G G C");

/* A bit smarter solution, thanks to chunes 
http://www.reddit.com/r/dailyprogrammer/comments/2zyipu/20150323_challenge_207_easy_bioinformatics_1_dna/cpnnrn5 */
function dnaReplicate2(input){
	var bases = "ATGC TACG ";
//var inputArray = input.split(" ");
for (var i=0; i<input.length; i++){

	output+=bases.charAt(bases.indexOf(input.charAt(i))+5);
	//output+=input.charAt(i)
}
console.log(input);
console.log(output);
}
dnaReplicate2("A A T G C C T A T G G C");