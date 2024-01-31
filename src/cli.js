/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

const a = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
};
export { a };
