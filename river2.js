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

const quizArray = [
	  {
		"id": "1",
		"question": "Which river is known as the 'River of Gold'?",
		"options": ["Son", "Brahmaputra", "Ghaghara", "Yamuna"],
		"correct": "Son"
	  },
	  {
		"id": "2",
		"question": "Which river is known as the 'River of Sorrow'?",
		"options": ["Ghaghara", "Godavari", "Krishna", "Kaveri"],
		"correct": "Ghaghara"
	  },
	  {
		"id": "3",
		"question": "Which river forms the border between India and Pakistan?",
		"options": ["Mahanadi", "Ravi", "Beas", "Chenab"],
		"correct": "Ravi"
	  },
	  {
		"id": "4",
		"question": "Which river is also known as the 'River of Bengal'?",
		"options": ["Mahanadi", "Hooghly", "Ghaghara", "Yamuna"],
		"correct": "Hooghly"
	  },
	  {
		"id": "5",
		"question": "Which river is known as the 'Lifeline of Rajasthan'?",
		"options": ["Luni", "Gandak", "Krishna", "Sutlej"],
		"correct": "Luni"
	  },
	  {
		"id": "6",
		"question": "Which river flows through the Valley of Flowers in Uttarakhand?",
		"options": ["Ganges", "Yamuna", "Alaknanda", "Bhagirathi"],
		"correct": "Alaknanda"
	  },
	  {
		"id": "7",
		"question": "Which river forms the famous Jog Falls in Karnataka?",
		"options": ["Krishna", "Tungabhadra", "Cauvery", "Sharavati"],
		"correct": "Sharavati"
	  },
	  {
		"id": "8",
		"question": "Which river is also known as the 'Sorrow of Bengal'?",
		"options": ["Gandak", "Brahmaputra", "Godavari", "Kaveri"],
		"correct": "Brahmaputra"
	  },
	  {
		"id": "9",
		"question": "Which river flows through the states of Punjab and Haryana?",
		"options": ["Sutlej", "Ghaghara", "Chambal", "Krishna"],
		"correct": "Sutlej"
	  },
	  {
		"id": "10",
		"question": "Which river forms the famous Dhuandhar Falls in Madhya Pradesh?",
		"options": ["Ganges", "Narmada", "Son", "Yamuna"],
		"correct": "Narmada"
	  },
	  {
		"id": "11",
		"question": "Which river is the southernmost river in India?",
		"options": ["Kaveri", "Godavari", "Krishna", "Pamba"],
		"correct": "Pamba"
	  },
	  {
		"id": "12",
		"question": "Which river is known as the 'Ganga of the South'?",
		"options": ["Krishna", "Cauvery", "Godavari", "Narmada"],
		"correct": "Cauvery"
	  },
	  {
		"id": "13",
		"question": "Which river originates from the Gangotri Glacier in Uttarakhand?",
		"options": ["Yamuna", "Ganges", "Brahmaputra", "Kaveri"],
		"correct": "Ganges"
	  },
	  {
		"id": "14",
		"question": "Which river forms the border between India and Bangladesh for a significant distance?",
		"options": ["Yamuna", "Ganges", "Brahmaputra", "Kosi"],
		"correct": "Brahmaputra"
	  },
	  {
		"id": "15",
		"question": "Which river is known as the 'River of Joy'?",
		"options": ["Krishna", "Ghaghara", "Ganges", "Kaveri"],
		"correct": "Krishna"
	  },
	  {
		"id": "16",
		"question": "Which river is known as the 'Lifeline of Gujarat'?",
		"options": ["Mahanadi", "Sabarmati", "Chambal", "Krishna"],
		"correct": "Sabarmati"
	  },
	  {
		"id": "17",
		"question": "Which river is the main tributary of the Krishna?",
		"options": ["Gandak", "Bhima", "Ghaghara", "Sutlej"],
		"correct": "Bhima"
	  },
	  {
		"id": "18",
		"question": "Which river is also known as the 'Teesta' in its upper reaches?",
		"options": ["Narmada", "Kosi", "Chenab", "Beas"],
		"correct": "Kosi"
	  },
	  {
		"id": "19",
		"question": "Which river is the largest tributary of the Brahmaputra?",
		"options": ["Ghaghara", "Ganges", "Tapti", "Son"],
		"correct": "Ganges"
	  },
	  {
		"id": "20",
		"question": "Which river flows through the states of Himachal Pradesh and Punjab?",
		"options": ["Mahanadi", "Ravi", "Godavari", "Krishna"],
		"correct": "Ravi"
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