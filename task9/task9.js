// Task 1 - Create JavaScript function “mergeArray” to merge two arrays and removes all duplicates elements.
let array1 = [1,2,3];
let array2 = [2,30,1];

// array1 = array1.filter(function(val) {
//     return array2.indexOf(val) == -1;
//   });
array1 = array1.filter(val => !array2.includes(val));
console.log("Result 1: ",array1.concat(array2))

// Task 2 - Create JavaScript function “showUserIp” user IP address in browser
function getIPAddress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
      var iface = interfaces[devName];
  
      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
          return alias.address;
      }
    }
    return '0.0.0.0';
  }
console.log("Result 2: " + getIPAddress())

// Task 3 - Use Javascript built in array method called reduce and calculate total age of persons.
const persons = [
    {
    name: 'Julia',
    age: 27
    },
    {
    name: 'Martin',
    age: 45
    },
    {
    name: 'Taavi',
    age: 17
    },
    {
    name: 'Emma',
    age: 2
    },
    {
    name: 'Ricky',
    age: 62
    }
    ]

const totalSumOfAges = persons.reduce(function(sum, current) {
        return sum + current.age;
      }, 0);
console.log("Result 3: " + totalSumOfAges)

// Task 4 - Use Javascript built in array method called filter and filter out boy and girl name (Bonus: filter out also boys and girls who are younger than 30).
const boyNames = ['Martin', 'Taavi', 'Ricky']
const girlNames = ['Julia', 'Emma']

const people = { 
boys: persons.filter(function(item) {
    return boyNames.indexOf(item.name) !== -1;
}),
girls: persons.filter(function(item) {
    return girlNames.indexOf(item.name) !== -1;
})
}

console.log("People: ",people);

const boysYoungerThan = persons.filter(function(item) {
    return boyNames.indexOf(item.name) !== -1;
}).filter((p) => {
    if (p.age < 30) {
        return p
    }
  })

const girlsYoungerThan = persons.filter(function(item) {
    return girlNames.indexOf(item.name) !== -1;
}).filter((p) => {
    if (p.age < 30) {
        return p
    }
  })

console.log('Boys younger than 30: ', boysYoungerThan)
console.log('Girls younger than 30: ', girlsYoungerThan)

// Task 5 - Use Javascript built in array method called map and change inside previous exercise persons variable all keys to uppercase
const personsUpperKeys = persons.map( function( item ){
    for(var key in item){
        var upper = key.toUpperCase();
        // check if it already wasn't uppercase
        if( upper !== key ){ 
            item[ upper ] = item[key];
            delete item[key];
        }
    }
    return item;
});

console.log("Keys to uppercase: ",personsUpperKeys);