import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number of a type number", () => {
  const input = "10";
  const result = transformToNumber(input);
  expect(result).toBe(10);
  //expect(result).toBeTypeOf("number");
});

it("should transform a string number to a number of a type number", () => {
  const input = "10";
  const result = transformToNumber(input);
  expect(result).toBeTypeOf('number');
  //expect(result).toBeTypeOf("number");
});


it("should yield NaN for non-transformable values", () => {
  const input = "Ahmed";
  const result = transformToNumber(input);
  expect(isNaN(result)).toBe(true);
  //expect(result).toBeNaN('number');
});


it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const result = transformToNumber(input);
  expect(result).toBeNaN();
});


it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {}; // The second input is an empty object.
  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

