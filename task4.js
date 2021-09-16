// New version of task 4.0
const arrColor = ["Red", "Green", "White", "Black"] // set array
let color = "" // set color variable

for (let i = 0; i < arrColor.length; i++) { // loop through array
    color = color + arrColor[i] + ',' // add comma to the end of each value
}

console.log(color.replace(/.$/,"."))
console.log(color)
console.log(color.split(",").join("+"))
