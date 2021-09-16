const firstval =  ""
const secondval =  "tere"
const thirdval =  "minu nimi on John"

console.log(Boolean(firstval !== ""))
console.log(Boolean(secondval !== ""))
console.log(Boolean(thirdval !== ""))

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter(firstval));
  console.log(capitalizeFirstLetter(secondval));
  console.log(capitalizeFirstLetter(thirdval));
