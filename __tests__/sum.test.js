// import sum from './app/sum'
const sum = require('../app/sum')

describe("Add function", ()=> {
    test("adds 1 + 2 to equal 3", ()=>{
        expect(sum(1,2)).toBe(3);
    })
})