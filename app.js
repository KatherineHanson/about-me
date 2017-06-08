'use strict';

// Customize webpage's greeting for user
var today = new Date();
var hourNow = today.getHours();
var greeting = 'greeting';

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
  console.log('ERROR: Something went wrong!');
}

var greet = document.getElementById('greetingH1');
greet.textContent = greeting;

// Customize guessing game's greeting for user
function greeting() {
  var userName = prompt('Here there be dragons. Ye shall enchant them asleep by answering seven questions. What is your name, traveler?');
  if (userName === '') {
    userName = 'friend';
    alert('I respect your desire to remain incognito in these lands, ' + userName + '. Let us begin.');
  } else {
    alert('Excellent, ' + userName + ', we shall begin.');
  }
}
// Ask user seven yes or no questions about Katherine, with a mix of yes or no answers
// Count and output number of correct answers
var correct = [];

// Question 1
function question1() {
  var states = prompt('Has Katherine coded in more than one state?');
  if (states.toLowerCase() === 'y' || states.toLowerCase() === 'yes') {
    alert('Correct! Katherine has coded in Washington where she lives, and Florida where her hometown is.');
    console.log('When asked whether Katherine has coded in more than one state, the user correctly guessed yes.');
    correct.push('Correct!');
  } else {
    alert('Not quite, but good guess! Katherine has coded in Washington where she lives, and Florida where her hometown is.');
    console.log('When asked whether Katherine has coded in more than one state, the user incorrectly did not guess yes.');
  }
}

console.log('Answers correct so far: ' + correct.length);

// Question 2
var previousJob = prompt('Was Katherine in the tech industry she decided to become a programmer?');
if (previousJob.toLowerCase() === 'y' || previousJob.toLowerCase() === 'yes') {
  alert('Correct! Katherine was once a product manager at a small Seattle-area startup. While there, she discovered an interest in programming.');
  console.log('When asked whether Katherine was in the tech industry before she decided to become a programmer, the user correctly guessed yes.');
  correct.push('Correct!');
} else {
  alert('Nope, but again, good guess! Katherine was once a product manager at a small Seattle-area startup. While there, she discovered an interest in programming');
  console.log('When asked whether Katherine was in the tech industry before she decided to become a programmer, the user incorrectly did not guess yes.');
}

console.log('Answers correct so far: ' + correct.length);

// Question 3
var nerd = prompt('Is Katherine a big nerd for anime and manga?');
if (nerd.toLowerCase() === 'y' || nerd.toLowerCase() === 'yes') {
  alert('Correct! Katherine has not missed a Sakura-Con since moving to Seattle in January 2014.');
  console.log('When asked whether Katherine is an anime and manga nerd, the user correctly guessed yes.');
  correct.push('Correct!');
} else {
  alert('Nope, but good guess! Katherine has not missed a Sakura-Con since moving to Seattle in January 2014.');
  console.log('When asked whether Katherine is an anime and manga nerd, the user incorrectly did not guess yes.');
}

console.log('Answers correct so far: ' + correct.length);

// Question 4
var cooking = prompt('Is Katherine bad at cooking?');
if (cooking.toLowerCase() === 'n' || cooking.toLowerCase() === 'no') {
  alert('Correct! Katherine enjoys experimenting with cooking and code alike, and recently learned to make a mean blood orange marmalade.');
  console.log('When asked whether Katherine is bad at cooking, the user correctly guessed no.');
  correct.push('Correct!');
} else {
  alert('Not quite! Katherine enjoys experimenting with cooking and code alike, and recently learned to make a mean blood orange marmalade.');
  console.log('When asked whether Katherine is bad at cooking, the user incorrectly did not guess no.');
}

console.log('Answers correct so far: ' + correct.length);

// Question 5
var rainy = prompt('Is Seattle rainy in the summer?');
if (rainy.toLowerCase() === 'n' || rainy.toLowerCase() === 'no') {
  alert('Correct! Supposedly. As a humble alert, I cannot go outside and see.');
  console.log('When asked whether Seattle is rainy in the summer, the user correctly guessed no.');
  correct.push('Correct!');
} else {
  alert('Incorrect! Seattle summers are amazingggggg. Supposedly. As a humble alert, I cannot go outside and see.');
  console.log('When asked whether Seattle is rainy in the summer, the user incorrectly did not guess no.');
}

console.log('Answers correct so far: ' + correct.length);

// Question 6
// Take number input
// Give user four opportunities to get the right answer
// When user answers too high or low, give 'Too high!' or 'Too low!' message
var correctNumber = Math.floor((Math.random() * 10) + 1);
console.log('The answer is ' + correctNumber + '.');
for (var i = 0; i < 4; i++) {
  var guessedNumber = parseInt(prompt('Which number am I thinking of? You have four tries.'));
  if (guessedNumber === correctNumber) {
    alert('Correct! Great job!');
    console.log('When asked what the program is thinking, the user correctly guessed ' + guessedNumber + '.');
    correct.push('Correct!');
    i += 4;
  } else if (isNaN(guessedNumber)) {
    alert('You must enter a number!');
    console.log('When asked what the program is thinking, the user entered nothing.');
  }
  else if (guessedNumber < correctNumber) {
    alert('Too low!');
    console.log('When asked which number the program is thinking of, the user guessed too low.');
  } else if (guessedNumber > correctNumber) {
    alert('Too high!');
    console.log('When asked which number the program is thinking of, the user guessed too high.');
  }
}

console.log('Answers correct so far: ' + correct.length);

// Question 7
// Take user input
// Give user six opportunities to get the right answer out of multiple possibilites
// If they give a correct answer or run out of guesses, give them all of the correct answers
var nerdSeries = ['Psycho-Pass', 'Revolutionary Girl Utena', 'Star Trek: Deep Space Nine', 'Psycho Pass', 'Utena', 'Star Trek Deep Space Nine', 'Star Trek: DS9', 'Star Trek DS9', 'DS9'];
var nerdSeriesCount = nerdSeries.length;
var i = 0;
while (i < 6) {
  var guessedSeries = prompt('Name a favorite geeky TV show of Katherine\'s. You have six tries.');
  for (var x = 0; x < nerdSeriesCount; x++) {
    if (guessedSeries.toLowerCase() === nerdSeries[x].toLowerCase()) {
      alert('Correct! Katherine enjoyed watching ' + guessedSeries + '. The correct answers are: ' + nerdSeries[0] + ', ' + nerdSeries[1] + ', and ' + nerdSeries[2] + '.');
      console.log('When asked to name a favorite geeky TV show of Katherine\'s, the user correctly guessed ' + guessedSeries + '.');
      correct.push('Correct!');
      i += 6;
    }
  }
  if (i < 6) {
    alert('Not according to my list!');
    console.log('When asked to name a favorite geeky TV show of Katherine\'s, the user incorrectly guessed ' + guessedSeries + '.');
    i++;
  }
  if (i === 6) {
    alert('You\'re out of guesses! The correct answers are: ' + nerdSeries[0] + ', ' + nerdSeries[1] + ', and ' + nerdSeries[2] + '.');
    console.log('The user ran out of guesses before they could guess a favorite geeky TV show of Katherine\'s.');
  }
}

console.log('Answers correct so far: ' + correct.length);

// Output number of answers user got correct
var finalAnswerCount = correct.length;
if (finalAnswerCount === 7) {
  alert('You got ' + finalAnswerCount + ' out of 7, ' + userName + ', a perfect score! Here\'s a virtual high-five, O dragon slayer.');
}
else {
  alert('You got ' + finalAnswerCount + ' out of 7. Not perfect, ' + userName + ', but the dragons here are actually pretty chill. You may proceed.');
}

// Call functions
greeting();
