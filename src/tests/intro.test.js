import { describe, it, expect } from "vitest";
// const max = require("../intro");
import { max, fizzBuzz, Factorial } from "../intro";
describe("max", () => {
  it("should return 1st arg if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return 2nd arg if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("shoule be 1st arg if both are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("FizzBuzz", () => {
  it("should return Fizz if  number is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return Buzz if it is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return FizzBuzz if it is divisible by 5 and 3", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return value type of String", () => {
    expect(fizzBuzz(67)).toBeTypeOf("string");
  });
});
describe("factorial", () => {
  it("return 1 if the arg is 0", () => {
    expect(Factorial(0)).toBe(1);
  });
  it("should return factorial of the arg passed", () => {
    expect(Factorial(1)).toBe(1);
    expect(Factorial(5)).toBe(120);
  });
  it("should return invalid if arg is neg", () => {
    let n = -5;

    expect(Factorial(n)).toBe("invalid");
  });
});
