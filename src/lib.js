export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min));
export const getRandomElement = (items) => items[Math.floor(Math.random() * items.length)];
export const isEven = (num) => num % 2 === 0;
