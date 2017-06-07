'use strict';

// Customize greeting to user
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
  greeting = 'Welcome!'
}

document.write('<h1>' + greeting + '</h1>');

// Ask user five yes or no questions about Katherine, with a mix of yes or no answers
var states = prompt('Has Katherine coded in more than one state?');
if (states.toLowerCase() === 'y' || states.toLowerCase() === 'yes') {
  alert('Correct! Katherine has coded in Washington where she lives, and Florida where her hometown is.');
  console.log('When asked whether Katherine has coded in more than one state, the user correctly guessed yes.');
} else {
  alert('Not quite, but good guess! Katherine has coded in Washington where she lives, and Florida where her hometown is.');
  console.log('When asked whether Katherine has coded in more than one state, the user incorrectly did not guess yes.');
}

var previousJob = prompt('Was Katherine in the tech industry she decided to become a programmer?');
if (previousJob.toLowerCase() === 'y' || states.toLowerCase() === 'yes') {
  alert('Correct! Katherine was once a product manager at a small Seattle-area startup. While there, she discovered an interest in programming.');
  console.log('When asked whether Katherine was in the tech industry before she decided to become a programmer, the user correctly guessed yes.');
} else {
  alert('Nope, but again, good guess! Katherine was once a product manager at a small Seattle-area startup. While there, she discovered an interest in programming');
  console.log('When asked whether Katherine was in the tech industry before she decided to become a programmer, the user incorrectly did not guess yes.');
}

var nerd = prompt('Is Katherine a big nerd for anime and manga?')
if (nerd.toLowerCase() === 'y' || nerd.toLowerCase() === 'yes') {
  alert('Correct! Katherine has not missed a Sakura-Con since moving to Seattle in January 2014.');
  console.log('When asked whether Katherine is an anime and manga nerd, the user correctly guessed yes.');
} else {
  alert('Nope, but good guess! Katherine has not missed a Sakura-Con since moving to Seattle in January 2014.');
  console.log('When asked whether Katherine is an anime and manga nerd, the user incorrectly did not guess yes.');
}

var cooking = prompt('Is Katherine bad at cooking?');
if (cooking.toLowerCase() === 'n' || cooking.toLowerCase() === 'no') {
  alert('Correct! Katherine enjoys experimenting with cooking and code alike, and recently learned to make a mean blood orange marmalade.');
  console.log('When asked whether Katherine is bad at cooking, the user correctly guessed no.');
} else {
  alert('Not quite! Katherine enjoys experimenting with cooking and code alike, and recently learned to make a mean blood orange marmalade.');
  console.log('When asked whether Katherine is bad at cooking, the user incorrectly did not guess no.');
}

var rainy = prompt('Is Seattle rainy in the summer?');
if (rainy.toLowerCase() === 'n' || rainy.toLowerCase() === 'no') {
  alert('Correct! Supposedly. As a humble alert, I cannot go outside and see.');
  console.log('When asked whether Seattle is rainy in the summer, the user correctly guessed no.');
} else {
  alert('Incorrect! Seattle summers are amazingggggg. Supposedly. As a humble alert, I cannot go outside and see.');
  console.log('When asked whether Seattle is rainy in the summer, the user incorrectly did not guess no.');
}
