const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "java",
    b: "C",
    c: "Phyton",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What does Css stand for",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple",
    d: "Cascading Same Style",
    correct: "a",
  },
  {
    question: "What year was Javascript launched",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "1891",
    correct: "b",
  },
  {
    question: "How do you create a function in Javascript?",
    a: "function:myFunction()",
    b: "function=myFunction()",
    c: "function myFunction()",
    d: "dunction{}",
    correct: "c",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "=",
    b: "*",
    c: "-",
    d: "X",
    correct: "a",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  //   console.log(answer);
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>`;
  }
});
