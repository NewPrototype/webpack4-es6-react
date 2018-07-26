const { compare,enter} = require('./../src/util/index.js');

describe('测试-----util------', () => {
 
  describe("compare",()=>{
    let arr = [{ age: '1' }, { age: '3' }, { age: '2' }];
    it('compare type=true ', () => {
      expect(arr.sort(compare('age', true))).toEqual([
        { age: '3' },
        { age: '2' },
        { age: '1' },
      ]);
    });
    it('compare type=false ', () => {
      expect(arr.sort(compare('age'))).toEqual([
        { age: '1' },
        { age: '2' },
        { age: '3' },
      ]);
    });
    it('compare type=null ', () => {
      expect(arr.sort(compare('age', false))).toEqual([
        { age: '1' },
        { age: '2' },
        { age: '3' },
      ]);
    });
    it('compare key=null type=null ', () => {
      expect(arr.sort(compare())).toEqual([
        { age: '1' },
        { age: '2' },
        { age: '3' },
      ]);
    });
  })
  describe("enter",()=>{
    it("enter hello\nworld",()=>{
      let str='hello\nworld'
      expect(enter(str)).toEqual(['hello','world'])
    })
    it("enter hello world",()=>{
      let str='hello world'
      expect(enter(str)).toEqual(['hello world'])
    })
    it("enter null",()=>{
      let str=null
      expect(enter(str)).toEqual([])
    })
  })
});
