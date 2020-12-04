const array =  require('./array')

test('retorna apenas os pares no array', ()=> {
   let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
   let array2 = [2,4,6,8,10,12,14]

   expect(array.retornaPares(array1)).toEqual(array2)
})


test('precisa inserir o item 4 (to contain)', () => {
   let arraycont = ['item1', 'item2', 'item3']
   expect(array.addItem4(arraycont)).toContain('item4')
   })