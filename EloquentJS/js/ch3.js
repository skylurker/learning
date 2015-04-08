/*Looping a triangle*/
/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/



/*For*/
console.log("The triangle: FOR\n");
var a="";
for(var i=0; i<7; i++){
	a+="#";
	console.log(a);
}
/*While*/
console.log("The triangle: WHILE\n");
var a="";
while(a.length<7){
	a+="#";
	console.log(a);
}
/*Do while*/
console.log("The triangle: DO WHILE\n");
var a="";
do {
	a+="#";
	console.log(a);
} while (a.length<7);		











/*Fizzbuzz*/
/*
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or 
"Buzz" for numbers divisible by only one of those).
*/
console.log("Fizzbuzz code\n");
for(var cnt = 1; cnt < 101; cnt++){
	if((cnt % 3 == 0)&&(cnt % 5 == 0)){
		console.log("FizzBuzz ");
	}else if(cnt % 3 == 0){
		console.log("Fizz ");
				//}else if((cnt % 5 == 0 || cnt % 3 == 0) && !((cnt % 5 == 0) && (cnt % 3 == 0))){ simulating XOR WHICH IS TOTALLY UNNECESSARY HERE
				}else if(cnt % 5 == 0){
					console.log("Buzz ");
				}else{
					console.log(cnt+" ");
				}

			} 

/*
For the clever method, build up a string containing 
the word or words to output, and print either this word 
or the number if there is no word, potentially by making 
elegant use of the || operator. 
*/




/*Chess board*/
/*Stupid variant*/
console.log("Chess");
var string="";
for (var i=0; i<8; i++){
	if( (i==0) || (i % 2 == 0) ){
		var tmp = "# # # # \n";
	} else{
		tmp = " # # # #\n";
	}
	//console.log(i+" "+tmp);
	string+=tmp;
}
console.log(string);

/* From the tutorial: To know whether to put a space or a hash sign at a given position, 
you could test whether the sum of the two counters is even (% 2). */
console.log("Chess");
var width  = Number(prompt("Enter width", ""));
var height = Number(prompt("Enter height", ""));
var string = "";
for (var i=0; i<height; i++){
	for (var j=0; j<width; j++){
		if ((i+j)%2==0){string+=" ";}
		else {string+="#";}
	};
	string+="\n";
};
console.log(string);