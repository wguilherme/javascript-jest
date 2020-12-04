function retornaPares(array){
   return array.filter(x => x%2 == 0)
}

function addItem4(array){
   array.push('item4')
   return array
}

module.exports = {retornaPares, addItem4}