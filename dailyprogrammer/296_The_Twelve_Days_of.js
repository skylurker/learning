// [2016-12-19] Challenge #296 [Easy] The Twelve Days of...
// https://www.reddit.com/r/dailyprogrammer/comments/5j6ggm/20161219_challenge_296_easy_the_twelve_days_of/
// 19 December 2016

// too lazy to write them all :p
var cnts = ["first", "second", "third", "fourth", "fifth", "6th", "7th", "8th", "9th", "10th", "11th", "12th"];

var stuff = ["Partridge in a Pear Tree",
			"Turtle Doves",
			"French Hens",
			"Calling Birds",
			"Golden Rings",
			"Geese a Laying",
			"Swans a Swimming",
			"Maids a Milking",
			"Ladies Dancing",
			"Lords a Leaping",
			"Pipers Piping",
			"Drummers Drumming"]

for (var i = 0; i < 12; i++){
  console.log("On the", cnts[i], "day of Christmas\nmy true love sent to me:\n");
  for (var j = i; j >= 0; j--){
    if (j==0 && i != 0) {console.log("and", j+1, stuff[j]); }
    else {console.log(j+1, stuff[j]); }
  }
  console.log('\n');
}