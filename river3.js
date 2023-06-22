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
			"question": "Which river is known as the 'Lifeline of India'?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Krishna"],
			"correct": "Ganges"
		  },
		  {
			"id": "2",
			"question": "Which river is the longest river in India?",
			"options": ["Ganges", "Yamuna", "Godavari", "Brahmaputra"],
			"correct": "Ganges"
		  },
		  {
			"id": "3",
			"question": "Which river originates from the Mansarovar Lake in Tibet?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Indus"],
			"correct": "Brahmaputra"
		  },
		  {
			"id": "4",
			"question": "Which river is known as the 'Sorrow of Bihar'?",
			"options": ["Ganges", "Yamuna", "Son", "Godavari"],
			"correct": "Son"
		  },
		  {
			"id": "5",
			"question": "Which river is the westernmost and longest tributary of the Ganges?",
			"options": ["Yamuna", "Son", "Ghaghara", "Kosi"],
			"correct": "Yamuna"
		  },
		  {
			"id": "6",
			"question": "Which river forms the famous Sunderbans delta?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
			"correct": "Ganges"
		  },
		  {
			"id": "7",
			"question": "Which river is also known as the 'Dakshin Ganga'?",
			"options": ["Krishna", "Godavari", "Narmada", "Tapti"],
			"correct": "Godavari"
		  },
		  {
			"id": "8",
			"question": "Which river is known as the 'Lifeline of South India'?",
			"options": ["Krishna", "Godavari", "Cauvery", "Tungabhadra"],
			"correct": "Cauvery"
		  },
		  {
			"id": "9",
			"question": "Which river flows through the states of Maharashtra, Telangana, and Andhra Pradesh?",
			"options": ["Narmada", "Krishna", "Tapti", "Mahanadi"],
			"correct": "Krishna"
		  },
		  {
			"id": "10",
			"question": "Which river is known as the 'River of Bengal'?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Hooghly"],
			"correct": "Hooghly"
		  },
		  {
			"id": "11",
			"question": "Which river is the main tributary of the Yamuna?",
			"options": ["Ganges", "Chambal", "Son", "Ghaghara"],
			"correct": "Chambal"
		  },
		  {
			"id": "12",
			"question": "Which river flows through the states of Jharkhand, West Bengal, and Odisha?",
			"options": ["Mahanadi", "Kaveri", "Gandak", "Subarnarekha"],
			"correct": "Subarnarekha"
		  },
		  {
			"id": "13",
			"question": "Which river is the longest river in peninsular India?",
			"options": ["Ganges", "Krishna", "Godavari", "Mahanadi"],
			"correct": "Godavari"
		  },
		  {
			"id": "14",
			"question": "Which river forms the famous Dudhsagar Falls in Goa?",
			"options": ["Yamuna", "Mandovi", "Tapti", "Kaveri"],
			"correct": "Mandovi"
		  },
		  {
			"id": "15",
			"question": "Which river is also known as the 'River of Sorrows'?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Kosi"],
			"correct": "Kosi"
		  },
		  {
			"id": "16",
			"question": "Which river forms the border between India and Nepal?",
			"options": ["Yamuna", "Ganges", "Sutlej", "Kali"],
			"correct": "Kali"
		  },
		  {
			"id": "17",
			"question": "Which river is known as the 'River of Joy'?",
			"options": ["Krishna", "Ghaghara", "Ganges", "Kaveri"],
			"correct": "Krishna"
		  },
		  {
			"id": "18",
			"question": "Which river is the main tributary of the Indus?",
			"options": ["Ghaghara", "Yamuna", "Beas", "Chenab"],
			"correct": "Chenab"
		  },
		  {
			"id": "19",
			"question": "Which river is the easternmost and largest tributary of the Ganges?",
			"options": ["Yamuna", "Son", "Ghaghara", "Kosi"],
			"correct": "Kosi"
		  },
		  {
			"id": "20",
			"question": "Which river is known as the 'River of Bengal'?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Hooghly"],
			"correct": "Hooghly"
		  },
		  {
			"id": "21",
			"question": "Which river is the longest river in Madhya Pradesh?",
			"options": ["Narmada", "Krishna", "Tapti", "Mahanadi"],
			"correct": "Narmada"
		  },
		  {
			"id": "22",
			"question": "Which river is known as the 'Lifeline of Rajasthan'?",
			"options": ["Krishna", "Ghaghara", "Chambal", "Gandak"],
			"correct": "Chambal"
		  },
		  {
			"id": "23",
			"question": "Which river is known as the 'River of Pearls'?",
			"options": ["Godavari", "Narmada", "Krishna", "Mahanadi"],
			"correct": "Krishna"
		  },
		  {
			"id": "24",
			"question": "Which river is the largest river in South India?",
			"options": ["Godavari", "Kaveri", "Tapti", "Narmada"],
			"correct": "Godavari"
		  },
		  {
			"id": "25",
			"question": "Which river flows through the states of Punjab and Haryana?",
			"options": ["Beas", "Chenab", "Sutlej", "Ravi"],
			"correct": "Sutlej"
		  },
		  {
			"id": "26",
			"question": "Which river is the longest river in Kerala?",
			"options": ["Brahmaputra", "Periyar", "Ghaghara", "Krishna"],
			"correct": "Periyar"
		  },
		  {
			"id": "27",
			"question": "Which river is known as the 'River of Bengal'?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Hooghly"],
			"correct": "Hooghly"
		  },
		  {
			"id": "28",
			"question": "Which river flows through the states of Bihar and Uttar Pradesh?",
			"options": ["Ganges", "Yamuna", "Sutlej", "Ravi"],
			"correct": "Ganges"
		  },
		  {
			"id": "29",
			"question": "Which river is known as the 'Lifeline of Gujarat'?",
			"options": ["Narmada", "Krishna", "Ghaghara", "Mahanadi"],
			"correct": "Narmada"
		  },
		  {
			"id": "30",
			"question": "Which river forms the famous Jog Falls in Karnataka?",
			"options": ["Godavari", "Kaveri", "Tapti", "Krishna"],
			"correct": "Kaveri"
		  },
		  {
			"id": "31",
			"question": "Which river is the main tributary of the Godavari?",
			"options": ["Mahanadi", "Yamuna", "Krishna", "Pench"],
			"correct": "Krishna"
		  },
		  {
			"id": "32",
			"question": "Which river is known as the 'River of South Bihar'?",
			"options": ["Kosi", "Son", "Ghaghara", "Chambal"],
			"correct": "Kosi"
		  },
		  {
			"id": "33",
			"question": "Which river is the longest river in Himachal Pradesh?",
			"options": ["Yamuna", "Beas", "Sutlej", "Ravi"],
			"correct": "Sutlej"
		  },
		  {
			"id": "34",
			"question": "Which river is known as the 'River of Western India'?",
			"options": ["Narmada", "Krishna", "Ghaghara", "Mahanadi"],
			"correct": "Narmada"
		  },
		  {
			"id": "35",
			"question": "Which river flows through the states of Uttarakhand, Uttar Pradesh, Bihar, and West Bengal?",
			"options": ["Ganges", "Yamuna", "Brahmaputra", "Krishna"],
			"correct": "Ganges"
		  },
		  {
			"id": "36",
			"question": "Which river is the largest river in Jharkhand?",
			"options": ["Mahanadi", "Ghaghara", "Kaveri", "Subarnarekha"],
			"correct": "Subarnarekha"
		  },
		  {
			"id": "37",
			"question": "Which river is known as the 'River of Odisha'?",
			"options": ["Mahanadi", "Yamuna", "Krishna", "Gandak"],
			"correct": "Mahanadi"
		  },
		  {
			"id": "38",
			"question": "Which river forms the famous Victoria Falls in Zimbabwe?",
			"options": ["Godavari", "Yamuna", "Zambezi", "Nile"],
			"correct": "Zambezi"
		  },
		  {
			"id": "39",
			"question": "Which river is the longest river in North-East India?",
			"options": ["Brahmaputra", "Ganges", "Yamuna", "Godavari"],
			"correct": "Brahmaputra"
		  },
		  {
			"id": "40",
			"question": "Which river is known as the 'River of Arunachal Pradesh'?",
			"options": ["Kaveri", "Ghaghara", "Brahmaputra", "Mahanadi"],
			"correct": "Brahmaputra"
		  },
		  {
			"id": "41",
			"question": "Which river is the largest river in Arunachal Pradesh?",
			"options": ["Yamuna", "Subansiri", "Krishna", "Ganges"],
			"correct": "Subansiri"
		  },
		  {
			"id": "42",
			"question": "Which river forms the famous Athirappilly Falls in Kerala?",
			"options": ["Godavari", "Kaveri", "Periyar", "Krishna"],
			"correct": "Periyar"
		  },
		  {
			"id": "43",
			"question": "Which river is known as the 'Lifeline of Assam'?",
			"options": ["Narmada", "Krishna", "Brahmaputra", "Ghaghara"],
			"correct": "Brahmaputra"
		  },
		  {
			"id": "44",
			"question": "Which river is the main tributary of the Brahmaputra?",
			"options": ["Ganges", "Yamuna", "Dibang", "Godavari"],
			"correct": "Dibang"
		  },
		  {
			"id": "45",
			"question": "Which river flows through the states of Goa and Karnataka?",
			"options": ["Godavari", "Kaveri", "Mandovi", "Krishna"],
			"correct": "Mandovi"
		  },
		  {
			"id": "46",
			"question": "Which river is known as the 'River of Mizoram'?",
			"options": ["Mahanadi", "Krishna", "Ghaghara", "Tlawng"],
			"correct": "Tlawng"
		  },
		  {
			"id": "47",
			"question": "Which river is the longest river in Punjab?",
			"options": ["Beas", "Sutlej", "Ravi", "Chenab"],
			"correct": "Beas"
		  },
		  {
			"id": "48",
			"question": "Which river forms the famous Jog Falls in Karnataka?",
			"options": ["Godavari", "Kaveri", "Tapti", "Krishna"],
			"correct": "Kaveri"
		  },
		  {
			"id": "49",
			"question": "Which river is known as the 'Lifeline of Maharashtra'?",
			"options": ["Narmada", "Godavari", "Krishna", "Tapi"],
			"correct": "Godavari"
		  },
		  {
			"id": "50",
			"question": "Which river is the largest river in Tamil Nadu?",
			"options": ["Godavari", "Kaveri", "Tapti", "Krishna"],
			"correct": "Kaveri"
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