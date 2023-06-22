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
		"question": "In which year did the Revolt of 1857 take place in India?",
		"options": ["1855", "1856", "1857", "1858"],
		"correct": "1857"
	  },
	  {
		"id": "2",
		"question": "Which city was the center of the Revolt of 1857?",
		"options": ["Delhi", "Lucknow", "Kanpur", "Jhansi"],
		"correct": "Delhi"
	  },
	  {
		"id": "3",
		"question": "Who was the last Mughal emperor of India during the time of the Revolt of 1857?",
		"options": ["Bahadur Shah Zafar", "Shah Jahan", "Aurangzeb", "Akbar"],
		"correct": "Bahadur Shah Zafar"
	  },
	  {
		"id": "4",
		"question": "Which regiment of the British East India Company sparked the rebellion in Meerut?",
		"options": ["Bengal Army", "Punjab Army", "Madras Army", "Bombay Army"],
		"correct": "Bengal Army"
	  },
	  {
		"id": "5",
		"question": "Who was the leader of the rebel forces in the city of Kanpur during the Revolt of 1857?",
		"options": ["Rani Lakshmibai", "Nana Sahib", "Tantia Tope", "Bakht Khan"],
		"correct": "Nana Sahib"
	  },
	  {
		"id": "6",
		"question": "Which prominent female warrior fought against the British in the city of Jhansi during the Revolt of 1857?",
		"options": ["Rani Padmini", "Rani Lakshmibai", "Rani Durgavati", "Rani Rudrama Devi"],
		"correct": "Rani Lakshmibai"
	  },
	  {
		"id": "7",
		"question": "What was the main cause of the Revolt of 1857?",
		"options": ["Economic exploitation by the British", "Religious conflicts", "Political oppression", "Cultural suppression"],
		"correct": "Political oppression"
	  },
	  {
		"id": "8",
		"question": "Who was the British Governor-General of India during the Revolt of 1857?",
		"options": ["Lord Dalhousie", "Lord Canning", "Lord Cornwallis", "Lord Curzon"],
		"correct": "Lord Canning"
	  },
	  {
		"id": "9",
		"question": "Which city did the British recapture from the rebel forces after a long siege during the Revolt of 1857?",
		"options": ["Delhi", "Lucknow", "Kanpur", "Jhansi"],
		"correct": "Lucknow"
	  },
	  {
		"id": "10",
		"question": "Who among the following was the commander-in-chief of the rebel forces in Delhi during the Revolt of 1857?",
		"options": ["Bakht Khan", "Tantia Tope", "Nana Sahib", "Bahadur Shah Zafar"],
		"correct": "Bahadur Shah Zafar"
	  },
	  {
		"id": "11",
		"question": "Which event is considered as the immediate cause of the Revolt of 1857?",
		"options": ["Introduction of the Enfield rifle", "Announcement of the Doctrine of Lapse", "Abolition of the Bengal Army", "Imposition of high taxes"],
		"correct": "Introduction of the Enfield rifle"
	  },
	  {
		"id": "12",
		"question": "Who was the British officer in charge of the Meerut garrison, where the rebellion started?",
		"options": ["Major General Henry Havelock", "Brigadier General John Nicholson", "Lieutenant Colonel James Neill", "Captain William Hodson"],
		"correct": "Brigadier General John Nicholson"
	  },
	  {
		"id": "13",
		"question": "Which city became a symbol of the revolt against British rule in North India?",
		"options": ["Delhi", "Lucknow", "Kanpur", "Jhansi"],
		"correct": "Delhi"
	  },
	  {
		"id": "14",
		"question": "Who was the leader of the rebel forces in Lucknow during the Revolt of 1857?",
		"options": ["Rani Lakshmibai", "Nana Sahib", "Tantia Tope", "Begum Hazrat Mahal"],
		"correct": "Begum Hazrat Mahal"
	  },
	  {
		"id": "15",
		"question": "What was the fate of Bahadur Shah Zafar, the last Mughal emperor, after the failure of the revolt?",
		"options": ["Exile to Burma", "Life imprisonment", "Death by hanging", "Death in battle"],
		"correct": "Exile to Burma"
	  },
	  {
		"id": "16",
		"question": "Who was the British officer responsible for the brutal massacre of Indian soldiers and civilians in Jallianwala Bagh in 1919?",
		"options": ["General Reginald Dyer", "Colonel James Neill", "Michael O' Dwyer", "Brigadier General John Nicholson"],
		"correct": "General Reginald Dyer"
	  },
	  {
		"id": "17",
		"question": "What was the role of Mangal Pandey in the Revolt of 1857?",
		"options": ["He led the revolt in Meerut", "He started the revolt in Jhansi", "He organized the revolt in Lucknow", "He led the revolt in Delhi"],
		"correct": "He started the revolt in Meerut"
	  },
	  {
		"id": "18",
		"question": "Which British officer played a key role in suppressing the revolt in the city of Kanpur?",
		"options": ["Captain James Cook", "Major General Henry Havelock", "Major General Charles Napier", "Colonel James Neill"],
		"correct": "Colonel James Neill"
	  },
	  {
		"id": "19",
		"question": "Who among the following was a prominent leader of the revolt in Bihar during the Revolt of 1857?",
		"options": ["Kunwar Singh", "Bakht Khan", "Tantia Tope", "Rani Lakshmibai"],
		"correct": "Kunwar Singh"
	  },
	  {
		"id": "20",
		"question": "What was the impact of the Revolt of 1857 on the British East India Company?",
		"options": ["It led to the dissolution of the company", "It strengthened the company's control over India", "It led to the end of British rule in India", "It had no significant impact on the company"],
		"correct": "It led to the dissolution of the company"
	  },
	  {
		"id": "21",
		"question": "Which city did the British recapture from the rebel forces after a long siege during the Revolt of 1857?",
		"options": ["Delhi", "Lucknow", "Kanpur", "Jhansi"],
		"correct": "Lucknow"
	  },
	  {
		"id": "22",
		"question": "Who among the following was the commander-in-chief of the rebel forces in Delhi during the Revolt of 1857?",
		"options": ["Bakht Khan", "Tantia Tope", "Nana Sahib", "Bahadur Shah Zafar"],
		"correct": "Bahadur Shah Zafar"
	  },
	  {
		"id": "23",
		"question": "Which event is considered as the immediate cause of the Revolt of 1857?",
		"options": ["Introduction of the Enfield rifle", "Announcement of the Doctrine of Lapse", "Abolition of the Bengal Army", "Imposition of high taxes"],
		"correct": "Introduction of the Enfield rifle"
	  },
	  {
		"id": "24",
		"question": "Who was the British officer in charge of the Meerut garrison, where the rebellion started?",
		"options": ["Major General Henry Havelock", "Brigadier General John Nicholson", "Lieutenant Colonel James Neill", "Captain William Hodson"],
		"correct": "Brigadier General John Nicholson"
	  },
	  {
		"id": "25",
		"question": "Which city became a symbol of the revolt against British rule in North India?",
		"options": ["Delhi", "Lucknow", "Kanpur", "Jhansi"],
		"correct": "Delhi"
	  },
	  {
		"id": "26",
		"question": "Who was the leader of the rebel forces in Lucknow during the Revolt of 1857?",
		"options": ["Rani Lakshmibai", "Nana Sahib", "Tantia Tope", "Begum Hazrat Mahal"],
		"correct": "Begum Hazrat Mahal"
	  },
	  {
		"id": "27",
		"question": "What was the fate of Bahadur Shah Zafar, the last Mughal emperor, after the failure of the revolt?",
		"options": ["Exile to Burma", "Life imprisonment", "Death by hanging", "Death in battle"],
		"correct": "Exile to Burma"
	  },
	  {
		"id": "28",
		"question": "Who was the British officer responsible for the brutal massacre of Indian soldiers and civilians in Jallianwala Bagh in 1919?",
		"options": ["General Reginald Dyer", "Colonel James Neill", "General Dyer", "Brigadier General John Nicholson"],
		"correct": "General Reginald Dyer"
	  },
	  {
		"id": "29",
		"question": "What was the role of Mangal Pandey in the Revolt of 1857?",
		"options": ["He led the revolt in Meerut", "He started the revolt in Jhansi", "He organized the revolt in Lucknow", "He led the revolt in Delhi"],
		"correct": "He started the revolt in Meerut"
	  },
	  {
		"id": "30",
		"question": "Which British officer played a key role in suppressing the revolt in the city of Kanpur?",
		"options": ["Captain James Cook", "Major General Henry Havelock", "Major General Charles Napier", "Colonel James Neill"],
		"correct": "Colonel James Neill"
	  },
	  {
		"id": "31",
		"question": "Who among the following was a prominent leader of the revolt in Bihar during the Revolt of 1857?",
		"options": ["Kunwar Singh", "Bakht Khan", "Tantia Tope", "Rani Lakshmibai"],
		"correct": "Kunwar Singh"
	  },
	  {
		"id": "32",
		"question": "What was the impact of the Revolt of 1857 on the British East India Company?",
		"options": ["It led to the dissolution of the company", "It strengthened the company's control over India", "It led to the end of British rule in India", "It had no significant impact on the company"],
		"correct": "It led to the dissolution of the company"
	  },
	  {
		"id": "33",
		"question": "Who was the British officer in charge of the Meerut garrison, where the rebellion started?",
		"options": ["Major General Henry Havelock", "Brigadier General John Nicholson", "Lieutenant Colonel James Neill", "Captain William Hodson"],
		"correct": "Brigadier General John Nicholson"
	  },
	  {
		"id": "34",
		"question": "Which city became a symbol of the revolt against British rule in North India?",
		"options": ["Delhi", "Lucknow", "Kanpur", "Jhansi"],
		"correct": "Delhi"
	  },
	  {
		"id": "35",
		"question": "Who was the leader of the rebel forces in Lucknow during the Revolt of 1857?",
		"options": ["Rani Lakshmibai", "Nana Sahib", "Tantia Tope", "Begum Hazrat Mahal"],
		"correct": "Begum Hazrat Mahal"
	  },
	  {
		"id": "36",
		"question": "What was the fate of Bahadur Shah Zafar, the last Mughal emperor, after the failure of the revolt?",
		"options": ["Exile to Burma", "Life imprisonment", "Death by hanging", "Death in battle"],
		"correct": "Exile to Burma"
	  },
	  {
		"id": "37",
		"question": "Who was the British officer responsible for the brutal massacre of Indian soldiers and civilians in Jallianwala Bagh in 1919?",
		"options": ["General Reginald Dyer", "Colonel James Neill", "General Dyer", "Brigadier General John Nicholson"],
		"correct": "General Reginald Dyer"
	  },
	  {
		"id": "38",
		"question": "What was the role of Mangal Pandey in the Revolt of 1857?",
		"options": ["He led the revolt in Meerut", "He started the revolt in Jhansi", "He organized the revolt in Lucknow", "He led the revolt in Delhi"],
		"correct": "He led the revolt in Meerut"
	  },
	  {
		"id": "39",
		"question": "Which British officer played a key role in suppressing the revolt in the city of Kanpur?",
		"options": ["Captain James Cook", "Major General Henry Havelock", "Major General Charles Napier", "Colonel James Neill"],
		"correct": "Colonel James Neill"
	  },
	  {
		"id": "40",
		"question": "Who among the following was a prominent leader of the revolt in Bihar during the Revolt of 1857?",
		"options": ["Kunwar Singh", "Bakht Khan", "Tantia Tope", "Rani Lakshmibai"],
		"correct": "Kunwar Singh"
	  },
	  {
		"id": "41",
		"question": "What was the impact of the Revolt of 1857 on the British East India Company?",
		"options": ["It led to the dissolution of the company", "It strengthened the company's control over India", "It led to the end of British rule in India", "It had no significant impact on the company"],
		"correct": "It led to the dissolution of the company"
	  },
	  {
		"id": "42",
		"question": "Who was the British officer in charge of the Meerut garrison, where the rebellion started?",
		"options": ["Major General Henry Havelock", "Brigadier General John Nicholson", "Lieutenant Colonel James Neill", "Captain William Hodson"],
		"correct": "Brigadier General John Nicholson"
	  },
	  {
		"id": "43",
		"question": "Which city became a symbol of the revolt against British rule in North India?",
		"options": ["Delhi", "Lucknow", "Kanpur", "Jhansi"],
		"correct": "Delhi"
	  },
	  {
		"id": "44",
		"question": "Who was the leader of the rebel forces in Lucknow during the Revolt of 1857?",
		"options": ["Rani Lakshmibai", "Nana Sahib", "Tantia Tope", "Begum Hazrat Mahal"],
		"correct": "Begum Hazrat Mahal"
	  },
	  {
		"id": "45",
		"question": "What was the fate of Bahadur Shah Zafar, the last Mughal emperor, after the failure of the revolt?",
		"options": ["Exile to Burma", "Life imprisonment", "Death by hanging", "Death in battle"],
		"correct": "Exile to Burma"
	  },
	  {
		"id": "46",
		"question": "Who was the British officer responsible for the brutal massacre of Indian soldiers and civilians in Jallianwala Bagh in 1919?",
		"options": ["General Reginald Dyer", "Colonel James Neill", "General Dyer", "Brigadier General John Nicholson"],
		"correct": "General Reginald Dyer"
	  },
	  {
		"id": "47",
		"question": "What was the role of Mangal Pandey in the Revolt of 1857?",
		"options": ["He led the revolt in Meerut", "He started the revolt in Jhansi", "He organized the revolt in Lucknow", "He led the revolt in Delhi"],
		"correct": "He started the revolt in Meerut"
	  },
	  {
		"id": "48",
		"question": "Which British officer played a key role in suppressing the revolt in the city of Kanpur?",
		"options": ["Captain James Cook", "Major General Henry Havelock", "Major General Charles Napier", "Colonel James Neill"],
		"correct": "Colonel James Neill"
	  },
	  {
		"id": "49",
		"question": "Who among the following was a prominent leader of the revolt in Bihar during the Revolt of 1857?",
		"options": ["Kunwar Singh", "Bakht Khan", "Tantia Tope", "Rani Lakshmibai"],
		"correct": "Kunwar Singh"
	  },
	  {
		"id": "50",
		"question": "What was the impact of the Revolt of 1857 on the British East India Company?",
		"options": ["It led to the dissolution of the company", "It strengthened the company's control over India", "It led to the end of British rule in India", "It had no significant impact on the company"],
		"correct": "It led to the dissolution of the company"
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
