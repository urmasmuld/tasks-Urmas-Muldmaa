// Function to display inserted string "n" times
// https://github.com/urmasmuld
// 09.09.2021

const rep = "Hi! " // assign String
function repeatStr(input, times) { // function to repeat given string 'n' times
    let result = input.repeat(times)  // Repeat 'n' times
    if (times === undefined) { // Check if variable 'times' is present
        console.log(rep)
    } else if (times >= 10) { // if repeat value is >=10
        console.log(rep.repeat(times))
    } else {
        console.log(result)
    }
}

repeatStr(rep)
repeatStr(rep,2)
repeatStr(rep,3)
repeatStr(rep,12)
