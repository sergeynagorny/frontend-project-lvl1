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

export function calcGame() {
  const operators = Object.values(Operator);

  return {
    createQuestion() {
      return `${getRandomNumber(1, 20)} ${getRandomElement(operators)} ${getRandomNumber(1, 20)}`;
    },

    getCorrectAnswer(question) {
      const elements = question.split(' ');
      const operator = elements.find((item) => operators.includes(item));
      const numbers = elements.filter((item) => item !== operator).map(Number);
      return MathByOperator[operator](...numbers).toString();
    },
  };
}
