import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

//should yield if the input value is a number
it("should transform a string number to a number of a type number", () => {
  const input = "10";
  const result = transformToNumber(input);
  expect(result).toBe(10);
  //expect(result).toBeTypeOf("number");
});
//should yield if the input value is a number
it("should transform a string number to a number of a type number", () => {
  const input = "10";
  const result = transformToNumber(input);
  expect(result).toBeTypeOf('number');
  //expect(result).toBeTypeOf("number");
});

//test to yield if the input value is not a number
it("should yield NaN for non-transformable values", () => {
  const input = "Ahmed";
  const result = transformToNumber(input);
  expect(isNaN(result)).toBe(true);
  //expect(result).toBeNaN('number');
});

//test to yield if the input value is not a number
it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const result = transformToNumber(input);
  expect(result).toBeNaN();
});

//test with multiple inputs and multiple expectations
it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {}; // The second input is an empty object.
  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

/* NOTE:
--------
 Technically, expect() does not return true or false. Instead, it throws an error, 
and if the expectation is not met. The test runner treats thrown errors as failed tests and test
that do not throw as passed. 

*/
