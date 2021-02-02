
let generator = {
    verb: ['refracts', 'resonates', 'diffracts', 'decays', 'oscillates'],
    noun1: ['sun', 'ball', 'proton', 'electron', 'light', 'neutron'],
    noun2: ['glass', 'atom', 'barrier', 'bend'],

    selectRandomWord(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    generateRandomMessage() {
        return `The ${this.selectRandomWord(this.noun1)} ${this.selectRandomWord(this.verb)} while the ${this.selectRandomWord(this.noun2)} ${this.selectRandomWord(this.verb)}!`;
    }
};

console.log(generator.generateRandomMessage());