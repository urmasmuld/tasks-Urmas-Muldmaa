// Function to display inserted string "n" times
// https://github.com/urmasmuld
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 09.09.2021
const min = 1   // declare minimum value 
const max = 100 // declare maximum value

function getRandomInt(min, max) { // function to retrieve random number between constants 'max' and 'min'
    min = Math.floor(min) // declare min 
    max = Math.floor(max) // declare max
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
  }

function randArray(quantity){ // function to retrieve 'n' random numbers
    const arr = [] // declare array
    for (var i = 0; i < quantity; i++) {
        var candidateInt = getRandomInt(min,max) // get random number between 1-100
        arr.push(candidateInt) // add random number to array
    }
    return(arr)
}

function getArrayMaxMin(array){ // function to retrieve array's min/max values and how many even numbers are in array
let arrVal = "" // declare array
let min = Math.min.apply(null, array) // declare min number in array
let max = Math.max.apply(null, array) // declare max number in array
let sumEven = 0 // start counter

for (var i = 0; i < array.length; i++) { // walk through array to search even values
    if (isEven(array[i]) == true) { // increase counter if number is even
        sumEven++
    }
}
// Saab ka nii, siis ei pea kasutama selleks eraldi funktsiooni
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) { // increase counter if number is even
//         sumEven++
//     }
// }

    arrVal += "Array: " + array + " |>| Max/Min: " + max + " / " + min + " |>| Even numbers: " + sumEven // generate result
    return arrVal
    
}

function isEven(value) {
	if (value%2 == 0)
		return true
	else
		return false
}

console.log(getRandomInt(1,100))
console.log(randArray(5))
console.log(getArrayMaxMin(randArray(5)))
