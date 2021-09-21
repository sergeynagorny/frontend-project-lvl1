import AbstractGame from './abstract-game.js';
import { getRandomNumber } from '../lib.js';

const MAX_NUM = 1000;

const eratosthenes = (n) => {
    const array = [];
    const upperLimit = Math.sqrt(n);
    const output = [];

    for (let i = 0; i < n; i += i) {
        array.push(true);
    }

    for (let i = 2; i <= upperLimit; i += i) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i += i) {
        if (array[i]) {
            output.push(i);
        }
    }

    return output;
};

const primeNumbers = eratosthenes(MAX_NUM);

export default class PrimeGame extends AbstractGame {
    intro() {
        this.cli.say('Answer "yes" if given number is prime. Otherwise answer "no".');
    }

    getCorrectAnswer(question) {
        return primeNumbers.includes(question) ? 'yes' : 'no';
    }

    createQuestion() {
        return getRandomNumber(2, MAX_NUM);
    }
}
