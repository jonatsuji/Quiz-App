const answerBox = document.querySelector('[data-js="box__answer"]');

const answerButton = document.querySelector('[data-js="show--answer"]');
const questionCard = document.querySelector('[data-js="single-question"]');

answerButton.addEventListener("click", () => {
  questionCard.classList.remove("box__answer--hidden");
});
