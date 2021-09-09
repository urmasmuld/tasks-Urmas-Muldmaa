const firstval =  ""
const secondval =  "tere"
const thirdval =  "minu nimi on John"

function testString(input){ // function to check wheter it has some value or not
let answer = ""
    if (input) {
        answer =  "true"
    } else {
        answer = "false"
    }
    return answer
}

// console.log(testString(firstval))
// console.log(testString(secondval))
// console.log(testString(thirdval))

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  console.log(capitalizeFirstLetter(firstval));
  console.log(capitalizeFirstLetter(secondval));
  console.log(capitalizeFirstLetter(thirdval));
