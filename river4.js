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

const quizArray=[
	  {
		"id": "1",
		"question": "Which is the longest river in India?",
		"options": ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
		"correct": "Ganges"
	  },
	  {
		"id": "2",
		"question": "Which is the largest river basin in India?",
		"options": ["Ganges Basin", "Brahmaputra Basin", "Godavari Basin", "Krishna Basin"],
		"correct": "Ganges Basin"
	  },
	  {
		"id": "3",
		"question": "Which is the deepest river in India?",
		"options": ["Brahmaputra", "Indus", "Godavari", "Yamuna"],
		"correct": "Indus"
	  },
	  {
		"id": "4",
		"question": "Which is the cleanest river in India?",
		"options": ["Ganges", "Yamuna", "Narmada", "Krishna"],
		"correct": "Narmada"
	  },
	  {
		"id": "5",
		"question": "Which is the smallest river in India?",
		"options": ["Arvari", "Pamba", "Musi", "Tungabhadra"],
		"correct": "Arvari"
	  },
	  {
		"id": "6",
		"question": "Which is the longest tributary of the Ganges?",
		"options": ["Yamuna", "Son", "Ghaghara", "Kosi"],
		"correct": "Yamuna"
	  },
	  {
		"id": "7",
		"question": "Which is the largest river island in India?",
		"options": ["Majuli", "Sundarbans", "Barren Island", "Dibru-Saikhowa"],
		"correct": "Majuli"
	  },
	  {
		"id": "8",
		"question": "Which is the most sacred river in Hinduism?",
		"options": ["Ganges", "Yamuna", "Saraswati", "Narmada"],
		"correct": "Ganges"
	  },
	  {
		"id": "9",
		"question": "Which is the largest river in South India?",
		"options": ["Godavari", "Kaveri", "Krishna", "Periyar"],
		"correct": "Godavari"
	  },
	  {
		"id": "10",
		"question": "Which is the fastest-flowing river in India?",
		"options": ["Bhagirathi", "Alaknanda", "Satluj", "Teesta"],
		"correct": "Teesta"
	  },
	  {
		"id": "11",
		"question": "Which is the largest tributary of the Brahmaputra?",
		"options": ["Subansiri", "Dibang", "Kameng", "Lohit"],
		"correct": "Subansiri"
	  },
	  {
		"id": "12",
		"question": "Which is the largest river in Rajasthan?",
		"options": ["Chambal", "Luni", "Sabarmati", "Yamuna"],
		"correct": "Chambal"
	  },
	  {
		"id": "13",
		"question": "Which is the most powerful waterfall in India?",
		"options": ["Dudhsagar Falls", "Jog Falls", "Shivasamudram Falls", "Soochipara Falls"],
		"correct":
  
   "Jog Falls"
	  },
	  {
		"id": "14",
		"question": "Which is the longest river in Kerala?",
		"options": ["Periyar", "Pamba", "Bharathapuzha", "Chaliyar"],
		"correct": "Periyar"
	  },
	  {
		"id": "15",
		"question": "Which is the largest river in Maharashtra?",
		"options": ["Godavari", "Krishna", "Tapi", "Bhima"],
		"correct": "Godavari"
	  },
	  {
		"id": "16",
		"question": "Which is the highest waterfall in India?",
		"options": ["Kunchikal Falls", "Nohkalikai Falls", "Dudhsagar Falls", "Jog Falls"],
		"correct": "Nohkalikai Falls"
	  },
	  {
		"id": "17",
		"question": "Which is the longest river in Madhya Pradesh?",
		"options": ["Narmada", "Son", "Chambal", "Betwa"],
		"correct": "Narmada"
	  },
	  {
		"id": "18",
		"question": "Which is the largest river in Jammu and Kashmir?",
		"options": ["Chenab", "Jhelum", "Indus", "Tawi"],
		"correct": "Indus"
	  },
	  {
		"id": "19",
		"question": "Which is the largest river in Gujarat?",
		"options": ["Tapti", "Sabarmati", "Mahi", "Narmada"],
		"correct": "Narmada"
	  },
	  {
		"id": "20",
		"question": "Which is the largest river in Himachal Pradesh?",
		"options": ["Beas", "Chenab", "Sutlej", "Ravi"],
		"correct": "Chenab"
	  },
	  {
		"id": "21",
		"question": "Which is the longest river in Odisha?",
		"options": ["Mahanadi", "Brahmani", "Subarnarekha", "Rushikulya"],
		"correct": "Mahanadi"
	  },
	  {
		"id": "22",
		"question": "Which is the largest river in West Bengal?",
		"options": ["Hooghly", "Subarnarekha", "Ganga", "Damodar"],
		"correct": "Hooghly"
	  },
	  {
		"id": "23",
		"question": "Which is the largest river in Punjab?",
		"options": ["Beas", "Sutlej", "Ravi", "Chenab"],
		"correct": "Beas"
	  },
	  {
		"id": "24",
		"question": "Which is the longest river in Assam?",
		"options": ["Brahmaputra", "Dihing", "Kopili", "Jia Bharali"],
		"correct": "Brahmaputra"
	  },
	  {
		"id": "25",
		"question": "Which is the largest river in Karnataka?",
		"options": ["Krishna", "Kaveri", "Sharavathi", "Tungabhadra"],
		"correct": "Krishna"
	  },
	  {
		"id": "26",
		"question": "Which is the largest river in Andhra Pradesh?",
		"options": ["Krishna", "Godavari", "Tungabhadra", "Penna"],
		"correct": "Godavari"
	  },
	  {
		"id": "27",
		"question": "Which is the largest river in Tamil Nadu?",
		"options": ["Cauvery", "Vaigai", "Palar", "Thamirabarani"],
		"correct": "Cauvery"
	  },
	  {
		"id": "28",
		"question": "Which is the longest river in Meghalaya?",
		"options": ["Kynshi", "Umngot", "Dawki", "Ganol"],
		"correct": "Kynshi"
	  },
	  {
		"id": "29",
		"question": "Which is the largest river in Arunachal Pradesh?",
		"options": ["Brahmaputra", "Subansiri", "Kameng", "Siang"],
		"correct": "Brahmaputra"
	  },
	  {
		"id": "30",
		"question": "Which is the largest river in Uttar Pradesh?",
		"options": ["Ganges", "Yamuna", "Ghaghara", "Saryu"],
		"correct": "Ganges"
	  },
	  {
		"id": "31",
		"question": "Which is the longest river in Bihar?",
		"options": ["Ganges", "Kosi", "Son", "Gandak"],
		"correct": "Ganges"
	  },
	  {
		"id": "32",
		"question": "Which is the largest river in Rajasthan?",
		"options": ["Chambal", "Luni", "Sabarmati", "Yamuna"],
		"correct": "Chambal"
	  },
	  {
		"id": "33",
		"question": "Which is the longest river in Haryana?",
		"options": ["Ghaggar", "Yamuna", "Markanda", "Saraswati"],
		"correct": "Ghaggar"
	  },
	  {
		"id": "34",
		"question": "Which is the largest river in Uttarakhand?",
		"options": ["Ganga", "Yamuna", "Alaknanda", "Mandakini"],
		"correct": "Ganga"
	  },
	  {
		"id": "35",
		"question": "Which is the largest river in Mizoram?",
		"options": ["Tlawng", "Chhimtuipui", "Tuivawl", "Kolodyne"],
		"correct": "Chhimtuipui"
	  },
	  {
		"id": "36",
		"question": "Which is the largest river in Manipur?",
		"options": ["Barak", "Irang", "Thoubal", "Yu"],
		"correct": "Barak"
	  },
	  {
		"id": "37",
		"question": "Which is the longest river in Nagaland?",
		"options": ["Doyang", "Dikhu", "Tizu", "Chubi"],
		"correct": "Dikhu"
	  },
	  {
		"id": "38",
		"question": "Which is the largest river in Tripura?",
		"options": ["Gomti", "Manu", "Haora", "Juri"],
		"correct": "Gomti"
	  },
	  {
		"id": "39",
		"question": "Which is the longest river in Punjab?",
		"options": ["Beas", "Sutlej", "Ravi", "Chenab"],
		"correct": "Beas"
	  },
	  {
		"id": "40",
		"question": "Which is the largest river in Odisha?",
		"options": ["Mahanadi", "Brahmani", "Subarnarekha", "Rushikulya"],
		"correct": "Mahanadi"
	  },
	  {
		"id": "41",
		"question": "Which is the longest river in West Bengal?",
		"options": ["Hooghly", "Subarnarekha", "Ganga", "Damodar"],
		"correct": "Hooghly"
	  },
	  {
		"id": "42",
		"question": "Which is the largest river in Telangana?",
		"options": ["Godavari", "Krishna", "Musi", "Manair"],
		"correct": "Godavari"
	  },
	  {
		"id": "43",
		"question": "Which is the longest river in Gujarat?",
		"options": ["Tapti", "Sabarmati", "Mahi", "Narmada"],
		"correct": "Narmada"
	  },
	  {
		"id": "44",
		"question": "Which is the largest river in Andaman and Nicobar Islands?",
		"options": ["Kalpong", "Galathea", "Campbell", "Diglipur"],
		"correct": "Kalpong"
	  },
	  {
		"id": "45",
		"question": "Which is the largest river in Lakshadweep?",
		"options": ["Amini", "Chaliyar", "Kavvayi", "Kallada"],
		"correct": "Amini"
	  },
	  {
		"id": "46",
		"question": "Which is the longest river in Jharkhand?",
		"options": ["Subarnarekha", "Damodar", "Barakar", "Koel"],
		"correct": "Subarnarekha"
	  },
	  {
		"id": "47",
		"question": "Which is the largest river in Chhattisgarh?",
		"options": ["Mahanadi", "Indravati", "Hasdeo", "Sondur"],
		"correct": "Indravati"
	  },
	  {
		"id": "48",
		"question": "Which is the longest river in Dadra and Nagar Haveli?",
		"options": ["Damanganga", "Sakartod", "Parnoi", "Kahal"],
		"correct": "Damanganga"
	  },
	  {
		"id": "49",
		"question": "Which is the largest river in Puducherry?",
		"options": ["Ponnaiyar", "Pennar", "Arasalar", "Kallar"],
		"correct": "Ponnaiyar"
	  },
	  {
		"id": "50",
		"question": "Which is the longest river in Sikkim?",
		"options": ["Teesta", "Rangit", "Rangpo", "Kincham"],
		"correct": "Teesta"
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