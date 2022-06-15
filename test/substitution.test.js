const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests", () => {
    it("should return false if alphabet is undefined", () => {
        const input = "message"
        // const alphabet = "";
        const encode = true;
        const actual = substitution(input, encode);

      expect(actual).to.be.false;
    });

    it("should return false if alphabet is not exactly 26 characters long", () => {
        const input = "message"
        const alphabet = "abcd";
        const encode = true;
        const actual = substitution(input, alphabet, encode);

      expect(actual).to.be.false;
    });

    it("should properly encode an input message", () => {
        const input = "thinkful"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "jrufscpw"

      expect(actual).to.equal(expected);
    });

    it("should properly decode an input message", () => {
        const input = "jrufscpw"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        const expected = "thinkful"

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces while encoding", () => {
        const input = "thinkful yay"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "jrufscpw exe"

      expect(actual).to.equal(expected);
    });   

    it("should maintain spaces while decoding", () => {
        const input = "jrufscpw exe"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        const expected = "thinkful yay"

      expect(actual).to.equal(expected);
    });

    it("should handle special characters while encoding", () => {
        const input = "message"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "y&ii$r&"

      expect(actual).to.equal(expected);
    });   
    
    it("should handle special characters while decoding", () => {
        const input = "y&ii$r&"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        const expected = "message"

      expect(actual).to.equal(expected);
    });  
    
    it("capital letters should be ignored", () => {
        const input = "MESSage"
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "y&ii$r&"

      expect(actual).to.equal(expected);
    }); 

    it("should return false if any alphabet characters are duplicated", () => {
        const input = "message"
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const encode = true;
        const actual = substitution(input, alphabet, encode);

      expect(actual).to.be.false;
    }); 
    
})