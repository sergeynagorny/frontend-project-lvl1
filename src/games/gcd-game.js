import { getRandomNumber } from '../lib.js';

export function gcdGame() {
  return {
    createQuestion() {
      return `${getRandomNumber(1, 100)} ${getRandomNumber(1, 100)}`;
    },

    getCorrectAnswer(question) {
      const numbers = question.split(' ');
      let counter = Math.min(...numbers);

      while (counter !== 0) {
        // eslint-disable-next-line no-loop-func
        if (numbers.map((item) => item / counter).every(Number.isInteger)) {
          break;
        }
        counter -= 1;
      }

      return counter.toString();
    },
  };
}
