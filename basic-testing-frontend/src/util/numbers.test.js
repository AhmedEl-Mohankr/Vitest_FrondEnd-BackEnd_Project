import { describe, it, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("TransformToNumber", () => {
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
    expect(result).toBeTypeOf("number");
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
});
/* NOTE:
--------
 Technically, expect() does not return true or false. Instead, it throws an error, 
and if the expectation is not met. The test runner treats thrown errors as failed tests and test
that do not throw as passed. 

*/

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];
    const cleanedNumbers = cleanNumbers(numberValues);
    //Another way of expectation>
    // expect(cleanedNumbers[0]).toBeTypeOf("number");
    // expect(cleanedNumbers).toBe([1, 2]); // this way will generate in error as toBe needs their values to be the exact values (objects are not the same 'memory values are different). That's why we use toEqual() instead.
    expect(cleanedNumbers).toEqual([1, 2]);
    //toEqual => Does not check the exact values but instead goes through the values you pass to toEqual
    // It will do deep comparison of that value with the values that you are evaluating (cleanedNumbers and [1, 2])
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = [" ", 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
