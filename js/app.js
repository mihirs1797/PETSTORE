var animalList = [];
var requestList = [];
var availableList = [];
var PetStore = /** @class */ (function () {
    function PetStore() {
    }
    PetStore.prototype.addAnimal = function (name, size, animalType, history, color, vaccinated) {
        var animal1 = new Animal(name, size, animalType, history, color, vaccinated);
        animalList.push(animal1);
    };
    PetStore.prototype.getRequest = function (animalType, color, vaccinated, size) {
        var req1 = new requestAdoption(animalType, color, vaccinated, sizeOfAnimal.C);
        requestList.push(req1);
        console.log("Request data: ");
        console.log(requestList);
    };
    //method to check if the requested animal is available at store
    PetStore.prototype.checkAvailability = function () {
        for (var i = 0; i < requestList.length; i++) {
            for (var j = 0; j < animalList.length; j++) {
                if (requestList[i].animaltype === animalList[j].animalType &&
                    requestList[i].color === animalList[j].color &&
                    requestList[i].vaccinated === animalList[j].vaccinated &&
                    requestList[i].size === animalList[j].size) {
                    availableList.push(animalList[j]);
                }
                else {
                    continue;
                }
            }
        }
        if (availableList.length === 0) {
            console.log("No data available!");
        }
        else {
            console.log("The animal(s) found: ");
            console.log(availableList);
        }
    };
    PetStore.prototype.display = function () {
        console.log("List of animals");
        animalList.forEach(function (e) {
            console.log(JSON.stringify(e));
        });
    };
    return PetStore;
}());
var sizeOfAnimal;
(function (sizeOfAnimal) {
    sizeOfAnimal["A"] = "Big";
    sizeOfAnimal["B"] = "Medium";
    sizeOfAnimal["C"] = "Small";
})(sizeOfAnimal || (sizeOfAnimal = {}));
var Animal = /** @class */ (function () {
    function Animal(name, size, animalType, history, color, vaccinated) {
        this.name = name;
        this.size = size;
        this.animalType = animalType;
        this.history = history;
        this.color = color;
        this.vaccinated = vaccinated;
    }
    return Animal;
}());
var requestAdoption = /** @class */ (function () {
    function requestAdoption(animaltype, color, vaccinated, size) {
        this.animaltype = animaltype;
        this.color = color;
        this.vaccinated = vaccinated;
        this.size = size;
    }
    return requestAdoption;
}());
var newDog1 = new PetStore();
newDog1.addAnimal("Doodle", sizeOfAnimal.A, "dog", "Rescued", "Golden", true);
var newDog2 = new PetStore();
newDog2.addAnimal("Casper", sizeOfAnimal.B, "dog", "Rescued", "Black", true);
var cat1 = new PetStore();
cat1.addAnimal("Manu", sizeOfAnimal.C, "cat", "Stray", "Orange", true);
var cat2 = new PetStore();
cat2.addAnimal("Julie", sizeOfAnimal.B, "cat", "Rescued", "Black", false);
var parrot1 = new PetStore();
parrot1.addAnimal("Flin", sizeOfAnimal.C, "parrot", "Rescued", "Red", true);
var showAnimals = new PetStore();
console.log("Animals available data: ");
showAnimals.display();
//customer request
var catReq = new PetStore();
catReq.getRequest("cat", "Orange", true, sizeOfAnimal.C);
catReq.checkAvailability();
