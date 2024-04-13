import { it, expect, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty", () => {
  it("should throw an error, if an empty string is provided", () => {
    const input = ""; // empty string
    const validationFn = () => validateStringNotEmpty(input); //a validation function that stores the validation check on input
    expect(validationFn).toThrow();
  });

  it("should throw an error with a message that contains a reason (must not be empty)", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });

  it("should throw an error if a long string of blanks is provided", () => {
    const input = "";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it("should throw an error if any other value than a string is provided", () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it("should not throw an error, if a non-empty string is provided", () => {
    const input = "valid";
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });
});

describe("validateNumber", () => {
  it("should throw an error if NaN is provided", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it("should throw an error with a message that contains a reason (invalid number)", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  // This test fail. Unless you adjust the validate number function to be if (isNaN(number) || typeof number !== "number)
  it("should throw an error if a non-numeric value is provided", () => {
    const input = "1";
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it("should not throw an error, if a number is provided", () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});

/*
Test suite using descripe('')
----------------------------------------------------------------------
desribe()> takes 2 arguments {function name as a string with (), and the second argument will be anonymous function.

describe('validateNumber()', () => {
    
Write your test cases here.

*/
