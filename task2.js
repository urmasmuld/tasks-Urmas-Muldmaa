const firstName = "Urmas"
const birthday = "26.02.1981"

let Day = birthday.split(".")[0]
let Month = birthday.split(".")[1]
let Year = birthday.split(".")[2]

const Hobbies = ['Programmeerimine','Tugitoolisport']
const aboutMe = {firstName: firstName, BirthDate : Day + "." + Month + "." + Year , Hobbies: Hobbies}

console.log('Minu sünnipäev on: ' + Day + "." + Month + "." + Year)
