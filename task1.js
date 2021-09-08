let a = 5       // Number
let b = 10      // Number
let c = a + b   // Liitmine

a = "5"         // String
let d = a + b   // Liitmine

console.log('C Väärtus : ' + c) // liidetakse kaks väärtust - kuna mõlemad on Integer, siis tehakse matemaatiline tehe
console.log('D Väärtus : ' + d) // liidetakse kaks väärtust - kuna üks väärtustest on Integer ja teine String, siis ei tehta matemaatlist tehet vaid kleebitakse kaks välja n.ö. kokku
// console.log(`Hello`)
