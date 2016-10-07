/* Bonfire: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Code by Roy Bakker
info@roy-bakker.nl
https://www.freecodecamp.com/roybkker
*/


function convertToRoman(num) {
  
  var arrayWithRomanNumbersAndLetters = [
                  {number: 1000, letter: "M"},
                  {number: 900, letter: "CM"},
                  {number: 500, letter: "D"},
                  {number: 400, letter: "CD"},
                  {number: 100, letter: "C"},
                  {number: 90, letter: "XC"},
                  {number: 50, letter: "L"},
                  {number: 40, letter: "XL"},
                  {number: 10, letter: "X"},
                  {number: 9, letter: "IX"},
                  {number: 5, letter: "V"},
                  {number: 4, letter: "IV"},
                  {number: 1, letter: "I"}
                ];
  
  var counter = num;
  var newArray = [];
  var result = "";
  for( var i = 0; i < arrayWithRomanNumbersAndLetters.length; i++){
    
    if ( counter >= 1000){
     newArray.push("M");
      counter -= 1000;
    }
    if ( counter >= arrayWithRomanNumbersAndLetters[i].number){

    newArray.push(arrayWithRomanNumbersAndLetters[i].letter);
    counter -= arrayWithRomanNumbersAndLetters[i].number;
      i= 0;
    }
  }
  

  
  return newArray.join([separator = '']);

}

convertToRoman(99);
