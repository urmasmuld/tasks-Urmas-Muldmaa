// Function to display inserted string "n" times
// https://github.com/urmasmuld
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 09.09.2021

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
  }

function randArray(quantity){
    const arr = []
    while(arr.length < quantity){
        var candidateInt = getRandomInt(1,100)
        if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
    return(arr)
}

function getArrayMax(array){
    return "Array: " + array + " | Max value: " + Math.max.apply(null, array)

}

console.log(getRandomInt(1,100))
console.log(randArray(5))
console.log(getArrayMax(randArray(5)))
