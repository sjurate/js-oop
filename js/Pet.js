class Pet {
    constructor(name) {
        this.name = name;
        this.sound = 'Au miau';
        this.age = 0;
        this.ageIncrease = 1;
    }

    intro() {
        return `Hi, I am ${this.name}. I say: ${this.sound}!!`;
    }

    triukas() {
        return `${this.name} moka triuka: salto.`
    }

    getAge() {
        return `${this.name}: ${this.age} years old.`
    }

    getOlder() {
        this.age += this.ageIncrease;
    }
}

export { Pet };