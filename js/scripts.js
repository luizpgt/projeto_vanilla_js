// declaracao variaveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box"); // alternativas
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

// substituicao do quizz para a primeria pergunta
function init () {
  createQuestion(0);
}

function createQuestion (i) {
  // limpar a questão anterior | remove botões da questão anterior 
  const oldButton = answersBox.querySelectorAll("button");
  oldButton.forEach(function(btn) { btn.remove();});

  // alterar texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;
  
  // insere alternativas 
  questions[i].answers.forEach(function(answer, i) {
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]); //colore coforme acertos

    // remover hide and template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // inserir a alterantiva na tela
    answersBox.appendChild(answerTemplate);

    // insere um evento de click no botão 
    answerTemplate.addEventListener("click", function () {
      checkAnswer(this);
    })
  });

  // incrementa o numero da questão
  actualQuestion++;
}

// verificando responsta do usuario 
function checkAnswer(btn) {
  const buttons = answersBox.querySelectorAll("button"); // somente os botoes da div answersBox

  // adiciona classes aos botoes
  buttons.forEach (function (button) {
    if (button.getAttribute("correct-answer") == "true") {
      button.classList.add("correct-answer");

      // checa se usuario acertou a resposta
      if (btn == button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  // exibir proxima pergunta
  nextQuestion();
}

// exibe proxima pergunta
function nextQuestion() {
  // timer para usuario ver as respostas
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
    }
    createQuestion(actualQuestion);
  }, 1500);
}
// inicializacao do quizz
init();
