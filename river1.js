//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 21;
let countdown;

//Questions and Options array

const quizArray1 = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
];


const quizArray =  [
	
		  {
			"id": "1",
			"question": "Which is the longest river in India?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
			"correct": "Ganges"
		  },
		  {
			"id": "2",
			"question": "Which river originates in the Amarkantak hills?",
			"options": ["Narmada", "Godavari", "Kaveri", "Krishna"],
			"correct": "Narmada"
		  },
		  {
			"id": "3",
			"question": "Which river is known as the 'Sorrow of Bihar'?",
			"options": ["Ganges", "Yamuna", "Kosi", "Son"],
			"correct": "Kosi"
		  },
		  {
			"id": "4",
			"question": "Which river forms the famous Dudhsagar Falls in Goa?",
			"options": ["Yamuna", "Mahanadi", "Mandovi", "Godavari"],
			"correct": "Mandovi"
		  },
		  {
			"id": "5",
			"question": "Which river is also called the 'Dakshin Ganga'?",
			"options": ["Brahmaputra", "Krishna", "Godavari", "Kaveri"],
			"correct": "Godavari"
		  },
		  {
			"id": "6",
			"question": "Which river forms the border between Uttar Pradesh and Madhya Pradesh?",
			"options": ["Narmada", "Yamuna", "Son", "Ganges"],
			"correct": "Yamuna"
		  },
		  {
			"id": "7",
			"question": "Which river is known as the 'Lifeline of Madhya Pradesh'?",
			"options": ["Narmada", "Krishna", "Chambal", "Son"],
			"correct": "Narmada"
		  },
		  {
			"id": "8",
			"question": "Which river flows through the Sundarbans delta?",
			"options": ["Brahmaputra", "Ganges", "Krishna", "Mahanadi"],
			"correct": "Ganges"
		  },
		  {
			"id": "9",
			"question": "Which river is the largest tributary of the Ganges?",
			"options": ["Godavari", "Krishna", "Yamuna", "Son"],
			"correct": "Yamuna"
		  },
		  {
			"id": "10",
			"question": "Which river forms the border between Bihar and Jharkhand?",
			"options": ["Ganges", "Krishna", "Godavari", "Mahanadi"],
			"correct": "Ganges"
		  },
		  {
			"id": "11",
			"question": "Which river is known as the 'Ganga of the South'?",
			"options": ["Godavari", "Kaveri", "Krishna", "Narmada"],
			"correct": "Kaveri"
		  },
		  {
			"id": "12",
			"question": "Which river is the largest in terms of volume of water discharged into the sea?",
			"options": ["Krishna", "Godavari", "Yamuna", "Ganges"],
			"correct": "Godavari"
		  },
		  {
			"id": "13",
			"question": "Which river originates from the Milam Glacier in Uttarakhand?",
			"options": ["Mahanadi", "Yamuna", "Ganges", "Krishna"],
			"correct": "Ganges"
		  },
		  {
			"id": "14",
			"question": "Which river is also known as the 'Sorrow of Bengal'?",
			"options": ["Mahanadi", "Ganges", "Yamuna", "Brahmaputra"],
			"correct": "Brahmaputra"
		  },
		  {
			"id": "15",
			"question": "Which river is also known as the 'River of Sorrows'?",
			"options": ["Kaveri", "Ghaghara", "Sutlej", "Krishna"],
			"correct": "Sutlej"
		  },
		  {
			"id": "16",
			"question": "Which river is the largest in terms of length?",
			"options": ["Ganges", "Krishna", "Yamuna", "Brahmaputra"],
			"correct": "Ganges"
		  },
		  {
			"id": "17",
			"question": "Which river flows through the states of Rajasthan, Madhya Pradesh, and Gujarat?",
			"options": ["Godavari", "Narmada", "Mahanadi", "Chambal"],
			"correct": "Chambal"
		  },
		  {
			"id": "18",
			"question": "Which river is known as the 'River of Joy'?",
			"options": ["Krishna", "Ghaghara", "Ganges", "Kaveri"],
			"correct": "Krishna"
		  },
		  {
			"id": "19",
			"question": "Which river forms the border between India and Bangladesh?",
			"options": ["Yamuna", "Ganges", "Brahmaputra", "Mahanadi"],
			"correct": "Brahmaputra"
		  },
		  {
			"id": "20",
			"question": "Which river is the main tributary of the Godavari?",
			"options": ["Kaveri", "Yamuna", "Krishna", "Ganges"],
			"correct": "Krishna"
		  }
		];
  
  
  
//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 21;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 21;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};