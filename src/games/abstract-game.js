export default class AbstractGame {
  constructor({
    cli, errorsCount, roundsCount, userName,
  }) {
    if (new.target === AbstractGame) {
      throw new Error('Can\'t instantiate AbstractGame, only concrete one.');
    }

    this.cli = cli;
    this.errosCount = errorsCount;
    this.roundsCount = roundsCount;
    this.name = userName;

    this.init();
  }

  init() {
    this.intro();

    while (this.roundsCount !== 0 && this.errosCount !== 0) {
      this.startRound();
    }

    if (this.errosCount === 0) {
      this.onLose();
    } else {
      this.onWin();
    }
  }

  intro() {
    throw new Error('AbstractView method not implemented: intro');
  }

  getCorrectAnswer() {
    throw new Error('AbstractView method not implemented: getCorrectAnswer');
  }

  createQuestion() {
    throw new Error('AbstractView method not implemented: createQuestion');
  }

  startRound() {
    const question = this.createQuestion();
    const userAnswer = this.cli.ask(question);
    const correctAnswer = this.getCorrectAnswer(question);

    if (correctAnswer.toString() === userAnswer) {
      this.onCorrectAnswer();
    } else {
      this.onIncorrectAnswer(correctAnswer, userAnswer);
    }
  }

  onCorrectAnswer() {
    this.roundsCount -= 1;
    this.cli.say('Correct!');
  }

  onIncorrectAnswer(correctAnswer, userAnswer) {
    this.errosCount -= 1;
    this.cli.say(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  onWin() {
    this.cli.say(`Congratulations, ${this.name}!`);
  }

  onLose() {
    this.cli.say(`Let's try again, ${this.name}!`);
  }
}
