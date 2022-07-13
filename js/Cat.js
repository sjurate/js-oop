import { Pet } from "./Pet.js";

class Cat extends Pet {
    constructor(name) {
        super(name);
        this.sound = 'Miau miau';
        this.ageIncrease = 3;
    }

    triukas() {
        return `${this.name} moka triuka: laizyti letena.`
    }
}

export { Cat };