const { sum } = require("../sum");

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(4, 2);
  //Assertion
  expect(result).toBe(6);
});
