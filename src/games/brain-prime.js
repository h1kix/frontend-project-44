#!/usr/bin/env node
/* eslint-disable no-plusplus */

import readlineSync from 'readline-sync';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function brainPrime() {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  // eslint-disable-next-line no-console
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let score = 0;
  let isCorrect = true;

  while (isCorrect && score < 3) {
    const number = Math.floor(Math.random() * 100);
    // eslint-disable-next-line no-console
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (userAnswer.toLowerCase() === correctAnswer) {
      // eslint-disable-next-line no-console
      console.log('Correct!');
      score += 1;
    } else {
      // eslint-disable-next-line no-console
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      // eslint-disable-next-line no-console
      console.log(`Let's try again, ${name}!`);
      isCorrect = false;
    }
  }

  if (score === 3) {
    // eslint-disable-next-line no-console
    console.log(`Congratulations, ${name}!`);
  }
}

export default brainPrime;
