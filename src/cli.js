import readlineSync from 'readline-sync';

export const say = (text) => console.log(text);
export const greetings = () => readlineSync.question('May I have your name? ');
export const ask = (question) => readlineSync.question(`Question: ${question} \nYour answer: `);
