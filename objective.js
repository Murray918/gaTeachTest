console.clear()

// JavaScript classes are a way nor to create static types like with other languages but actually to instantiate an object using the class declaration as shown bellow 

class Mammal {
    constructor(sound) {
        this.sound = sound
    }
    talk() {
        return this.sound
    }
}

//we have instantiated mammal here and are seeing  
let jamal = new Mammal ('arr arr arr arr')
let noise = jamal.talk()

//returns jamals sound
console.log(noise)


//we can also extends the class or an "instance of Mammal" like this giving it new properties
class Dog extends Mammal {
    constructor() {
        //here the super method is calling the constructor of class
        super('wroof wroof!!!')
    }
}

//if we then instantiate dog and call the talk method it run the talk method of Mammal
let spock = new Dog()
let scaryNoise = spock.talk()
// const scaryNoise = spock.talk()
console.log(scaryNoise)

//there are some caveats to the class method and inheritance in JavaScript
//for instance (an instance of Caveat lol) we can not make the talk method private like you would see in any strictly object oriented language such as Java or C sharp where when the method is private it can only accessed within method it is declared. This is not something to worry about too much, however what it means is that it can easily mutate or change our data.
//if we set this 
spock.sound = 1
console.log(spock.sound)
//this is because JavaScript does not have classes and is not static typed but dynamically typed so now spock.sound is not even the same data type as the method sound so if we are using it later with some functions it is very likely it will break and we will be making sad faces. This is not the end of the world and it does not mean that we should not use classes at all because we will ...A-LOT!!!! We just need to be careful with our data and think of what paradigm we use to deal with it.

// we can see her also that spock contains a property of sound
console.log(spock)
// and its value is a number
console.log(typeof spock.sound) 
//the value returned by spock.talk is still a string
console.log(typeof scaryNoise) 
//spock.talk is still a method that is declared int the Mammals scope
console.log(typeof spock.talk) 
//but both dog and mammal are not in-fact classes they are functions
console.log(typeof Dog) 
console.log(typeof Mammal)
