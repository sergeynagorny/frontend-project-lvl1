import { isEven, getRandomNumber } from '../lib.js';

export default function evenGame() {
  return {
    createQuestion() {
      return getRandomNumber(1, 100);
    },

    getCorrectAnswer(question) {
      return isEven(question) ? 'yes' : 'no';
    },
  };
}
