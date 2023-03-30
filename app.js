const questions = [
  {
    que: "Which is a markup language?",
    a: "css",
    b: "html",
    c: "javascript",
    d: "xml",
    correct: "b",
  },
  {
    que: "Which is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script src='xxx.js'></script>",
    b: "<script href='xxx.js'></script>",
    c: "<script name='xxx.js'></script>",
    d: "<script src='xxx.js'></script>",
    correct: "d",
  },
  {
    que: "Which is the correct syntax for referring to an external style sheet called 'xxx.css'?",
    a: "<link rel='stylesheet' href='xxx.css'></link>",
    b: "<link href='xxx.css' rel='stylesheet'></link>",
    c: "<link rel='stylesheet' href='xxx.css'></link>",
    d: "<link href='xxx.css' rel='stylesheet'></link>",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  console.log(data);
  quesBox.innerText = ` ${index + 1})  ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
    let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
        answer = input.value;
        
    }
  });
    return answer;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h3>Thank you for playing the quiz</h3>
    <h3>Your score is ${right} out of ${total}</h3>`
}
loadQuestion();
