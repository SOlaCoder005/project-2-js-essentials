const question = document.getElementById("beginnerqs");
const options = Array.from(document.getElementsByClassName("optionsbl"));
// console.log(options);

let liveQuestion = {}; //object
let monitoringAnswers = true; //creates a delay 
let tally = 0; 
let questionblCounter = 0;
let directoryQuestions = [];

let listOfQuestions = [
    {
        question:"How do you say Good morning in Yoruba?",
        option1:"Ekaro",
        option2:"Ekasan",
        option3:"Ekale",
        option4:"Bawo ni",
        answer: 1
    },
    {
        question:"How do you say 'Orange'(fruit) in Yoruba?",
        option1:"Ada",
        option2:"Sibi",
        option3:"Osan",
        option4:"Aja",
        answer: 3
    },
    {
        question:"Yoruba is a tribe in which African country?",
        option1:"Ghana",
        option2:"South Africa",
        option3:"Nigeria",
        option4:"South Sudan",
        answer: 3
    },
    {
        question:"How do you say Good afternoon in Yoruba?",
        option1:"Bawo ni",
        option2:"Ekasan",
        option3:"Dada ni",
        option4:"Ekale",
        answer: 4
    },
    {
        question:"How do you say ‘Mother’ in Yoruba?",
        option1:"Aburo",
        option2:"Maami",
        option3:"Egbon",
        option4:"Baami",
        answer: 2
    }
];

startQuiz = () => {
    questionblCounter = 0;
    score = 0;
    directoryQuestions = [...listOfQuestions];
    console.log(directoryQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionblCounter++;
    const questionIndex = Math.floor(Math.random() * directoryQuestions.length);//this allow the reandom selection of answers
    liveQuestion = directoryQuestions[questionIndex];
    question.innerText = liveQuestion.question;

    options.forEach( option => {
        const number = option.dataset['number'];
        option.innerText = liveQuestion['option' + number];
    })
}




startQuiz();//to start game