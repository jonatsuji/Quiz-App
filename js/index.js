const answerBox = document.querySelector('[data-js="box__answer1"]');
const answerBox2 = document.querySelector('[data-js="box__answer2"]');

const answerButton = document.querySelector('[data-js="show--answer1"]');
const answerButton2 = document.querySelector('[data-js="show--answer2"]');
const questionCard = document.querySelector('[data-js="single-question"]');
const bookmarkClick = document.querySelector('[data-js="imgChange"]');

answerButton.addEventListener("click", () => {
  answerBox.classList.toggle("box__answer1--hidden");
});

// answerButton.addEventListener("click", () => {
//   const buttonText = "Show answer";

//   if (answerBox.classList === "box__answer1--hidden") {
//     answerButton.innerHTML = buttonText;
//   } else {
//     answerButton.innerHTML = "Hide Answer";
//   }
// });

answerButton.addEventListener("click", (event) => {
  event.target.textContent =
    event.target.textContent == "Hide answer" ? "Show answer" : "Hide answer";
});

answerButton2.addEventListener("click", () => {
  answerBox2.classList.toggle("box__answer2--hidden");
});

function changeImage() {
  if (bookmarkClick.src.match("/images/bookmark-default.png")) {
    bookmarkClick.src = "/images/bookmark-gewaehlt.png";
  } else {
    bookmarkClick.src = "/images/bookmark-default.png";
  }
}

bookmarkClick.addEventListener("click", () => {
  changeImage();
});
