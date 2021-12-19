const FizzBuzz = require("../src/fizzBuzz")
const subject = new FizzBuzz

describe('FizzBuzz', () => {
  it('is expected to return a number if none of game rules apply', () => {
    expect(subject.check(1)).toEqual(1)
  });
  
  it('is expected to return a "fizz" if the number is divisable by 3', () => {
    expect(subject.check(3)).toEqual("fizz")
  });

  it('s expected to return a "buzz" if the number is divisable by 5', () => {
    expect(subject.check(5)).toEqual("buzz")
  });

  it('is expected to return a "fizz-buzz" if the number is divisable by 15', () => {
    expect(subject.check(15)).toEqual("fizz-buzz")
  });
});