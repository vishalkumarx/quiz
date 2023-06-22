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
		"question": "In which year did Mahatma Gandhi return to India from South Africa?",
		"options": ["1914", "1915", "1916", "1917"],
		"correct": "1915"
	  },
	  {
		"id": "2",
		"question": "Which was the first major nonviolent protest led by Mahatma Gandhi in India?",
		"options": ["Champaran Satyagraha", "Dandi March", "Salt Satyagraha", "Quit India Movement"],
		"correct": "Champaran Satyagraha"
	  },
	  {
		"id": "3",
		"question": "In which year did Mahatma Gandhi launch the Non-Cooperation Movement?",
		"options": ["1919", "1920", "1921", "1922"],
		"correct": "1920"
	  },
	  {
		"id": "4",
		"question": "Which famous incident took place at Jallianwala Bagh in Amritsar in 1919?",
		"options": ["Salt March", "Dandi March", "Jallianwala Bagh massacre", "Chauri Chaura incident"],
		"correct": "Jallianwala Bagh massacre"
	  },
	  {
		"id": "5",
		"question": "Which movement was launched by Mahatma Gandhi against the British salt monopoly?",
		"options": ["Quit India Movement", "Civil Disobedience Movement", "Salt Satyagraha", "Khilafat Movement"],
		"correct": "Salt Satyagraha"
	  },
	  {
		"id": "6",
		"question": "Which event led to the suspension of the Non-Cooperation Movement in 1922?",
		"options": ["Dandi March", "Champaran Satyagraha", "Jallianwala Bagh massacre", "Chauri Chaura incident"],
		"correct": "Chauri Chaura incident"
	  },
	  {
		"id": "7",
		"question": "Which movement was launched by Mahatma Gandhi during World War II?",
		"options": ["Quit India Movement", "Salt Satyagraha", "Civil Disobedience Movement", "Khilafat Movement"],
		"correct": "Quit India Movement"
	  },
	  {
		"id": "8",
		"question": "Which famous speech did Mahatma Gandhi deliver at the Round Table Conference in London in 1931?",
		"options": ["Tryst with Destiny", "Dandi March Speech", "Quit India Speech", "Gandhi-Irwin Pact Speech"],
		"correct": "Gandhi-Irwin Pact Speech"
	  },
	  {
		"id": "9",
		"question": "In which year did Mahatma Gandhi participate in the Salt March?",
		"options": ["1930", "1931", "1932", "1933"],
		"correct": "1930"
	  },
	  {
		"id": "10",
		"question": "Which event led to the signing of the Gandhi-Irwin Pact in 1931?",
		"options": ["Salt March", "Dandi March", "Civil Disobedience Movement", "Round Table Conference"],
		"correct": "Round Table Conference"
	  },
	  {
		"id": "11",
		"question": "Which movement was launched by Mahatma Gandhi to protest against the Rowlatt Act in 1919?",
		"options": ["Non-Cooperation Movement", "Quit India Movement",
  
   "Khilafat Movement", "Civil Disobedience Movement"],
		"correct": "Non-Cooperation Movement"
	  },
	  {
		"id": "12",
		"question": "Which famous slogan was coined by Mahatma Gandhi during the Quit India Movement?",
		"options": ["Do or Die", "Swaraj is my birthright", "Satyameva Jayate", "Inquilab Zindabad"],
		"correct": "Do or Die"
	  },
	  {
		"id": "13",
		"question": "Which organization did Mahatma Gandhi establish in 1920 to promote khadi and village industries?",
		"options": ["Indian National Congress", "All India Trade Union Congress", "Hindustan Socialist Republican Association", "All India Spinners' Association"],
		"correct": "All India Spinners' Association"
	  },
	  {
		"id": "14",
		"question": "Which famous event marked the beginning of the Civil Disobedience Movement in 1930?",
		"options": ["Dandi March", "Quit India Movement", "Jallianwala Bagh massacre", "Champaran Satyagraha"],
		"correct": "Dandi March"
	  },
	  {
		"id": "15",
		"question": "Which movement was launched by Mahatma Gandhi in support of the Khilafat movement in 1919?",
		"options": ["Non-Cooperation Movement", "Salt Satyagraha", "Quit India Movement", "Civil Disobedience Movement"],
		"correct": "Khilafat Movement"
	  },
	  {
		"id": "16",
		"question": "Which famous event took place on 30th January 1948?",
		"options": ["Jallianwala Bagh massacre", "Dandi March", "Salt Satyagraha", "Assassination of Mahatma Gandhi"],
		"correct": "Assassination of Mahatma Gandhi"
	  },
	  {
		"id": "17",
		"question": "Which famous agreement did Mahatma Gandhi sign with Lord Irwin in 1931?",
		"options": ["Tashkent Agreement", "Simla Agreement", "Gandhi-Irwin Pact", "Lahore Agreement"],
		"correct": "Gandhi-Irwin Pact"
	  },
	  {
		"id": "18",
		"question": "Which movement was launched by Mahatma Gandhi to protest against the British salt tax in 1930?",
		"options": ["Quit India Movement", "Civil Disobedience Movement", "Salt Satyagraha", "Non-Cooperation Movement"],
		"correct": "Salt Satyagraha"
	  },
	  {
		"id": "19",
		"question": "Which famous resolution was passed at the Lahore session of the Indian National Congress in 1929?",
		"options": ["Quit India Resolution", "Purna Swaraj Resolution", "Dandi March Resolution", "Salt Satyagraha Resolution"],
		"correct": "Purna Swaraj Resolution"
	  },
	  {
		"id": "20",
		"question": "Which incident inspired Mahatma Gandhi to take up the cause of indigo farmers in Champaran?",
		"options": ["Jallianwala Bagh massacre", "Chauri Chaura incident", "Kheda Satyagraha", "Plassey incident"],
		"correct": "Plassey incident"
	  },
	  {
		"id": "21",
		"question": "In which year did Mahatma Gandhi participate in the Kheda Satyagraha?",
		"options": ["1915", "1917", "1919", "1922"],
		"correct": "1918"
	  },
	  {
		"id": "22",
		"question": "Which movement was launched by Mahatma Gandhi to protest against the Rowlatt Act in 1919?",
		"options": ["Non-Cooperation Movement", "Quit India Movement", "Khilafat Movement", "Civil Disobedience Movement"],
		"correct": "Non-Cooperation Movement"
	  },
	  {
		"id": "23",
		"question": "Which famous slogan was coined by Mahatma Gandhi during the Quit India Movement?",
		"options": ["Do or Die", "Swaraj is my birthright", "Satyameva Jayate", "Inquilab Zindabad"],
		"correct": "Do or Die"
	  },
	  {
		"id": "24",
		"question": "Which organization did Mahatma Gandhi establish in 1920 to promote khadi and village industries?",
		"options": ["Indian National Congress", "All India Trade Union Congress", "Hindustan Socialist Republican Association", "All India Spinners' Association"],
		"correct": "All India Spinners' Association"
	  },
	  {
		"id": "25",
		"question": "Which famous event marked the beginning of the Civil Disobedience Movement in 1930?",
		"options": ["Dandi March", "Quit India Movement", "Jallianwala Bagh massacre", "Champaran Satyagraha"],
		"correct": "Dandi March"
	  },
	  {
		"id": "26",
		"question": "Which movement was launched by Mahatma Gandhi in support of the Khilafat movement in 1919?",
		"options": ["Non-Cooperation Movement", "Salt Satyagraha", "Quit India Movement", "Civil Disobedience Movement"],
		"correct": "Khilafat Movement"
	  },
	  {
		"id": "27",
		"question": "Which famous event took place on 30th January 1948?",
		"options": ["Jallianwala Bagh massacre", "Dandi March", "Salt Satyagraha", "Assassination of Mahatma Gandhi"],
		"correct": "Assassination of Mahatma Gandhi"
	  },
	  {
		"id": "28",
		"question": "Which famous agreement did Mahatma Gandhi sign with Lord Irwin in 1931?",
		"options": ["Tashkent Agreement", "Simla Agreement", "Gandhi-Irwin Pact", "Lahore Agreement"],
		"correct": "Gandhi-Irwin Pact"
	  },
	  {
		"id": "29",
		"question": "Which movement was launched by Mahatma Gandhi to protest against the British salt tax in 1930?",
		"options": ["Quit India Movement", "Civil Disobedience Movement", "Salt Satyagraha", "Non-Cooperation Movement"],
		"correct": "Salt Satyagraha"
	  },
	  {
		"id": "30",
		"question": "Which famous resolution was passed at the Lahore session of the Indian National Congress in 1929?",
		"options": ["Quit India Resolution", "Purna Swaraj Resolution", "Dandi March Resolution", "Salt Satyagraha Resolution"],
		"correct": "Purna Swaraj Resolution"
	  },
	  {
		"id": "31",
		"question": "Which incident inspired Mahatma Gandhi to take up the cause of indigo farmers in Champaran?",
		"options": ["Jallianwala Bagh massacre", "Chauri Chaura incident", "Kheda Satyagraha", "Plassey incident"],
		"correct": "Plassey incident"
	  },
	  {
		"id": "32",
		"question": "In which year did Mahatma Gandhi participate in the Kheda Satyagraha?",
		"options": ["1915", "1917", "1919", "1922"],
		"correct": "1918"
	  },
	  {
		"id": "33",
		"question": "Which movement was launched by Mahatma Gandhi to protest against the Rowlatt Act in 1919?",
		"options": ["Non-Cooperation Movement", "Quit India Movement", "Khilafat Movement", "Civil Disobedience Movement"],
		"correct": "Non-Cooperation Movement"
	  },
	  {
		"id": "34",
		"question": "Which famous slogan was coined by Mahatma Gandhi during the Quit India Movement?",
		"options": ["Do or Die", "Swaraj is my birthright", "Satyameva Jayate", "Inquilab Zindabad"],
		"correct": "Do or Die"
	  },
	  {
		"id": "35",
		"question": "Which organization did Mahatma Gandhi establish in 1920 to promote khadi and village industries?",
		"options": ["Indian National Congress", "All India Trade Union Congress", "Hindustan Socialist Republican Association", "All India Spinners' Association"],
		"correct": "All India Spinners' Association"
	  },
	  {
		"id": "36",
		"question": "Which famous event marked the beginning of the Civil Disobedience Movement in 1930?",
		"options": ["Dandi March", "Quit India Movement", "Jallianwala Bagh massacre", "Champaran Satyagraha"],
		"correct": "Dandi March"
	  },
	  {
		"id": "37",
		"question": "Which movement was launched by Mahatma Gandhi in support of the Khilafat movement in 1919?",
		"options": ["Non-Cooperation Movement", "Salt Satyagraha", "Quit India Movement", "Civil Disobedience Movement"],
		"correct": "Khilafat Movement"
	  },
	  {
		"id": "38",
		"question": "Which famous event took place on 30th January 1948?",
		"options": ["Jallianwala Bagh massacre", "Dandi March", "Salt Satyagraha", "Assassination of Mahatma Gandhi"],
		"correct": "Assassination of Mahatma Gandhi"
	  },
	  {
		"id": "39",
		"question": "Which famous agreement did Mahatma Gandhi sign with Lord Irwin in 1931?",
		"options": ["Tashkent Agreement", "Simla Agreement", "Gandhi-Irwin Pact", "Lahore Agreement"],
		"correct": "Gandhi-Irwin Pact"
	  },
	  {
		"id": "40",
		"question": "Which movement was launched by Mahatma Gandhi to protest against the British salt tax in 1930?",
		"options": ["Quit India Movement", "Civil Disobedience Movement", "Salt Satyagraha", "Non-Cooperation Movement"],
		"correct": "Salt Satyagraha"
	  },
	  {
		"id": "41",
		"question": "Which famous resolution was passed at the Lahore session of the Indian National Congress in 1929?",
		"options": ["Quit India Resolution", "Purna Swaraj Resolution", "Dandi March Resolution", "Salt Satyagraha Resolution"],
		"correct": "Purna Swaraj Resolution"
	  },
	  {
		"id": "42",
		"question": "Which incident inspired Mahatma Gandhi to take up the cause of indigo farmers in Champaran?",
		"options": ["Jallianwala Bagh massacre", "Chauri Chaura incident", "Kheda Satyagraha", "Plassey incident"],
		"correct": "Plassey incident"
	  },
	  {
		"id": "43",
		"question": "In which year did Mahatma Gandhi participate in the Kheda Satyagraha?",
		"options": ["1915", "1917", "1919", "1922"],
		"correct": "1918"
	  },
	  {
		"id": "44",
		"question": "Which movement was launched by Mahatma Gandhi to protest against the Rowlatt Act in 1919?",
		"options": ["Non-Cooperation Movement", "Quit India Movement", "Khilafat Movement", "Civil Disobedience Movement"],
		"correct": "Non-Cooperation Movement"
	  },
	  {
		"id": "45",
		"question": "Which famous slogan was coined by Mahatma Gandhi during the Quit India Movement?",
		"options": ["Do or Die", "Swaraj is my birthright", "Satyameva Jayate", "Inquilab Zindabad"],
		"correct": "Do or Die"
	  },
	  {
		"id": "46",
		"question": "Which organization did Mahatma Gandhi establish in 1920 to promote khadi and village industries?",
		"options": ["Indian National Congress", "All India Trade Union Congress", "Hindustan Socialist Republican Association", "All India Spinners' Association"],
		"correct": "All India Spinners' Association"
	  },
	  {
		"id": "47",
		"question": "Which famous event marked the beginning of the Civil Disobedience Movement in 1930?",
		"options": ["Dandi March", "Quit India Movement", "Jallianwala Bagh massacre", "Champaran Satyagraha"],
		"correct": "Dandi March"
	  },
	  {
		"id": "48",
		"question": "Which movement was launched by Mahatma Gandhi in support of the Khilafat movement in 1919?",
		"options": ["Non-Cooperation Movement", "Salt Satyagraha", "Quit India Movement", "Civil Disobedience Movement"],
		"correct": "Khilafat Movement"
	  },
	  {
		"id": "49",
		"question": "Which famous event took place on 30th January 1948?",
		"options": ["Jallianwala Bagh massacre", "Dandi March", "Salt Satyagraha", "Assassination of Mahatma Gandhi"],
		"correct": "Assassination of Mahatma Gandhi"
	  },
	  {
		"id": "50",
		"question": "Which famous agreement did Mahatma Gandhi sign with Lord Irwin in 1931?",
		"options": ["Tashkent Agreement", "Simla Agreement", "Gandhi-Irwin Pact", "Lahore Agreement"],
		"correct": "Gandhi-Irwin Pact"
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