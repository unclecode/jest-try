// import sum from './app/sum'
const task1 = require('../app/task1')

describe("Task 1", ()=> {
    test("Variable c must be defined", ()=>{
        expect(task1()).not.toBeNull();
    })
    test("Variable c should be equal to 20", ()=>{
        expect(task1()).toBe(20);
    })
})