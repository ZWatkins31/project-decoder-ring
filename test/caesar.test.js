const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", () => {
    it("should return false if shift = 0", () => {
        const message = "abcde";
        const shift = 0;
        const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if shift value is less than -25", () => {
        const message = "abcde";
        const shift = -50;
        const actual = caesar(message, shift) 

        expect(actual).to.be.false;
    })

    it("should return false if shift value is more that 25", () => {
        const message = "abcde";
        const shift = 50;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    })

    it("should ignore capital letters", () => {
        const message = "ABCde";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "bcdef"

        expect(actual).to.equal(expected);
    })

    it("should encode a message by shifting letters to the right", () => {
        const message = "abcde";
        const shift = 6;
        const actual = caesar(message, shift);
        const expected = "ghijk"

        expect(actual).to.equal(expected);
    })

    it("should properly encode letters at the end of the alphabet", () => {
        const message = "xyz";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "abc"

        expect(actual).to.equal(expected);
    })

    it("should ignore spaces and non-aphabet characters", () => {
        const message = "abc def!";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "def ghi!"

        expect(actual).to.equal(expected);
    })

    it("should encode a message when provided with a negative shift value, shifting letters to the left", () => {
        const message = "def";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "abc"

        expect(actual).to.equal(expected);
    })

    it("should decode a message by shifting letters to the left by given shift value", () => {
        const message = "def";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "abc"

        expect(actual).to.equal(expected);
    })

    it("should properly decode letters at the begining of the alphabet", () => {
        const message = "abc";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "xyz"

        expect(actual).to.equal(expected);
    })   
});