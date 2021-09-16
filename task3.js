// Määrame väärtused
const firstVal = "Bob"
const secondVal = ""
const thirdVal = ["Jill", "Jane", "Jim", "Joe"]

// Funktsioon kontrollimaks, kas tegemist on Stringiga, tühja väärtusega või massiiviga
function greet (name){
    let result = 'Hello, ' // Et ei peaks iga tingimuse puhul seda teksti lisama, siis määrame teksti alguse ja lõpu ära
    if (Array.isArray(name)){ // Kui tegemist massiiviga
        result += name.join(" and ") // Lisame masiivi väärtused ühte stringi, eraldajaks " and "
    } else if (!name) {
        result += 'my friend' // Kui sisendit pole antud
    } else {
        result += name // Kui tegemist tavalise stringiga
    }
    result += '.' // Sama jutt, mis alguses lisamisega - lisame ühe korra punkti, et ei peaks iga "IF" tingimusega lisama
    return result
}

const result1 = greet(firstVal)
console.log(result1)
const result2 = greet()
console.log(result2)
const result3 = greet(thirdVal)
console.log(result3)
