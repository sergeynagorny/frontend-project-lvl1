import { say, ask, greetings } from './cli.js';
import calcGame from './games/calc-game.js';
import evenGame from './games/even-game.js';
import gcdGame from './games/gcd-game.js';
import progressionGame from './games/progression-game.js';
import primeGame from './games/prime-game.js';

const ROUNDS = 3;
const LIVES = 1;

export const GameType = {
  EVEN: 'EVEN',
  CALC: 'CALC',
  GCD: 'GDC',
  PROGRESSION: 'PROGRESSION',
  PRIME: 'PRIME',
};

const GameIntroByType = {
  [GameType.EVEN]: 'Answer "yes" if the number is even, otherwise answer "no".',
  [GameType.CALC]: 'What is the result of the expression?',
  [GameType.GCD]: 'Find the greatest common divisor of given numbers.',
  [GameType.PROGRESSION]: 'What number is missing in the progression.',
  [GameType.PRIME]: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

const GameCoreByType = {
  [GameType.EVEN]: evenGame(),
  [GameType.CALC]: calcGame(),
  [GameType.GCD]: gcdGame(),
  [GameType.PROGRESSION]: progressionGame(),
  [GameType.PRIME]: primeGame(),
};

const startRound = (gameCore) => {
  const question = gameCore.createQuestion();
  const userAnswer = ask(question);
  const correctAnswer = gameCore.getCorrectAnswer(question);
  const isAnswerCorrect = correctAnswer === userAnswer;

  if (isAnswerCorrect) {
    say('Correct!');
  } else {
    say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return isAnswerCorrect;
};

export const startGame = (type) => {
  let rounds = ROUNDS;
  let lives = LIVES;

  say('Welcome to the Brain Games!');
  const userName = greetings();
  say(`Hello, ${userName}!`);

  if (type === undefined) return;
  say(GameIntroByType[type]);

  while (rounds !== 0 && lives !== 0) {
    const isAnswerCorrect = startRound(GameCoreByType[type]);
    if (isAnswerCorrect) {
      rounds -= 1;
    } else {
      lives -= 1;
    }
  }

  if (lives === 0) {
    say(`Let's try again, ${userName}!`);
  } else {
    say(`Congratulations, ${userName}!`);
  }
};
