#!/usr/bin/env node
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
}

function calculateExpression(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
}

function brainCalc() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const num1 = generateRandomNumber(1, 20);
    const num2 = generateRandomNumber(1, 20);
    const operator = generateRandomOperator();
    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculateExpression(num1, operator, num2);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) { console.log('Correct!'); } else { console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`); console.log(`Let's try again, ${name}!`); return; }
  }

  console.log(`Congratulations, ${name}!`);
}

export default brainCalc;
