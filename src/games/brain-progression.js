#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateProgression(length) {
  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5) + 1;
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }

  return progression;
}

function hideNumber(progression) {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  // eslint-disable-next-line no-param-reassign
  progression[hiddenIndex] = '..';

  return {
    progression: progression.join(' '),
    hiddenValue: hiddenValue.toString(),
  };
}

function brainProgression() {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  // eslint-disable-next-line no-console
  console.log('What number is missing in the progression?');

  let score = 0;
  let isCorrect = true;

  while (isCorrect && score < 3) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const generatedProgression = generateProgression(progressionLength);
    const question = hideNumber(generatedProgression);
    // eslint-disable-next-line no-console
    console.log(`Question: ${question.progression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === question.hiddenValue) {
      // eslint-disable-next-line no-console
      console.log('Correct!');
      score += 1;
    } else {
      // eslint-disable-next-line no-console
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.hiddenValue}'.`);
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

export default brainProgression;
