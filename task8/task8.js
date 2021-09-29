const movieData = require('./moviedata.json')
//// Exercise 1
// Lets correct some JSON data - convert string to number, string to decimal, dates etc...
  // A bit dirty fix for month number :)
  function getMonth(monthStr){
    return new Date(monthStr+'-1-01').getMonth()
  }
const options = { year: 'numeric', month: '2-digit', day: 'numeric' }
movieData.forEach(function(elem){
  elem.Year = parseInt(elem.Year)
  let arrReleased = elem.Released.split(" ")
  let movDate = new Date(arrReleased[2], getMonth(arrReleased[1]), arrReleased[0])

  elem.Released = movDate.toLocaleString("et-EE", options)
  elem.Runtime = elem.Runtime.replace(" min", "").replace(" h ",":")
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
// console.log(ex1Data)
// Exercise 1.2 - From those find movie, that has best imdb rating and movie that has been rated most // imdbRating
let maxRating = ex1Data.reduce((max, movie) => max.imdbRating > movie.imdbRating ? max : movie)
// console.log("\x1b[36m%s\x1b[0m","Max rated movie between 1962-1972: ")
// console.log(maxRating.Title)

// Exercise 1.3 - Log out "Best rated movie is movie name, directed by movie director and was released in release date - day, month, year."
// console.log("\x1b[33m%s\x1b[0m", "Best rated movie is \"" + maxRating.Title + "\", directed by " + maxRating.Director + " and was released in " + maxRating.Released)

// Exercise 1.4 - Log out "Most rated movie is movie name, directed by movie director and was released in release date - day, month, year."
let mostRated = ex1Data.reduce((max, movie) => max.imdbVotes > movie.imdbVotes ? max : movie)
// console.log("\x1b[36m%s\x1b[0m","Most rated movie between 1962-1972: ")
// console.log("\x1b[33m%s\x1b[0m", "Most rated movie is \"" + mostRated.Title + "\", directed by " + mostRated.Director + " and was released in " + mostRated.Released)

//// Exercise 2
// Exercise 2.1 - Find all movies, where genre includes Drama
const movieDrama = movieData.filter((p) => {
  if (p.Genre.includes('Drama')) {
      return p
  }
})

// console.log('Drama', movieDrama)
// Exercise 2.2 - From those find movie, that has best imdb rating and movie that has been rated most
let maxRatedDrama = movieDrama.reduce((max, movie) => max.imdbRating > movie.imdbRating ? max : movie)
// console.log(maxDramaRating)

// Exercise 2.3 - Log out "Best rated drama is movie name, directed by movie director and was released in release date - day, month, year."
// console.log("\x1b[36m%s\x1b[0m","Max rated Drama movie: ")
// console.log("\x1b[33m%s\x1b[0m", "Best rated drama is \"" + maxRatedDrama.Title + "\", directed by " + maxRatedDrama.Director + " and was released in " + maxRatedDrama.Released)

// Exercise 2.4 - Log out "Most rated drama is movie name, directed by movie director and was released in release date - day, month, year."
let mostRatedDrama = movieDrama.reduce((max, movie) => max.imdbVotes > movie.imdbVotes ? max : movie)
// console.log(mostRatedDrama)
// console.log("\x1b[36m%s\x1b[0m","Most rated movie between 1962-1972: ")
// console.log("\x1b[33m%s\x1b[0m", "Most rated drama is \"" + mostRatedDrama.Title + "\", directed by " + mostRatedDrama.Director + " and was released in " + mostRatedDrama.Released)

//// Exercise 3
// Exercise 3.1 - Find all movies, that are rated R
const movieRated = movieData.filter((p) => {
  // if (p.Rated.includes('R')) {
    if (p.Rated == "R") { // fixed condition
      return p
  }
})
// console.log('Rated', movieRated)

// Exercise 3.2 - Log out "Movies that are rated R are: movie names separated by comma."
function getFields(input, field) {
  let output = []
  for (let i=0; i < input.length ; ++i)
      output.push(input[i][field])
  return output
}
let movieRatedTitles = getFields(movieRated, "Title")
// console.log("Movies that are rated R are: " + "\x1b[33m%s\x1b[0m", movieRatedTitles.join())

// Exercise 3.3 - Make list of all actors, that have made rated R movie. Do not repeat one actor multiple times!
let movieRatedActors = getFields(movieRated, "Actors")
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
let uniqueActors = movieRatedActors.flat(1).filter(onlyUnique) // fixed array to 1 dimension to get unique values

// Exercise 3.4 - Log out "Actors that played in those movies: names separated by comma"
// console.log("Actors that played in those movies: " + "\x1b[33m%s\x1b[0m", uniqueActors.join())

//// Exercise 4
// Exercise 4.1 - Find all movies that have imdb rating higher than 9.0
const ratingHigherThan = movieData.filter((p) => {
  if (p.imdbRating > 9) {
      return p
  }
})
// console.log('Rating Over 9.0', ratingHigherThan)

// Exercise 4.2 - Log out "There are count movies that have been rated more than 9.0. These movies are: list of movie titles"
let ratingHigherThanTitles = getFields(ratingHigherThan, "Title")
// console.log("There are " + ratingHigherThan.length + " movies that have been rated more than 9.0. These movies are: " + "\x1b[33m%s\x1b[0m", ratingHigherThanTitles.join())

//// Exercise 5
// Exercise 5.1 - Find all movies, where Leonardo DiCaprio has played
const movieLeo = movieData.filter((p) => {
  if (p.Actors.includes('Leonardo DiCaprio')) {
      return p
  }
})

// Exercise 5.2.1 - Log out each Leonardo DiCaprio movie data like that:
                                                                    // Movie title:
                                                                    // Director
                                                                    // Plot:
// console.log("Leonardo played in these movies:")
let arr = []
for (i = 0; i < movieLeo.length; i++) {
  // console.log("Movie title: " + "\x1b[33m%s\x1b[0m", "\"" + movieLeo[i].Title + "\"\n" + "\x1b[0mDirector: " + movieLeo[i].Director + "\n" + "Plot: " + movieLeo[i].Plot + "\n")
  arr = arr.concat(movieLeo[i].Genre) // Exercise 5.2 - Genre: do they have matching genre(s), if yes log out "Matching genre(s): genre", if not log out "There are no matching genres"
}
// console.log(arr)

// Exercise 5.2.2 - Genre: do they have matching genre(s), if yes log out "Matching genre(s): genre", if not log out "There are no matching genres"
function getOccurrence(array, value) {
    var count = 0
    array.forEach((v) => (v === value && count++))
    return count
}
let arrDuplicates = []
for (i = 0; i < arr.length; i++) {
  if (getOccurrence(arr, arr[i]) >= movieLeo.length) {
    // if (getOccurrence(arr, arr[i]) >= 2) { // for testing purposes
      arrDuplicates = arrDuplicates.concat(arr[i])
  //     // console.log("Matching genre(s): " + arr[i])
  // } else {
  //   // console.log("There are no matching genres")
  }
}
if(arrDuplicates.length >0) {
  // console.log("Matching genre(s): " + "\x1b[33m%s\x1b[0m", arrDuplicates.join(", "))
} else {
  // console.log("\x1b[35m", "There are no matching genres", "\x1b[0m")
}

// Exercise 5.2.3 - Released: log out "First Leonardo DiCaprio movie in this list was released on year, last one was released on year and they have calculated years apart"
// Exercise 5.2.4 - Rating: log out "Best rating for Leonardo DiCaprio movie in this list is largest rating and worse is smallest rating"
function getArrayMaxMin(array, field){ // function to retrieve array's min/max values and how many even numbers are in array
  let arrVal = "" // declare array
  let min = Math.min.apply(null, array) // declare min number in array
  let max = Math.max.apply(null, array) // declare max number in array
      if (field == "year") {
        arrVal += "First Leonardo DiCaprio movie in this list was released on \"" + min + "\", last one was released on \"" + max + "\" and they have \"" + (max-min) + "\" years apart"
        } else if (field == "rating") {
        arrVal += "Best rating for Leonardo DiCaprio movie in this list is \"" + max + "\" rating and worse is \"" + min + "\" rating"
        }
        return arrVal
  }

  console.log(getArrayMaxMin(getFields(movieLeo, "Year"), "year"))
  console.log(getArrayMaxMin(getFields(movieLeo, "imdbRating"), "rating"))

  