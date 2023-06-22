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
			"id": 1,
			"question": "What was the year of the Revolt of 1857?",
			"options": ["1847", "1857", "1867", "1877"],
			"correct": "1857"
		  },
		  {
			"id": 2,
			"question": "Who was the last Mughal emperor during the Revolt of 1857?",
			"options": ["Bahadur Shah Zafar", "Akbar II", "Shah Alam II", "Aurangzeb"],
			"correct": "Bahadur Shah Zafar"
		  },
		  {
			"id": 3,
			"question": "Which city played a significant role in the beginning of the Revolt of 1857?",
			"options": ["Delhi", "Lucknow", "Kanpur", "Meerut"],
			"correct": "Meerut"
		  },
		  {
			"id": 4,
			"question": "Who was the British Governor-General of India during the Revolt of 1857?",
			"options": ["Lord Cornwallis", "Lord Canning", "Lord Dalhousie", "Lord Curzon"],
			"correct": "Lord Canning"
		  },
		  {
			"id": 5,
			"question": "What was the initial spark that led to the outbreak of the Revolt of 1857?",
			"options": ["The introduction of new Enfield rifles", "The annexation of Awadh", "The tax on salt", "The mistreatment of Indian soldiers"],
			"correct": "The introduction of new Enfield rifles"
		  },
		  {
			"id": 6,
			"question": "Who was the Indian soldier considered as one of the main leaders of the Revolt of 1857?",
			"options": ["Rani Lakshmibai", "Mangal Pandey", "Tantia Tope", "Bahadur Shah Zafar"],
			"correct": "Mangal Pandey"
		  },
		  {
			"id": 7,
			"question": "Which regiment stationed at Meerut was involved in the Revolt of 1857?",
			"options": ["Bengal Army", "Madras Army", "Bombay Army", "Punjab Army"],
			"correct": "Bengal Army"
		  },
		 
		  {
				"id": 8,
				"question": "Who was the British general known for his brutal suppression of the Revolt of 1857 in Kanpur?",
				"options": ["Lord Canning", "Lord Dalhousie", "General Henry Havelock", "General James Outram"],
				"correct": "General Henry Havelock"
			  },
			  {
				"id": 9,
				"question": "Which city became the center of the Revolt of 1857 after Delhi?",
				"options": ["Kanpur", "Lucknow", "Jhansi", "Allahabad"],
				"correct": "Kanpur"
			  },
			 
			  {
				"id": 11,
				"question": "Who was the Queen of Jhansi who played a prominent role in the Revolt of 1857?",
				"options": ["Rani Padmini", "Rani Durgavati", "Rani Jodha Bai", "Rani Lakshmibai"],
				"correct": "Rani Lakshmibai"
			  },
			  {
				"id": 12,
				"question": "Which leader from Bihar led a significant peasant uprising during the Revolt of 1857?",
				"options": ["Kunwar Singh", "Begum Hazrat Mahal", "Tantia Tope", "Nana Sahib"],
				"correct": "Kunwar Singh"
			  },
			  
			  {
				"id": 14,
				"question": "Which leader from Awadh led the revolt against the British in Lucknow?",
				"options": ["Kunwar Singh", "Begum Hazrat Mahal", "Tantia Tope", "Nana Sahib"],
				"correct": "Begum Hazrat Mahal"
			  },
			  {
				"id": 15,
				"question": "What was the fate of Bahadur Shah Zafar, the last Mughal emperor, after the Revolt of 1857?",
				"options": ["He was imprisoned in Rangoon (now Yangon)", "He was executed by the British", "He escaped to Nepal", "He lived the remainder of his life in hiding"],
				"correct": "He was imprisoned in Rangoon (now Yangon)"
			  },
			  {
				"id": 16,
				"question": "Which region of India did the British regain control of first after the Revolt of 1857?",
				"options": ["Punjab", "Bengal", "Awadh", "Delhi"],
				"correct": "Punjab"
			  },
			 
			  {
				"id": 18,
				"question": "Which city became a major center of resistance against the British after the Revolt of 1857?",
				"options": ["Agra", "Allahabad", "Varanasi", "Patna"],
				"correct": "Allahabad"
			  },
			 
			  
			
			  {
				"id": 25,
				"question": "Which region of India witnessed widespread peasant uprisings during the Revolt of 1857?",
				"options": ["Bihar", "Punjab", "Rajasthan", "Maharashtra"],
				"correct": "Bihar"
			  },
			  {
				"id": 26,
				"question": "Who was the British officer in charge of the defense of the Residency in Lucknow during the Revolt of 1857?",
				"options": ["General James Outram", "General Henry Havelock", "Sir Henry Lawrence", "Sir Colin Campbell"],
				"correct": "Sir Henry Lawrence"
			  },
			  
			 
			 
			  {
				"id": 30,
				"question": "Who was the British officer in charge of the siege and capture of Delhi during the Revolt of 1857?",
				"options": ["General James Outram", "General Henry Havelock", "Major General Archdale Wilson", "Major General James Neill"],
				"correct": "Major General Archdale Wilson"
			  },
			  {
				"id": 31,
				"question": "Which Indian ruler from Rajasthan provided support to the rebels during the Revolt of 1857?",
				"options": ["Rana Sanga", "Maharana Pratap", "Rana Pratap Singh", "Rana Jodha Singh"],
				"correct": "Maharana Pratap"
			  },
			 
			  
			 
			  
			
			  {
				"id": 37,
				"question": "Who was the British officer in charge of the defense of the Residency in Lucknow during the Revolt of 1857?",
				"options": ["General James Outram", "General Henry Havelock", "Sir Henry Lawrence", "Sir Colin Campbell"],
				"correct": "Sir Henry Lawrence"
			  },
			  
			  
			  {
				"id": 40,
				"question": "Which city became a major center of resistance against the British after the Revolt of 1857?",
				"options": ["Agra", "Allahabad", "Varanasi", "Patna"],
				"correct": "Allahabad"
			  },
			  {
				"id": 41,
				"question": "Who was the British officer in charge of the siege and capture of Delhi during the Revolt of 1857?",
				"options": ["General James Outram", "General Henry Havelock", "Major General Archdale Wilson", "Major General James Neill"],
				"correct": "Major General Archdale Wilson"
			  },
			  {
				"id": 42,
				"question": "Which Indian ruler from Rajasthan provided support to the rebels during the Revolt of 1857?",
				"options": ["Rana Sanga", "Maharana Pratap", "Rana Pratap Singh", "Rana Jodha Singh"],
				"correct": "Maharana Pratap"
			  },
			 
			
			 
			  {
				"id": 47,
				"question": "Which region of India witnessed widespread peasant uprisings during the Revolt of 1857?",
				"options": ["Bihar", "Punjab", "Rajasthan", "Maharashtra"],
				"correct": "Bihar"
			  },
			  {
				"id": 48,
				"question": "Who was the British officer in charge of the defense of the Residency in Lucknow during the Revolt of 1857?",
				"options": ["General James Outram", "General Henry Havelock", "Sir Henry Lawrence", "Sir Colin Campbell"],
				"correct": "Sir Henry Lawrence"
			  },
			  {
				"id": 49,
				"question": "Which leader from Madhya Pradesh played a crucial role in the revolt against the British?",
				"options": ["Kunwar Singh", "Begum Hazrat Mahal", "Tantia Tope", "Nana Sahib"],
				"correct": "Tantia Tope"
			  },
			  {
				"id": 50,
				"question": "Who was the British officer known for his brutal suppression of the revolt in Kanpur?",
				"options": ["Colin Champbell", "Lord Dalhousie", "General Henry Havelock", "General James Outram"],
				"correct": "Colin Champbell"
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
