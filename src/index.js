import Cli from './cli.js';
import EvenGame from './games/even-game.js';
import CalcGame from './games/calc-game.js';
import GcdGame from './games/gcd-game.js';
import ProgressionGame from './games/progression-game.js';

const ROUNDS_COUNT = 3;
const LIVES_COUNT = 1;

class App {
    constructor() {
        this.cli = null;
    }

    init() {
        this.cli = new Cli();
        const userName = this.cli.greetings();

        this.gamesInitialValue = {
            cli: this.cli,
            errorsCount: LIVES_COUNT,
            roundsCount: ROUNDS_COUNT,
            userName,
        };
    }

    startEvenGame() {
        this.evenGame = new EvenGame(this.gamesInitialValue);
    }

    startCalcGame() {
        this.calcGame = new CalcGame(this.gamesInitialValue);
    }

    startGcdGame() {
        this.gcdGame = new GcdGame(this.gamesInitialValue);
    }

    startProgressionGame() {
        this.progressionGame = new ProgressionGame(this.gamesInitialValue);
    }
}

const app = new App();

export default app;
