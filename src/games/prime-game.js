import { getRandomNumber } from '../lib.js';

const eratosthenes = (n) => {
  const array = [];
  const upperLimit = Math.sqrt(n);
  const output = [];

  for (let i = 0; i < n; i += 1) {
    array.push(true);
  }

  for (let i = 2; i <= upperLimit; i += 1) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  for (let i = 2; i < n; i += 1) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
};

export default function primeGame() {
  const MAX_NUM = 1000;
  const primeNumbers = eratosthenes(MAX_NUM);

  return {
    createQuestion() {
      return getRandomNumber(2, MAX_NUM);
    },
    getCorrectAnswer(question) {
      return primeNumbers.includes(question) ? 'yes' : 'no';
    },
  };
}
