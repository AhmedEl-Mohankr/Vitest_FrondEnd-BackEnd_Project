import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2];

  //Act and store in the results
  const result = add(numbers);
  //This reduce method will be executed or every array value where you get the previous value and the current value.
  //  Then you return prevValue + curValue.
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  //Assert
  expect(result).toBe(expectedResult);
});

//Testing things that shouldn't happen
it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const result = add(inputs);
  expect(result).toBeNaN();
  //This test will fail because we got '0invalid1' and we expected it to be NaN.
  //That means there is something in math.js function that needs adjustment.
});

//Another test to show that the function doesn't work as intended.
it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];
  const result = add(numbers);
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + +curValue, // to force a conversion of the string to a number.
    0
  );
  expect(result).toBe(expectedResult);
  //To solve this issue, go to the math.js and add + to number within the for loop.
});

//Another test to return 0 if an empty array is provided.

it("should yield 0 (not crash) if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});

//Another test to check what will happen if I don't pass in any number (no argument is passed into "add").
// It means that in the following test, I will not need const numbers
// In JS there is no error so we need to use a function that catch error so we will use try and catch.function
//expect should receive a function and Vitest should check this function for us and check whether it it froze.
    //toThrow should checks whether an error was thrown. The function stored in resultFn will be
    //executed by Vitest when the test runs and Vitest will check if an error was thrown and consider
    //The test is successful if an error was thrown.
    // You can also change toThrow to ".not."toThrow"
    // expect(resultFn).not.toThrow();
//You can also use .not. with toBe() 
    
it("should throw an error if no value is passed into the function", () => {
  //easy way
  const resultFn = () => {
    add();
    expect(resultFn).toThrow();
  };

  //hard way
  // try {

  //   const result = add();

  // } catch (error) {
  //   expect(error).toBeDefined();
  // }
});







//A test to throw an error if provided with multiple arguments instead of an arrau.
it("should throw an error if provided with multiple arguments instead of an array", () => { 
  const num1 = 1;
  const num2 = 2;
  //Create the result function where I can add and pass num1 and num2 to it
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow(/is not iterable/);
  });










/* 
if you want not to use 'import' keyword, then from package.json
Then scroll to 'script' ± "test" and (--globals) of the value.
This ought to call test from Vitest globally.

You can either use {test} or {it} keyword.
These test and it functions can be excuted. It requires two arguments.
1- first argument is string it('What your test will test and what is your expectation').
You need to use short concise sentence

2- second argument is (pass a pointer to a never function or you just create an anonymous function).
Such as an anonymous arrow function.

3- Between {you will write here your testing code}.
4- When the test is execute the function and to be precise with the "it" function, we register this test
and it will be picked up by the test runner.
The add function in math.js and pass in an array of numbers.Then define some expected value which then
will be checked by vitest.
So by the assertion library that you are using and and it will either mark the test as success or fail.

5- You will need to import the "add" function from math.js. By import {add} from './math'
you will need to declare the expected result as a variable to the add function.
6- You will need to expect what the result value should be and what we consider a success.
7- You will need to import the "expect" function 
8- you will need to add another method to the "expect" function which "toBe" or any other methods that 
are provided by the assertion library or vitest
The "to" methods will help you defining your success criteria
9- Now, we need to run the test and for this, we need to execute the test script in the end which is:
test: "vitest --run --reporter verbose"

*/

/* 
How to run test in terminal:
1- type npm test OR npm run test

test:watch => it another type to running a test:
it will run the test but keeps watching the test file. Just as we run a development server during
development which watches our source code files and therefore also reloads a page if we changed our source code.
Now the test files get watched and this means if i now changed something in a test, For example
my expected result if I change it to 5 instead of 6, the test will fail.

The test should be considered a success if the expectation result that you defined with the "expect" function
and then one of these 2 functions expect and toBe. And it fails if the expectation result is not met.

*/

/*
Our test script didn' follow the following the AAA pattern: 
AAA - Arrange, Act, Assert: 
It is all about 3 phrases:

A => Arrange phase => where you define the testing environment and values that you are using in the
test.


A => Act phase => where you perform the actual testing. So where you execute the function that 
should be tested.


A => Assert phase => where you evaluate the result of the test and you set the expectation and 
you simply define which results lead to a success and which result will lead to a failed test.
----------------------------------------------------------------

In the test code above, we didn't actually arrange our values as we just created an array that 
it was passed to the add function.

This has been solved by assigning our array of numbers to a variable called numbers.
Then we changed in the argument of the add function to be "numbers" instead of the array of numbers
Now the result function is dynamic. 

Now we need to make the assert phase is dynamic also. This by rearranging my expected results.
*/
