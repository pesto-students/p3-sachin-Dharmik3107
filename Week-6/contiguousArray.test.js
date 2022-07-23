const { contiguousArray, changeWindow } = require("./contiguousArray");
console.log(contiguousArray);
console.log(changeWindow);

describe("Test coniguous array method", () => {
  let Array = [1, -2, 5, -6, 2, 9, -4, 7, 12, -10, 5];
  const getSum = contiguousArray(Array, 3);
  const getString = changeWindow(Array);
  test("Output of ContiguousArray function is an integer", () => {
    expect(typeof getSum).toBe('number')
  });
  test('should return string', () => {
    expect(typeof getString).toBe('string')
  }) 
});
