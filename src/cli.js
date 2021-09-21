import readlineSync from 'readline-sync';

export default class Cli {
  greetings() {
    this.say('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    this.say(`Hello, ${name}!`);
    return name;
  }

  ask(question) {
    return readlineSync.question(`Question: ${question} \nYour answer: `);
  }

  say(text) {
    console.log(text);
  }
}
