// Function to display inserted string "n" times
// https://github.com/urmasmuld
// 09.09.2021

const rep = "Hello! " // assign String
function repeatStr(input, times) { // function to repeat given string 'n' times
    let result = input.repeat(times)  // Repeat 'n' times
    if (!times) { // Check if variable 'times' is not in present
        console.log("Hi!")
    } else if (times >= 10) { // if repeat value is >=10
        console.log("Hi! ".repeat(times))
    } else {
        console.log(result)
    }
}

repeatStr(rep)
repeatStr(rep,2)
repeatStr(rep,3)
repeatStr(rep,12)
