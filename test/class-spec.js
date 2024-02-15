const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");


describe("Word", function () {
  let myWord;
  beforeEach(() => {
    myWord = new Word("test");
  });

  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      expect(myWord).to.have.property('word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(myWord.word).to.equal('test')
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(myWord.removeVowels()).to.equal('tst');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(myWord.removeConsonants()).to.equal('e');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(myWord.pigLatin()).to.equal('esttay')
    });
  });
});