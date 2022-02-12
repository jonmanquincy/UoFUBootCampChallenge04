class QuizQuestion {
    constructor(question, answerArr) {
        this.question = question;
        this.answerArr = answerArr;
    }
}

class Answer {
    constructor(answer, correct){
        this.answer = answer;
        this.correct = correct;
    }
}

const QuizQuestionsArr = [
    new QuizQuestion("What is your Favorite Color?",
        [new Answer("Cow", true),
         new Answer("Pig", false),
         new Answer("Chicken", false),
         new Answer("Horse", false)]),

    new QuizQuestion("You got it?",
        [new Answer("poo", true),
        new Answer("smiley", false),
        new Answer("fish", false),
        new Answer("chips", false)]),

    new QuizQuestion("What is your Favorite Color?",
        [new Answer("Cow", true),
        new Answer("Pig", false),
        new Answer("Chicken", false),
        new Answer("Horse", false)]),

    new QuizQuestion("What is your Favorite Color?",
        [new Answer("Cow", true),
        new Answer("Pig", false),
        new Answer("Chicken", false),
        new Answer("Horse", false)]),

    new QuizQuestion("What is your Favorite Color?",
        [new Answer("Cow", true),
        new Answer("Pig", false),
        new Answer("Chicken", false),
        new Answer("Horse", false)])
];

//JS Variables
var Score = 0;
var currentQuestionIndex = 0;

//HTML Elements
var timerCurTime = document.querySelector("#current-time");


var questionElement = document.querySelector("#quiz-question");
var answerButton1 = document.querySelector(".answer-choice-1");
var answerButton2 = document.querySelector(".answer-choice-2");
var answerButton3 = document.querySelector(".answer-choice-3");
var answerButton4 = document.querySelector(".answer-choice-4");
var a1Element = document.querySelector("#answer-1");
var a2Element = document.querySelector("#answer-2");
var a3Element = document.querySelector("#answer-3");
var a4Element = document.querySelector("#answer-4");

function updateQuestions() {
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
}

var answerClicked = () => {
    if(false){
        Score++;
    }
    updateQuestions();
}
answerButton1.addEventListener("click", answerClicked);
answerButton2.addEventListener("click", answerClicked);
answerButton3.addEventListener("click", answerClicked);
answerButton4.addEventListener("click", answerClicked);

container.addEventListener("click", function(event) {

    var element = event.target;
    
    element.innerHTML = element.dataset.number;
});

function retrieveScores() { }
function startQuiz() { }
function endQuiz() { }

updateQuestions();