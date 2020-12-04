const calcs = require('./calcs')

test('soma 1 e 2 pra dar 3', ()=> {expect(calcs.sum(1, 2)).toEqual(3)})
test('divide 10 por 3 pra dar 3.33...', ()=> {expect(calcs.division(10, 3)).toBeCloseTo(3.33)})
test('multiplica 5 por 10 para dar 50', ()=> {expect(calcs.multiply(5, 10)).toEqual(50)})