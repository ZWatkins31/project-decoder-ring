
const polybiusModule = (function () {


  function polybius(input, encode = true) {

    // declare codedAlphabet object with key-value pairs that make up polybius square
    const codedAlphabet = {
			a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", "(i/j)": "42", k: "52", l: "13", m: "23",
			n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55",
		};

// CODE THAT FOLLOWS IS FOR ENCODING
    // declare encodedMessage variable    
    let encodedMessage = "";
    if (encode === true){
       // convert input to lower case   
       const inputMessage = input.toLowerCase();      
       // loop over inputMessage. if currentElement === " ", add space to encodedMessage. If currentElement === i or j, add 42 to encodedMessage.
       for(let element in inputMessage){
           let currentElement = inputMessage[element];
           if (currentElement === " ") encodedMessage += " ";
           if (currentElement === "i" || currentElement === "j") encodedMessage += codedAlphabet["(i/j)"];
           // loop through codedAlphabet to find matching key character. Add matching key value to the encodedMessage
           for (let key in codedAlphabet){
               if (key === currentElement) encodedMessage += codedAlphabet[key];
        }
      }
      return encodedMessage;
    }
    // console.log(encodedMessage, 'encodedMessage')


// CODE THAT FOLLOWS IS FOR DECODING
    // declare encodedMessage variable    
    let decodedMessage = "";
    if (!encode){
       // return false if length of input numbers is odd
       if (input.replace(" ", "").length % 2 !== 0) return false;      
       // loop through input      
       for (let i = 0; i < input.length; i += 2){
          // if iteration is a space, add space to decodedMessage;  increment 1 space instead of 2;  run 'continue' to return to i+=2 for next iteration (once space has been added)
          if (input[i] === " "){
            decodedMessage += " ";
            i = i - 1;
            continue;
          }
          // declare codedNumber variable that is equal to [i]+[i+1]          
          let codedNumber = input[i] + input[i+1];
          // loop through the codedAlphabet object. Find matching object value (2 digit #) and add respective object key (alphabetic character) to the decodedMessage
          for (let key in codedAlphabet){
            let keyValue = codedAlphabet[key];
            if (codedNumber == keyValue) decodedMessage += key;
          }
       }
    }
    // console.log(decodedMessage, "decodedMessage");
    return decodedMessage;
  }

  return {
    polybius,
  };
})();

// console.log(polybius("Hi world")) //> '3242 2543241341'
// console.log(polybius("3242 2543241341", false)) //> 'h(i/j) world'

module.exports = { polybius: polybiusModule.polybius };
