

const substitutionModule = (function () {


  function substitution(input, alphabet, encode = true) {

    // check if alphabet = 26 characters and is defined. if not, return false
    if (!alphabet || alphabet.length !== 26) return false;

    // create array of standard alphabet characters.
    const stdAlphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // create array of coded alphabet characters
    const codedAlphaArray = alphabet.split("");
    let codedObj = {};
    // console.log(codedAlphaArray, 'codedAlphaArray')

    // test for duplication in alphabet
    for (let i = 0; i < codedAlphaArray.length; i++) {
        for (let j = i + 1; j < codedAlphaArray.length; j++) {
              if (codedAlphaArray[i] === codedAlphaArray[j]) return false;
          }
      }

    // use .forEach method to create key-value pair objects and add to codedObj
    stdAlphaArray.forEach((letter, index) => { codedObj[letter] = codedAlphaArray[index]; });
    // console.log(codedObj, 'codedObj');


    // CODE THAT FOLLOWS IS FOR ENCODING
    let encodedMessage = "";
    if(encode === true){
        // convert input to lower case   
        const inputMessage = input.toLowerCase();
        // loop over inputMessage. if currentElement === " ", add space to encodedMessage.
        for(let element in inputMessage){
            let currentElement = inputMessage[element];
            if (currentElement === " ") encodedMessage += " ";

            // loop through codedObj to find matching key character. Add matching key value to encodedMessage
            for (let key in codedObj){
                if (key === currentElement) { encodedMessage += codedObj[key]; }
            }
        }
     return encodedMessage;
    }
    // console.log(encodedMessage, 'encodedMessage');


// CODE THAT FOLLOWS IS FOR DECODING
    let decodedMessage = "";
    if(encode === false){
        // loop over input. if currentCharacter === " ", add space to decodedMessage.
        for(let character in input){
            let currentCharacter = input[character];
            if (currentCharacter === " ") decodedMessage += " ";

            // loop through codedObj to find matching value character. Add respective key to decodedMessage
            for (let key in codedObj){
                let keyValue = codedObj[key];
                if (keyValue === currentCharacter) { decodedMessage += key; }
            }
        }
     return decodedMessage;
    }
    console.log(decodedMessage, 'decodedMessage');        
    
  }

  return {
    substitution,
  };
})();

// console.log(substitution("THINKful yay", "xoyqmcgrukswaflnthdjpzibev")); //> 'jrufscpw'
// console.log(substitution("y&ii$r& zvb pvn", "$wae&zrdxtfcygvuhbijnokmpl", false)); //> "message"

module.exports = { substitution: substitutionModule.substitution };
