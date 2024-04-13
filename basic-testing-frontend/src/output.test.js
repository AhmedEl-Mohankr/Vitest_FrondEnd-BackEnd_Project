import { describe, it, expect } from "vitest";

//We will create a test suite for the 2 functions in output.js

import { generateResultText } from "./output";

describe("generateResultText", () => {
  //When checking for results with soecific type values then remember to have 3 values (number, string, boolean).
  it("should return a string, no matter which value is passed in ", () => {
    const val1 = 1;
    const val2 = "invalid";
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    //When checking a specific type of data, then remember to use tobeTypeOf(string, number, boolean)
    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is provided as a result", () => {
    const result = 5;

    const resultText = generateResultText(result);

    //We are using toContain to check whether the result text contains the number 5 as a string
    //The function in output.js should return "Result: " + calculationResult
    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = "no-calc";

    const resultText = generateResultText(result);

    expect(resultText).toBe("");
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
});
