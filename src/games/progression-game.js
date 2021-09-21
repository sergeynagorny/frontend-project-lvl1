import { getRandomNumber } from '../lib.js';
import AbstractGame from './abstract-game.js';

const findMissingUtil = (arr, low, high, diff) => {
    if (high <= low) return Number.MAX_VALUE;

    const mid = low + parseInt((high - low) / 2, 10);

    if (arr[mid + 1] - arr[mid] !== diff) return (arr[mid] + diff);

    if (mid > 0 && arr[mid] - arr[mid - 1] !== diff) return (arr[mid - 1] + diff);

    if (arr[mid] === arr[0] + mid * diff) return findMissingUtil(arr, mid + 1, high, diff);

    return findMissingUtil(arr, low, mid - 1, diff);
};

const findMissing = (arr, n) => {
    const diff = parseInt((arr[n - 1] - arr[0]) / n, 10);
    return findMissingUtil(arr, 0, n - 1, diff);
};

const createProgression = () => {
    let start = getRandomNumber(1, 100);
    const ratio = getRandomNumber(2, 20);
    const length = getRandomNumber(5, 10);

    return new Array(length).fill('').map(() => {
        start += ratio;
        return start;
    });
};

const setMissing = (progression) => {
    const missingIndex = getRandomNumber(1, progression.length - 1);
    return progression.map((item, index) => (index === missingIndex ? '..' : item)).join(' ');
};

export default class ProgressionGame extends AbstractGame {
    intro() {
        this.cli.say('What number is missing in the progression.');
    }

    getCorrectAnswer(question) {
        const arr = question.split(' ').filter((item) => item !== '..').map(Number);
        return findMissing(arr, arr.length);
    }

    createQuestion() {
        const progression = createProgression();
        return setMissing(progression);
    }
}
