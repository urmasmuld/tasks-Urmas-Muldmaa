const movieData = require('./moviedata.json')

// Exercise 1
// Lets correct some JSON data - convert string to number, string to decimal, dates etc...
  // A bit dirty month fix :)
  function getMonth(monthStr){
    return new Date(monthStr+'-1-01').getMonth()
  }
const options = { year: 'numeric', month: '2-digit', day: 'numeric' }
movieData.forEach(function(elem){
  elem.Year = parseInt(elem.Year)
  let arrReleased = elem.Released.split(" ")
  let movDate = new Date(arrReleased[2], getMonth(arrReleased[1]), arrReleased[0])

  elem.Released = movDate.toLocaleString("et-EE", options)
  elem.Genre = elem.Genre.split(", ")
  elem.Director = elem.Director.split(", ")
  elem.Writer = elem.Writer.split(", ")
  elem.Actors = elem.Actors.split(", ")
  elem.imdbRating = parseFloat(elem.imdbRating)
  elem.imdbVotes = parseInt(elem.imdbVotes.replace(/,(?=\d{3})/g, ''))
  elem.Response = elem.Response.toLowerCase() === 'true'
})
// Sort movies by the 'Year' - for a better overview
movieData.sort(function(a,b) {
  if (a.Year < b.Year)
    return -1
  if (a.Year > b.Year)
    return 1
  return 0
})

  // console.log(movieData)

  // Exercise 1.1 - Find and log out all movies that are released between 1962 and 1972
const startYear = 1962
const endYear = 1972

let ex1Data = []
let betweenYears = function(min,max){
  for (let i = 0; i < movieData.length; i++){
    if(movieData[i].Year >= min && movieData[i].Year <= max){
        ex1Data.push(movieData[i])
    }
  }
}
betweenYears(startYear,endYear)
// console.log("Movies between 1962-1972: ")
console.log(ex1Data)
// Exercise 1.2 - From those find movie, that has best imdb rating and movie that has been rated most // imdbRating
let maxRating = ex1Data.reduce((max, movie) => max.imdbRating > movie.imdbRating ? max : movie)
// console.log('\x1b[36m%s\x1b[0m',"Max rated movie between 1962-1972: ")
// console.log(maxRating.Title)

// Exercise 1.3 - Log out "Best rated movie is movie name, directed by movie director and was released in release date - day, month, year."
// console.log('\x1b[33m%s\x1b[0m', "Movie name: \"" + maxRating.Title + "\"\n" + "Directed by: \"" + maxRating.Director + "\"\n" + "Released: \"" + maxRating.Released + "\"")

// Exercise 1.4 - Log out "Most rated movie is movie name, directed by movie director and was released in release date - day, month, year."
let mostRated = ex1Data.reduce((max, movie) => max.imdbVotes > movie.imdbVotes ? max : movie)
// console.log(mostRated)
console.log('\x1b[33m%s\x1b[0m', "Movie name: \"" + mostRated.Title + "\"\n" + "Directed by: \"" + mostRated.Director + "\"\n" + "Released: \"" + mostRated.Released + "\"")
