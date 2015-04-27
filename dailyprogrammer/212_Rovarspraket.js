/* 
[2015-04-27] Challenge #212 [Easy] R?varspr?ket
отправлено 4 hours ago, изменено * автор XenophonOfAthens2 1
Description

When we Swedes are young, we are taught a SUPER-SECRET language that only kids know, so we can hide secrets from our confused parents. This language is known as "R?varspr?ket" (which means "Robber's language", more or less), and is surprisingly easy to become fluent in, at least when you're a kid. Recently, the cheeky residents of /r/Sweden decided to play a trick on the rest on reddit, and get a thread entirely in R?varspr?ket to /r/all. The results were hilarious.
R?varspr?ket is not very complicated: you take an ordinary word and replace the consonants with the consonant doubled and with an "o" in between. So the consonant "b" is replaced by "bob", "r" is replaced with "ror", "s" is replaced with "sos", and so on. Vowels are left intact. It's made for Swedish, but it works just as well in English.
Your task today is to write a program that can encode a string of text into R?varspr?ket.
(note: this is a higly guarded Swedish state secret, so I trust that none of you will share this very privileged information with anyone! If you do, you will be extradited to Sweden and be forced to eat surstr?mming as penance.)
(note 2: surstr?mming is actually not that bad, it's much tastier than its reputation would suggest! I'd go so far as to say that it's the tastiest half-rotten fish in the world!)
Formal inputs & outputs

Input

You will recieve one line of input, which is a text string that should be encoded into R?varspr?ket.
Output

The output will be the encoded string.
A few notes: your program should be able to handle case properly, which means that "Hello" should be encoded to "Hohelollolo", and not as "HoHelollolo" (not the second capital "H").
Also, since R?varspr?ket is a Swedish invention, your program should follow Swedish rules regarding what is a vowel and what is a consonant. The Swedish alphabet is the same as the English alphabet except that there are three extra characters at the end (?, ? and ?) which are all vowels. In addition, Y is always a vowel in Swedish, so the full list of vowels in Swedish is A, E, I, O, U, Y, ?, ? and ?. The rest are consonants.
Lastly, any character that is not a vowel or a consonant (i.e. things like punctuation) should be left intact in the output.
Example inputs

Input 1

Jag talar R?varspr?ket!
Output 1

Jojagog totalolaror Ror?vovarorsospopror?koketot!
Input 2

I'm speaking Robber's language!
Output 2

I'mom sospopeakokinongog Rorobobboberor'sos lolanongoguagoge!
Challenge inputs

Input 1

Tre Kronor ?r v?rldens b?sta ishockeylag.
Input 2

V?r kung ?r coolare ?n er kung. 
Bonus

Make your program able to decode a R?varspr?ket-encoded sentence as well as encode it.
*/


/* */
//var vowels = [A, E, I, O, U, Y, ?, ?, ?];
//var consonants = /[b-df-hj-np-tv-xz]/i;
//function rovarspraket(input){
//return 
//};

console.log(
  "Jag talar R?varspr?ket!"
    .replace(/([b-df-hj-np-tv-xz])/gi, "$1o$1"));
