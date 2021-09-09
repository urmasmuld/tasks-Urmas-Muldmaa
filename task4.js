const arrColor = ["Red", "Green", "White", "Black"] // set array
let arrayLength = arrColor.length                   // check array length

function colorsX(vars){ 
    let colors =  ""    // set variable
    for (var i = 0; i < arrayLength; i++) { // start for loop to display values
    if (i+1 == arrayLength) { // if is last value, then dont add delimiter
        colors += arrColor[i]
    } else {
        colors += arrColor[i] + vars // if not last value, then add delimiter
    }
}
    return colors       // return value
}
console.log(colorsX(","))
console.log(colorsX(", "))
console.log(colorsX(" + "))
