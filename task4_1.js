const arrColor = ["Red", "Green", "White", "Black",""]
// const Colors = arrColor.toString()

const colorsArr = arrColor.join(",")
const Colors = colorsArr.replace(/,$/,".")
const Colors1 = colorsArr
const Colors2 = arrColor.join("+")

console.log(Colors)
console.log(Colors1)
console.log(Colors2)
