// import div from '../app/div'
const div = require('../app/div')

describe("Div function", () => {
    test("Divides by 0 should returns null", () => {
        expect(div(1, 0)).toBeNull()
    })

    test("Divides 4 by 2 is equal to 2", () => {
        expect(div(4, 2)).toBe(2)
    })
})