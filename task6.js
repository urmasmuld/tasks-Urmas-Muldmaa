// Function to display inserted string "n" times
// https://github.com/urmasmuld
// 09.09.2021

const rep = "repeat " // assign String
function repeatStr(input, times) { // function to repeat given string 'n' times
    let result = input.repeat(times);  // Repeat 'n' times
    if (times === undefined) { // Check if variable 'times' is present
        console.log("Hi!");
    } else {
        console.log(result);
    }
}

repeatStr(rep);
repeatStr(rep,2);
repeatStr(rep,3);
repeatStr(rep,12);
