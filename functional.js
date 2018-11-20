// we will need to make reject a common
Array.prototype.reject = function (fn) {
    let rej = test => !fn(test);
    return this.filter(rej);
};
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
//@TODO lets seperate them out into functions that are independent of one another
var isDog = function (array) {
    return array.species === 'dogs'
}

var dogs = animals.filter(isDog)
callIt(dogs ,null)

//TODO we can then use the is dog function to also check for non dogs
var otherAnimals = animals.reject(isDog)
// console.clear()
// callIt(otherAnimals, null)

