# Quizzical

Quiz app with React and API, this was the last solo project of the scrimba React course, I am very proud to build this on my own.

## Table of contents

- [Quizzical](#quizzical)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- See random question every game
- See the result after clicking "see result" button
- not able click answer after showing the result

### Screenshot

![](./src/screenshot.png)

### Links

- [Code Source](https://github.com/zougari47/quiz-app)
- [Live Demo](https://zougari47.github.io/quiz-app/)

## My process

### Built with

- HTML
- SASS
- Flexbox
- CSS Grid- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This was a Really a good challenge, I practice fetch api and Arrays method, React hooks(useState, useEffect).

how i merge the correct answers with incorrect answers and sort them randomly 😀 :

```js
const answers = [
  ...questionObj.incorrect_answers,
  questionObj.correct_answer
].sort((a, b) => 0.5 - Math.random());
```

### Useful resources

- [Question API](https://opentdb.com/api_config.php) - This is an amazing Api let config what kind of question to get .
- [course Link](https://scrimba.com/learn/learnreact) - This really good course because every time ask you to try do the tasks with your own.

## Author

- Linkedin- [@zougari47](https://www.linkedin.com/in/zougari47/)
- Twitter - [@zougari47](https://www.twitter.com/zougari47)
- Codepen - [@zougari47](https://codepen.io/zougari47)
