class QuizQuestion {
    constructor(question, answerArr) {
        this.question = question;
        this.answerArr = answerArr;
    }
}

class Answer {
    constructor(answer, correct) {
        this.answer = answer;
        this.correct = correct;
    }
}

const QuizQuestionsArr = [
    new QuizQuestion("0",
        [new Answer("this one", true),
        new Answer("Pig", false),
        new Answer("Chicken", false),
        new Answer("Horse", false)]),

    new QuizQuestion("1",
        [new Answer("poo", false),
        new Answer("this eno", true),
        new Answer("fish", false),
        new Answer("chips", false)]),

    new QuizQuestion("2",
        [new Answer("Cow", false),
        new Answer("Pig", false),
        new Answer("uno", true),
        new Answer("Horse", false)]),

    new QuizQuestion("3",
        [new Answer("Cow", false),
        new Answer("Pig", false),
        new Answer("Chicken", false),
        new Answer("ONE THiS", true)]),

    new QuizQuestion("4",
        [new Answer("BITCH!", true),
        new Answer("Pig", false),
        new Answer("Chicken", false),
        new Answer("Horse", false)])
];

//JS Variables
var Score = 0;
var currentQuestionIndex = 0;
var timeLeft = 30;

//HTML Elements
var timerCurTime = document.querySelector("#current-time");

var questionElement = document.querySelector("#quiz-question");
var startSection = document.querySelector("#start");
var startQuizButton = document.querySelector("#quiz-start");

var quizSection = document.querySelector("#quiz-ul");
var answerButton1 = document.querySelector(".answer-choice-1");
var answerButton2 = document.querySelector(".answer-choice-2");
var answerButton3 = document.querySelector(".answer-choice-3");
var answerButton4 = document.querySelector(".answer-choice-4");

var a1Element = document.querySelector("#answer-1");
var a2Element = document.querySelector("#answer-2");
var a3Element = document.querySelector("#answer-3");
var a4Element = document.querySelector("#answer-4");

function updateQuestions() {
    if (currentQuestionIndex <= QuizQuestionsArr.length) {
        questionElement.innerHTML = QuizQuestionsArr[currentQuestionIndex].question;
        for (var i = 0; i <= QuizQuestionsArr[currentQuestionIndex].answerArr.length; i++) {
            switch (i) {
                case 0:
                    a1Element.innerHTML = QuizQuestionsArr[currentQuestionIndex].answerArr[0].answer;
                    break;
                case 1:
                    a2Element.innerHTML = QuizQuestionsArr[currentQuestionIndex].answerArr[1].answer;
                    break;
                case 2:
                    a3Element.innerHTML = QuizQuestionsArr[currentQuestionIndex].answerArr[2].answer;
                    break;
                case 3:
                    a4Element.innerHTML = QuizQuestionsArr[currentQuestionIndex].answerArr[3].answer;
                    break;
            }
        }
        currentQuestionIndex++;
    } else {
        endQuiz();
    }
}

var answerClickedEvent = (event) => {
    var element = event.target;

    console.log(element.dataset.num);
    var isCorrect = QuizQuestionsArr[currentQuestionIndex - 1].answerArr[element.dataset.num - 1].correct;
    evaluateAnswer(isCorrect);
}


var evaluateAnswer = (isCorrect) => {
    if (isCorrect) {
        Score++;
        console.log(Score);
    } else {
        timeLeft -= 5;
    }
    updateQuestions();
}

answerButton1.addEventListener("click", answerClickedEvent);
answerButton2.addEventListener("click", answerClickedEvent);
answerButton3.addEventListener("click", answerClickedEvent);
answerButton4.addEventListener("click", answerClickedEvent);

function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft < 0) {
            clearInterval(timeInterval);
            timerCurTime.textContent.textContent = 0;
            endQuiz();
        } else {
            timerCurTime.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

function startQuiz() {
    updateQuestions();
    countdown();
    startSection.style.display = "none";
    quizSection.style.display = "block";
}
function endQuiz() {
    startSection.style.display = "block";
    quizSection.style.display = "none";
}

startQuizButton.addEventListener("click", startQuiz);

function retrieveScores() { }