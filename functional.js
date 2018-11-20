// we will need to make reject a common for this script instead of pulling it from a library like underscore or lodash
//however these are wonderful libraries
Array.prototype.reject = function (fn) {
    let rej = test => !fn(test);
    return this.filter(rej);
};

//this is a function for calling all of out functions it takes an array and a function and console.logs the output
//this is solely for the exercise of making this a function since the topic is functional programming and is not necessary just paradigms are not always set in stone and one way is not better than the other it simply clears the console before it shows the output
var callIt = (arr, fn) => {
    console.clear()
     !fn ? console.log(arr) : console.log(fn(arr))
}



var animals = [
    { name: 'Fluffkins', species: 'rabbit' },
    { name: 'Caro', species: 'fish' },
    { name: 'Hamilton', species: 'cat' },
    { name: 'Spock', species: 'dogs' },
    { name: 'Harold', species: 'dogs' },
    { name: 'Ursula', species: 'fish' },
    { name: 'Jimmy', species: 'emu' }
]

// @TODO this is a function mapping through an array and preforming some logic on the array using a for loop
const findDogs = function (array) {
    let dogs = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].species === 'dogs')
            dogs.push(array[i])
    }
    return dogs
}

callIt(animals, findDogs)
//TODO lets use .filter for find dogs 

function findDogs2(array) {
    let dogs = array.filter(function (a) {
        return a.species === 'dogs'
    })
    return dogs
}

callIt(animals, findDogs2)
//@TODO lets separate them out into functions that are independent of one another
var isDog = function (array) {
    return array.species === 'dogs'
}

var dogs = animals.filter(isDog)
callIt(dogs ,null)

//TODO we can then use the is dog function to also check for non dogs
var otherAnimals = animals.reject(isDog)
// callIt(otherAnimals, null)

