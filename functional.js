
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
function findDogs() {
    var dogs = []
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].species === 'dog')
            dogs.push(animals[i])
        return dogs
    }
}
// console.log(findDogs())
//TODO lets use .filter for find dogs 

function findDogs2() {
    var dogs = animals.filter(function (animal) {
        return animal.species === dogs
    })
}
console.log(findDogs2())
//@TODO lets seperate them out into functions that are independent of one another
var isDog = function (animal) {
    return animals.species === 'dogs'
}

var dogs = animals.filter(isDog)
console.log(dogs)

//TODO we can then use the is dog function to also check for non dogs
var otherAnimals = animal.reject(isDog)

console.log(otherAnimals)


