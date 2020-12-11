let animalList = [];
let requestList = [];
let availableList = [];

class PetStore {

    addAnimal(name: string, size: sizeOfAnimal, animalType: string, history: historyOfAnimal, color: string, vaccinated: boolean) {
        let animal1 = new Animal(name, size, animalType, history, color, vaccinated);
        animalList.push(animal1);
    }

    getRequest(animalType: string, color: string, vaccinated: boolean, size: sizeOfAnimal) {
        let req1 = new requestAdoption(animalType,color,vaccinated, sizeOfAnimal.C);
        requestList.push(req1);
        console.log("Request data: ")
        console.log(requestList)
    }

    //method to check if the requested animal is available at store
    checkAvailability() {
        for (let i = 0; i < requestList.length; i++) {
            for (let j = 0; j < animalList.length; j++) {
                if (requestList[i].animaltype === animalList[j].animalType && 
                    requestList[i].color === animalList[j].color &&
                    requestList[i].vaccinated === animalList[j].vaccinated && 
                    requestList[i].size === animalList[j].size) {
                    availableList.push(animalList[j]);
                }
                else{
                    continue;
                }
            }
        }
        if(availableList.length === 0){
            console.log("No data available!")
        }
        else{
            console.log("The animal(s) found: ")
            console.log(availableList);
        }
    }

    display() {
        console.log("List of animals");
        animalList.forEach(e => {
            console.log(JSON.stringify(e));
        })
    }
}

enum sizeOfAnimal {
    A = "Big",
    B = "Medium",
    C = "Small"
}

//common properties found in animals
interface featureOfAnimal {
    color: string,
    vaccinated: boolean,
    size: sizeOfAnimal
}

type historyOfAnimal = "Rescued" | "Stray";

class Animal implements featureOfAnimal {
    name: string;
    history: historyOfAnimal;
    animalType: string;
    size: sizeOfAnimal;
    color: string;
    vaccinated: boolean;

    constructor(name: string, size: sizeOfAnimal, animalType: string, history: historyOfAnimal, color: string, vaccinated: boolean) {
        this.name = name;
        this.size = size;
        this.animalType = animalType;
        this.history = history;
        this.color = color;
        this.vaccinated = vaccinated;
    }
}

class requestAdoption implements featureOfAnimal {
    animaltype: string;
    color: string;
    vaccinated: boolean;
    size: sizeOfAnimal

    constructor(animaltype: string, color: string, vaccinated: boolean, size: sizeOfAnimal) {
        this.animaltype = animaltype;
        this.color = color;
        this.vaccinated = vaccinated;
        this.size = size;
    }
}

let newDog1 = new PetStore();
newDog1.addAnimal("Doodle", sizeOfAnimal.A, "dog", "Rescued", "Golden", true);
let newDog2 = new PetStore();
newDog2.addAnimal("Casper", sizeOfAnimal.B, "dog", "Rescued", "Black", true);
let cat1 = new PetStore();
cat1.addAnimal("Manu", sizeOfAnimal.C, "cat", "Stray", "Orange", true);
let cat2 = new PetStore();
cat2.addAnimal("Julie", sizeOfAnimal.B, "cat", "Rescued", "Black", false);
let parrot1 = new PetStore();
parrot1.addAnimal("Flin", sizeOfAnimal.C, "parrot", "Rescued", "Red", true);

let showAnimals = new PetStore();
console.log("Animals available data: ")
showAnimals.display();

//customer request
let catReq = new PetStore();
catReq.getRequest("cat","Orange",true,sizeOfAnimal.C);
catReq.checkAvailability();








