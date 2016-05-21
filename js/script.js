" use strict ";

function Pet(name) {
    this.name = name;
}

Pet.prototype.speak = function() {
    return "hello"
}
Pet.prototype.getName = function() {
    return this.name;
}

function Dog(name) {
    Pet.call(this, name);
}

Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.speak = function() {
    return "Woof!"
}

function Cat(name) {
    Pet.call(this, name);
}

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.speak = function() {
    return "Meow!"
}

function Fish(name) {
    Pet.call(this, name);
}

Fish.prototype = Object.create(Pet.prototype);
Fish.prototype.speak = function() {
    return "Bubbles!"
}


function PetChat() {
    var display = document.getElementById("display");
    var numPets = null;
    var petList = [];

    var askHowMany = function() {
        return prompt("How many pets do you have?");
    };


    var askPetInfo = function() {
        for (var i = 0; i < numPets; i++) {
            var type = prompt("What is pet #" + (i + 1) + "? (cat, dog, fish)");
            var name = prompt("What is pet #" + (i + 1) + "'s name'?");

            if (type.toLowerCase() == "dog") {
                petList.push(new Dog(name));
            } else if (type.toLowerCase() == "cat") {
                petList.push(new Cat(name));
            } else if (type.toLowerCase() == "fish") {
                petList.push(new Fish(name));
            } else {
                petList.push(new Pet(name));
            }
        }
    };

    var displayPets = function() {
        for (var i = 0; i < petList.length; i++) {
            display.innerHTML += petList[i].getName() + " says " + petList[i].speak() + "<br>";
        }
    }

    this.init = function() {
        while (numPets === null) {
            numPets = askHowMany();
        }

        askPetInfo();
        displayPets();
    }
};

var chat = new PetChat();
chat.init();
