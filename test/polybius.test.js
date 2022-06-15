const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", () => {
    it("should return a string", () => {
        const message = "happy";
        const encode = true;
        const actual = polybius(message, encode);
        const expected = "3211535345"

      expect(actual).to.be.a("string");
    });

    it("should properly encode a message by converting letters to number pairs", () => {
        const message = "happy";
        const encode = true;
        const actual = polybius(message, encode);
        const expected = "3211535345"

      expect(actual).to.equal(expected);
    });

    it("should handle capital letters", () => {
        const message = "HAPPY";
        const encode = true;
        const actual = polybius(message, encode);
        const expected = "3211535345"

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout encoded message", () => {
        const message = "happy days";
        const encode = true;
        const actual = polybius(message, encode);
        const expected = "3211535345 41114534"

      expect(actual).to.equal(expected);
    });

    it("should convert both 'i' and 'j' to 42", () => {
        const message = "jail";
        const encode = true;
        const actual = polybius(message, encode);
        const expected = "42114213"

      expect(actual).to.equal(expected);
    });

    it("should properly decode messages by converting numer pairs to respective Polybius Square letters", () => {
        const message = "3211535345";
        const encode = false;
        const actual = polybius(message, encode);
        const expected = "happy"

      expect(actual).to.equal(expected);
    });

    it("should convert 42 to both 'i' and 'j'", () => {
        const message = "3242";
        const encode = false;
        const actual = polybius(message, encode);
        const expected = "h(i/j)"

      expect(actual).to.equal(expected);
    });

    it("should return false if the number of characters in the string (excluding spaces) is odd", () => {
        const message = "3211535345 411145345";
        const encode = false;
        const actual = polybius(message, encode);

      expect(actual).to.be.false;
    });

})
