const firstName = "Urmas"
// const birthday = "26.02.1981"
const birthday = new Date(1981, 02, 26)
const Hobbies = ['Programmeerimine','Tugitoolisport']
const formattedBirthDay = birthday.getDate() + '.' + birthday.getMonth() + '.' + birthday.getFullYear()
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