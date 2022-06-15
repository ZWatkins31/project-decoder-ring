
const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    // if no input, return message
    // if no shift, or shift < -25, or shift > 25, return false
    if (!input) return "Input message required!";
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // set decoder mode by inverting shift value
    if (encode === false) shift = shift * -1;
    
    // turn input to lowercase
    const inputString = input.toLowerCase();

    // use .split to create an array of the inputString characters
    const inputMessageArray = inputString.split("");
      // console.log(inputMessageArray, "inputMessageArray");

    // use .map to turn inputMessageArray characters to unicode
    const unicodeArray = inputMessageArray.map((character) =>{
        let unicodeNumber = character.charCodeAt();
  
        // if unicodeNumber is part of alphabet (# between 97 & 122), push unicode number to unicodeArray, else push character to unicodeArray
        if (unicodeNumber >= 97 && unicodeNumber <= 122) return unicodeNumber
        else return character    
    })
      // console.log(unicodeArray, "unicodeArray");

    // add shift value to unicodeArray numbers. If uni is a number, apply shift value to uni value. If uni is not a number, return uni value    
    const shiftedUnicode = unicodeArray.map((uni) => {
        if (typeof uni === 'number'){
          let shiftedUni = uni + shift;
          // add correction to shitedUni values if value falls to the left of "a" (unicode 97) or to the right of "z" (unicode 122), else retrun shiftedUni        
          if (shiftedUni > 122) return shiftedUni - 26;
          if (shiftedUni < 97) return shiftedUni + 26;
          else return shiftedUni;
        }   
        return uni;
    })
      // console.log(shiftedUnicode, "shiftedUnicode");

    // convert shiftedUnicode array values back to string characters
    let outputArray = shiftedUnicode.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
  // console.log(outputArray, "outputArray");
  
  // join outputArray to make final outputMessage
  const outputMessage = outputArray.join("");
  // console.log(outputMessage, "outputMessage");

  return outputMessage;
 }
 
  return {
    caesar,
  };
})();

// console.log(caesar("Apple Beez!", 3)) //test

module.exports = { caesar: caesarModule.caesar };