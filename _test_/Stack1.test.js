const sum = require('./../stack/Stack.1')
describe('测试 multiply',()=>{
  it('multiply 1 * 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(2);
  });
  test('multiply 3 * 2 to equal 6', () => {
    expect(sum(3, 2)).toBe(6);
  });
})



