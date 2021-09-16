const firstName = "Urmas"
// const birthday = "26.02.1981"
const birthday = new Date(1981, 02, 26)
const Hobbies = ['Programmeerimine','Tugitoolisport']
let birthdayDay
let birthdayMonth
if (birthday.getDate() < 10) {
    birthdayDay = '0' + birthday.getDate()
} else {
    birthdayDay = birthday.getDate()
}
if (birthday.getMonth() < 10) {
    birthdayMonth = '0' + birthday.getMonth()
} else {
    birthdayMonth = birthday.getMonth()
}

const formattedBirthDay = birthdayDay + '.' + birthdayMonth + '.' + birthday.getFullYear()
//const aboutMe = {firstName: firstName, BirthDate : Day + "." + Month + "." + Year , Hobbies: Hobbies}
const aboutMe = {
    firstName,
    formattedBirthDay,
    Hobbies
}

// let Day = birthday.split(".")[0]
// let Month = birthday.split(".")[1]
// let Year = birthday.split(".")[2]

console.log(aboutMe)
//console.log('Minu sünnipäev on: ' + Day + "." + Month + "." + Year)
console.log(formattedBirthDay)