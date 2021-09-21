import AbstractGame from './abstract-game.js';
import { getRandomElement, getRandomNumber } from '../lib.js';

const Operator = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
};

const MathByOperator = {
  [Operator.PLUS]: (x, y) => x + y,
  [Operator.MINUS]: (x, y) => x - y,
  [Operator.MULTIPLY]: (x, y) => x * y,
};

const operators = Object.values(Operator);

const calculateMathString = (str) => {
  const elements = str.split(' ');
  const operator = elements.find((item) => operators.includes(item));
  const numbers = elements.filter((item) => item !== operator).map(Number);
  return MathByOperator[operator](...numbers);
};

export default class CalcGame extends AbstractGame {
  intro() {
    this.cli.say('What is the result of the expression?');
  }

  getCorrectAnswer(question) {
    return calculateMathString(question);
  }

  createQuestion() {
    return `${getRandomNumber(1, 20)} ${getRandomElement(operators)} ${getRandomNumber(1, 20)}`;
  }
}
