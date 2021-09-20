import readlineSync from 'readline-sync';
import { greetings } from './cli.js';

const loseMessage = (name) => console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again again, ${name}`);
const winMessage = (name) => console.log(`Congratulations, ${name}!`);

const random = (min, max) => Math.floor(min + Math.random() * (max - min));
const isEven = (num) => num % 2 === 0;
const isCorrect = (answer, isNumEven) => (answer === 'yes' && isNumEven) || (answer === 'no' && !isNumEven);

const question = () => {
  const number = random(0, 100);
  const answer = readlineSync.question(`Question: ${number} \nYour answer: `);
  return isCorrect(answer, isEven(number));
};

const evenGame = () => {
  let rounds = 3;
  let errors = 0;
  const name = greetings();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rounds !== 0 && errors === 0) {
    const isAnswerCorrect = question();

    if (isAnswerCorrect) {
      console.log('Correct!');
      rounds -= 1;
    } else {
      loseMessage(name);
      errors += 1;
    }
  }

  if (errors === 0) { winMessage(name); }
};

export default evenGame;
