const questions = [
  {
    question: "pintu terbukan dengan ?",
    answers: [
      {
        text: "kunci",
        correct: false,
      },
      {
        text: "keluar",
        correct: false,
      },
      {
        text: "krekkkkk",
        correct: false,
      },
      {
        text: "ketuk",
        correct: true,
      },
    ],
  },
  {
    question: "burung bisa terbang karna memiliki ?",
    answers: [
      {
        text: "bakat",
        correct: true,
      },
      {
        text: "sayap",
        correct: false,
      },
      {
        text: "napsu",
        correct: false,
      },
      {
        text: "badan",
        correct: false,
      },
    ],
  },
  {
    question: "ada api pasti ada ?",
    answers: [
      {
        text: "asap",
        correct: false,
      },
      {
        text: "anya",
        correct: true,
      },
      {
        text: "kebakaran",
        correct: false,
      },
      {
        text: "bomba",
        correct: false,
      },
    ],
  },
  {
    question: "pagi hari ayap biasanya ?",
    answers: [
      {
        text: "ber kokok ",
        correct: false,
      },
      {
        text: "ber gerak",
        correct: false,
      },
      {
        text: "ber kotek",
        correct: false,
      },
      {
        text: "jadilauk",
        correct: true,
      },
    ],
  },
  {
    question: "saat tanggal merah biasanya karyawan ?",
    answers: [
      {
        text: "libur",
        correct: false,
      },
      {
        text: "misah",
        correct: true,
      },
      {
        text: "tidur",
        correct: false,
      },
      {
        text: "healing",
        correct: false,
      },
    ],
  },
  {
    question: "supaya bersih kita mandi dengan ?",
    answers: [
      {
        text: "sabun",
        correct: false,
      },
      {
        text: "yakin",
        correct: true,
      },
      {
        text: "air",
        correct: false,
      },
      {
        text: "shampo",
        correct: false,
      },
    ],
  },
  {
    question:
      "makanan hash bandung yang terdiri dari baso, tahu goreng yang di jumpai di jakarta dan kota yang lain ?",
    answers: [
      {
        text: "batagor",
        correct: false,
      },
      {
        text: "beredar",
        correct: true,
      },
      {
        text: "kuliner",
        correct: false,
      },
      {
        text: "berbaur",
        correct: false,
      },
    ],
  },
  {
    question:
      "untuk masuk ke kota bandung salah satunya bisa masuk lewat gerbang tol ?",
    answers: [
      {
        text: "pertama",
        correct: false,
      },
      {
        text: "khusu kendaraan",
        correct: false,
      },
      {
        text: "cipularang",
        correct: false,
      },
      {
        text: "gantian",
        correct: true,
      },
    ],
  },
  {
    question: "dibutuh kan saat mau biki sambal ?",
    answers: [
      {
        text: "cabai",
        correct: false,
      },
      {
        text: "tenaga",
        correct: false,
      },
      {
        text: "slbama",
        correct: true,
      },
      {
        text: "ulekana",
        correct: false,
      },
    ],
  },
  {
    question: "di jalan tol tiba-tiba macet karna ada ?",
    answers: [
      {
        text: "kecelakaan",
        correct: false,
      },
      {
        text: "ngantri ",
        correct: false,
      },
      {
        text: "buaya lepas",
        correct: true,
      },
      {
        text: "pemeriksaan kendaraan",
        correct: false,
      },
    ],
  },
  {
    question: "di gembok supaya aman ?",
    answers: [
      {
        text: " amal",
        correct: true,
      },
      {
        text: "rumah ",
        correct: false,
      },
      {
        text: "pacar",
        correct: false,
      },
      {
        text: "gudang",
        correct: false,
      },
    ],
  },
  {
    question: "kita bisa melihat wajah kita di ?",
    answers: [
      {
        text: "mana",
        correct: false,
      },
      {
        text: "kaca",
        correct: false,
      },
      {
        text: "sana",
        correct: false,
      },
      {
        text: "simA",
        correct: true,
      },
    ],
  },
  {
    question: "yang bikin wangi ?",
    answers: [
      {
        text: "parfum",
        correct: false,
      },
      {
        text: "pfffth",
        correct: true,
      },
      {
        text: "pasfod",
        correct: false,
      },
      {
        text: "minyak",
        correct: false,
      },
    ],
  },
  {
    question: "di indonesia sawah biasa nya di tanami ?",
    answers: [
      {
        text: "Basi",
        correct: true,
      },
      {
        text: "padi",
        correct: false,
      },
      {
        text: "ragi",
        correct: false,
      },
      {
        text: "lagi",
        correct: false,
      },
    ],
  },
  {
    question: "oleh-oleh khas dari jogja ?",
    answers: [
      {
        text: "ada aja",
        correct: false,
      },
      {
        text: "bapia",
        correct: false,
      },
      {
        text: "itu aja",
        correct: false,
      },
      {
        text: "di bawa",
        correct: true,
      },
    ],
  },
];
const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz() {
  currentQuestionindex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionindex];
  let questionNo = currentQuestionindex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answersButton.firstChild) {
    answersButton.removeChild(answersButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answersButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = ` you score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "play again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionindex++;
  if (currentQuestionindex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionindex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
