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


const quizArray =  [{
		"id": "1",
		"question": "When was the first session of the Indian National Congress held?",
		"options": ["1883", "1885", "1888", "1890"],
		"correct": "1885"
	  },
	  {
		"id": "2",
		"question": "Who was the first President of the Indian National Congress?",
		"options": ["A.O. Hume", "Dadabhai Naoroji", "Surendranath Banerjee", "W.C. Bonnerjee"],
		"correct": "W.C. Bonnerjee"
	  },
	  {
		"id": "3",
		"question": "In which city was the first session of the Indian National Congress held?",
		"options": ["Bombay (Mumbai)", "Calcutta (Kolkata)", "Madras (Chennai)", "Delhi"],
		"correct": "Bombay (Mumbai)"
	  },
	  {
		"id": "4",
		"question": "Who was the first woman president of the Indian National Congress?",
		"options": ["Vijaya Lakshmi Pandit", "Sarojini Naidu", "Annie Besant", "Kamala Nehru"],
		"correct": "Annie Besant"
	  },
	  {
		"id": "5",
		"question": "During which session of the Indian National Congress did the demand for 'Complete Independence' (Purna Swaraj) arise?",
		"options": ["Lahore Session (1929)", "Lucknow Session (1916)", "Bombay Session (1885)", "Madras Session (1887)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "6",
		"question": "Which session of the Indian National Congress witnessed the launch of the Non-Cooperation Movement by Mahatma Gandhi?",
		"options": ["Calcutta Session (1920)", "Nagpur Session (1920)", "Amritsar Session (1919)", "Karachi Session (1931)"],
		"correct": "Nagpur Session (1920)"
	  },
	  {
		"id": "7",
		"question": "Who was the President of the Indian National Congress during the Dandi March?",
		"options": ["Motilal Nehru", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Mahatma Gandhi"
	  },
	  {
		"id": "8",
		"question": "Which session of the Indian National Congress is famously known as the 'Lucknow Pact' session?",
		"options": ["Lucknow Session (1916)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Lucknow Session (1916)"
	  },
	  {
		"id": "9",
		"question": "Who was the first Indian woman to be elected as the President of the Indian National Congress?",
		"options": ["Vijaya Lakshmi Pandit", "Sarojini Naidu", "Annie Besant", "Kamala Nehru"],
		"correct": "Sarojini Naidu"
	  },
	  {
		"id": "10",
		"question": "Which session of the Indian National Congress marked the declaration of the 'Poorna Swaraj' (Complete Independence) resolution?",
		"options": ["Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)", "Calcutta Session (1906)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "11",
		"question": "Who presided over the Karachi Session of the Indian National Congress in 1931, where the demand for a 'Constituent Assembly' was made?",
		"options": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhash Chandra Bose"],
		"correct": "Jawaharlal Nehru"
	  },
	  {
		"id": "12",
		"question": "Which session of the Indian National Congress witnessed the historic resolution on 'Swaraj' (Self-Governance) in 1906?",
		"options": ["Calcutta Session (1906)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Calcutta Session (1906)"
	  },
	  {
		"id": "13",
		"question": "Who was the President of the Indian National Congress during the famous Quit India Movement in 1942?",
		"options": ["Abul Kalam Azad", "Subhash Chandra Bose", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Abul Kalam Azad"
	  },
	  {
		"id": "14",
		"question": "During which session of the Indian National Congress was the 'Gandhi-Irwin Pact' signed in 1931?",
		"options": ["Karachi Session (1931)", "Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)"],
		"correct": "Karachi Session (1931)"
	  },
	  {
		"id": "15",
		"question": "Which session of the Indian National Congress is known for the famous 'Dandi March' led by Mahatma Gandhi?",
		"options": ["Calcutta Session (1920)", "Nagpur Session (1920)", "Amritsar Session (1919)", "Karachi Session (1931)"],
		"correct": "Nagpur Session (1920)"
	  },
	  {
		"id": "16",
		"question": "Who was the first Indian to be elected as the President of the Indian National Congress?",
		"options": ["A.O. Hume", "Dadabhai Naoroji", "Surendranath Banerjee", "W.C. Bonnerjee"],
		"correct": "Dadabhai Naoroji"
	  },
	  {
		"id": "17",
		"question": "During which session of the Indian National Congress was the 'Civil Disobedience Movement' launched in 1930?",
		"options": ["Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)", "Calcutta Session (1906)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "18",
		"question": "Who was the first President of the Indian National Congress to be elected for three consecutive terms?",
		"options": ["Motilal Nehru", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Jawaharlal Nehru"
	  },
	  {
		"id": "19",
		"question": "Which session of the Indian National Congress is associated with the historic 'Lucknow Pact' between the Congress and the Muslim League?",
		"options": ["Lucknow Session (1916)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Lucknow Session (1916)"
	  },
	  {
		"id": "20",
		"question": "Who among the following was the first Indian woman to preside over a session of the Indian National Congress?",
		"options": ["Vijaya Lakshmi Pandit", "Sarojini Naidu", "Annie Besant", "Kamala Nehru"],
		"correct": "Annie Besant"
	  },
	  {
		"id": "21",
		"question": "During which session of the Indian National Congress did the demand for 'Complete Independence' (Purna Swaraj) arise?",
		"options": ["Lahore Session (1929)", "Lucknow Session (1916)", "Bombay Session (1885)", "Madras Session (1887)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "22",
		"question": "Which session of the Indian National Congress witnessed the launch of the Non-Cooperation Movement by Mahatma Gandhi?",
		"options": ["Calcutta Session (1920)", "Nagpur Session (1920)", "Amritsar Session (1919)", "Karachi Session (1931)"],
		"correct": "Nagpur Session (1920)"
	  },
	  {
		"id": "23",
		"question": "Who was the President of the Indian National Congress during the Dandi March?",
		"options": ["Motilal Nehru", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Mahatma Gandhi"
	  },
	  {
		"id": "24",
		"question": "Which session of the Indian National Congress is famously known as the 'Lucknow Pact' session?",
		"options": ["Lucknow Session (1916)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Lucknow Session (1916)"
	  },
	  {
		"id": "25",
		"question": "Who was the first Indian woman to be elected as the President of the Indian National Congress?",
		"options": ["Vijaya Lakshmi Pandit", "Sarojini Naidu", "Annie Besant", "Kamala Nehru"],
		"correct": "Sarojini Naidu"
	  },
	  {
		"id": "26",
		"question": "Which session of the Indian National Congress marked the declaration of the 'Poorna Swaraj' (Complete Independence) resolution?",
		"options": ["Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)", "Calcutta Session (1906)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "27",
		"question": "Who presided over the Karachi Session of the Indian National Congress in 1931, where the demand for a 'Constituent Assembly' was made?",
		"options": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhash Chandra Bose"],
		"correct": "Jawaharlal Nehru"
	  },
	  {
		"id": "28",
		"question": "Which session of the Indian National Congress witnessed the historic resolution on 'Swaraj' (Self-Governance) in 1906?",
		"options": ["Calcutta Session (1906)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Calcutta Session (1906)"
	  },
	  {
		"id": "29",
		"question": "Who was the President of the Indian National Congress during the famous Quit India Movement in 1942?",
		"options": ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Mahatma Gandhi"
	  },
	  {
		"id": "30",
		"question": "During which session of the Indian National Congress was the 'Gandhi-Irwin Pact' signed in 1931?",
		"options": ["Karachi Session (1931)", "Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)"],
		"correct": "Karachi Session (1931)"
	  },
	  {
		"id": "31",
		"question": "Which session of the Indian National Congress is known for the famous 'Dandi March' led by Mahatma Gandhi?",
		"options": ["Calcutta Session (1920)", "Nagpur Session (1920)", "Amritsar Session (1919)", "Karachi Session (1931)"],
		"correct": "Nagpur Session (1920)"
	  },
	  {
		"id": "32",
		"question": "Who was the first Indian to be elected as the President of the Indian National Congress?",
		"options": ["A.O. Hume", "Dadabhai Naoroji", "Surendranath Banerjee", "W.C. Bonnerjee"],
		"correct": "Dadabhai Naoroji"
	  },
	  {
		"id": "33",
		"question": "During which session of the Indian National Congress was the 'Civil Disobedience Movement' launched in 1930?",
		"options": ["Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)", "Calcutta Session (1906)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "34",
		"question": "Who was the first President of the Indian National Congress to be elected for three consecutive terms?",
		"options": ["Motilal Nehru", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Jawaharlal Nehru"
	  },
	  {
		"id": "35",
		"question": "During which session of the Indian National Congress was the 'Lucknow Pact' signed between the Congress and the Muslim League in 1916?",
		"options": ["Lucknow Session (1916)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Lucknow Session (1916)"
	  },
	  {
		"id": "36",
		"question": "Who was the first woman to preside over a session of the Indian National Congress?",
		"options": ["Vijaya Lakshmi Pandit", "Sarojini Naidu", "Annie Besant", "Kamala Nehru"],
		"correct": "Annie Besant"
	  },
	  {
		"id": "37",
		"question": "During which session of the Indian National Congress did the demand for 'Complete Independence' (Purna Swaraj) arise?",
		"options": ["Lahore Session (1929)", "Lucknow Session (1916)", "Bombay Session (1885)", "Madras Session (1887)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "38",
		"question": "Which session of the Indian National Congress witnessed the launch of the Non-Cooperation Movement by Mahatma Gandhi?",
		"options": ["Calcutta Session (1920)", "Nagpur Session (1920)", "Amritsar Session (1919)", "Karachi Session (1931)"],
		"correct": "Nagpur Session (1920)"
	  },
	  {
		"id": "39",
		"question": "Who was the President of the Indian National Congress during the Dandi March?",
		"options": ["Motilal Nehru", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Mahatma Gandhi"
	  },
	  {
		"id": "40",
		"question": "Which session of the Indian National Congress is famously known as the 'Lucknow Pact' session?",
		"options": ["Lucknow Session (1916)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Lucknow Session (1916)"
	  },
	  {
		"id": "41",
		"question": "Who was the first Indian woman to be elected as the President of the Indian National Congress?",
		"options": ["Vijaya Lakshmi Pandit", "Sarojini Naidu", "Annie Besant", "Kamala Nehru"],
		"correct": "Sarojini Naidu"
	  },
	  {
		"id": "42",
		"question": "Which session of the Indian National Congress marked the declaration of the 'Poorna Swaraj' (Complete Independence) resolution?",
		"options": ["Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)", "Calcutta Session (1906)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "43",
		"question": "Who presided over the Karachi Session of the Indian National Congress in 1931, where the demand for a 'Constituent Assembly' was made?",
		"options": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhash Chandra Bose"],
		"correct": "Jawaharlal Nehru"
	  },
	  {
		"id": "44",
		"question": "Which session of the Indian National Congress witnessed the historic resolution on 'Swaraj' (Self-Governance) in 1906?",
		"options": ["Calcutta Session (1906)", "Lahore Session (1929)", "Madras Session (1887)", "Bombay Session (1885)"],
		"correct": "Calcutta Session (1906)"
	  },
	  {
		"id": "45",
		"question": "Who was the President of the Indian National Congress during the famous Quit India Movement in 1942?",
		"options": ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Mahatma Gandhi"
	  },
	  {
		"id": "46",
		"question": "During which session of the Indian National Congress was the 'Gandhi-Irwin Pact' signed in 1931?",
		"options": ["Karachi Session (1931)", "Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)"],
		"correct": "Karachi Session (1931)"
	  },
	  {
		"id": "47",
		"question": "Which session of the Indian National Congress is known for the famous 'Dandi March' led by Mahatma Gandhi?",
		"options": ["Calcutta Session (1920)", "Nagpur Session (1920)", "Amritsar Session (1919)", "Karachi Session (1931)"],
		"correct": "Nagpur Session (1920)"
	  },
	  {
		"id": "48",
		"question": "Who was the first Indian to be elected as the President of the Indian National Congress?",
		"options": ["A.O. Hume", "Dadabhai Naoroji", "Surendranath Banerjee", "W.C. Bonnerjee"],
		"correct": "Dadabhai Naoroji"
	  },
	  {
		"id": "49",
		"question": "During which session of the Indian National Congress was the 'Civil Disobedience Movement' launched in 1930?",
		"options": ["Lahore Session (1929)", "Bombay Session (1885)", "Madras Session (1887)", "Calcutta Session (1906)"],
		"correct": "Lahore Session (1929)"
	  },
	  {
		"id": "50",
		"question": "Who was the first President of the Indian National Congress to be elected for three consecutive terms?",
		"options": ["Motilal Nehru", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
		"correct": "Jawaharlal Nehru"
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
