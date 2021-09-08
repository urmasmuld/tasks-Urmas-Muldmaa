// Määrame väärtused
const firstVal = "Bob"
const secondVal = ""
const thirdVal = ["Jill", "Jane", "Jim", "Joe"]

// Funktsioon kontrollimaks, kas tegemist on Stringiga, tühja väärtusega või massiiviga
function greet (name){
    if (Array.isArray(name)){ // Kui tegemist massiiviga
        return 'Hello, ' + name.toString().split(",").join(" and ")
//        console.log('Hello, ' + name.toString().split(",").join(" and ")) // Muudame kõigepealt massiivi stringiks (komadega eraldatud), seejärel asendame komad sõnaga " and "
    } else if (!name) {
        return 'Hello, my friend.'
//        console.log('Hello, my friend.') // Kui sisendit pole antud
    } else {
        return 'Hello, ' + name + '.'
//        console.log('Hello, ' + name + '.') // Kui tegemist tavalise stringiga
    }

}
const result = greet(firstVal)
console.log(result)
const result1 = greet()
console.log(result1)
const result2 = greet(thirdVal)
console.log(result2)

// tellResult(firstVal)
// tellResult(secondVal)
// tellResult(thirdVal)
