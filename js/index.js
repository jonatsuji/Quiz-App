const answerBox = document.querySelector('[data-js="box__answer1"]');
const answerBox2 = document.querySelector('[data-js="box__answer2"]');

const answerButton = document.querySelector('[data-js="show--answer1"]');
const answerButton2 = document.querySelector('[data-js="show--answer2"]');
const questionCard = document.querySelector('[data-js="single-question"]');

answerButton.addEventListener("click", () => {
  answerBox.classList.toggle("box__answer1--hidden");
});

answerButton2.addEventListener("click", () => {
  answerBox2.classList.toggle("box__answer2--hidden");
});
