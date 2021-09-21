import AbstractGame from './abstract-game.js';
import { isEven, getRandomNumber } from '../lib.js';

export default class EvenGame extends AbstractGame {
  intro() {
    this.cli.say('Answer "yes" if the number is even, otherwise answer "no".');
  }

  getCorrectAnswer(question) {
    return isEven(question) ? 'yes' : 'no';
  }

  createQuestion() {
    return getRandomNumber(0, 100);
  }
}
