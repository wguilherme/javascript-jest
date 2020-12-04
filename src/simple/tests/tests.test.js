test('3 mais 3', () => {
   let valor = 3 + 3
   expect(valor).toBeGreaterThan(5) ///maior que 5
   expect(valor).toBeGreaterThanOrEqual(6) ///maior ou igual a 6
   expect(valor).toBeLessThan(8) ///menor que 8
   expect(valor).toBeLessThanOrEqual(7) ///menor ou igual a 7
   expect(valor).not.toEqual(5) ///não igual a 5
 })