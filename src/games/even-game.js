import { isEven, getRandomNumber } from '../lib.js';

export function evenGame() {
  return {
    createQuestion() {
      return getRandomNumber(1, 100);
    },

    getCorrectAnswer(question) {
      return isEven(question) ? 'yes' : 'no';
    },
  };
}
