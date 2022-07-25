const arraySorting = require('./arraySortingDSA')

describe("Test Function", () => {
    const Array = [0, 1, 0, 2, 0, 1, 0, 2, 1];
    const sortedArray = arraySorting(Array);
  test("No element lost during process", () => {
    expect(sortedArray.length === Array.length).toBe(true);
  });
  test("output type is array(object)",()=>{
    expect(typeof sortedArray).toBe('object');
  })
});
