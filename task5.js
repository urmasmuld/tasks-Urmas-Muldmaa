const firstval =  ""
const secondval =  "tere"
const thirdval =  "minu nimi on John"
let checkVal

function testVal(string) {
    return !!string
}

console.log(testVal(firstval))
console.log(testVal(secondval))
console.log(testVal(thirdval))

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter(firstval));
  console.log(capitalizeFirstLetter(secondval));
  console.log(capitalizeFirstLetter(thirdval));
