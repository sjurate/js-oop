
import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor(name, furColor) {
        super(name);
        this.furColor = furColor;
        this.sound = 'Au au au au';
        this.ageIncrease = 7;
    }
}

export { Dog };