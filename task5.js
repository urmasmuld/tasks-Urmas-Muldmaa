function testString(input){ // function to check wheter it has some value or not
let answer = ""
    if (input) {
        answer =  "true"
    } else {
        answer = "false"
    }
    return answer
}

console.log(testString(''))
console.log(testString('tere'))
console.log(testString('minu nimi on John'))
