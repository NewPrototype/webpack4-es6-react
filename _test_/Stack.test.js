const sum = require('./../stack/Stack')
describe('测试 sum ',()=>{
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toBe(5);
  });
  expect(4 * 2).toBe(8);   
  expect(1).not.toBe(2);
})



