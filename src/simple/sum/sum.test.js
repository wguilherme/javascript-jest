const sum = require('./sum')

test('soma 1 e 2 pra dar 3', ()=> {
   expect(sum(1, 2)).toEqual(3)
})