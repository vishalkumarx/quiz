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
		"question": "Which is the highest mountain peak in India?",
		"options": [
		  "Kanchenjunga",
		  "Nanda Devi",
		  "Mount Everest",
		  "Annapurna"
		],
		"correct": "Kanchenjunga"
	  },
	  {
		"id": 2,
		"question": "Which mountain range is known as the 'Abode of Snow'?",
		"options": [
		  "Himalayas",
		  "Western Ghats",
		  "Aravalli Range",
		  "Eastern Ghats"
		],
		"correct": "Himalayas"
	  },
	  {
		"id": 3,
		"question": "Which hill station is known as the 'Queen of the Hills'?",
		"options": [
		  "Darjeeling",
		  "Shimla",
		  "Ooty",
		  "Mussoorie"
		],
		"correct": "Mussoorie"
	  },
	  {
		"id": 4,
		"question": "Which is the second highest peak in India?",
		"options": [
		  "Kangchenjunga",
		  "Nanda Devi",
		  "Mount Everest",
		  "Annapurna"
		],
		"correct": "Nanda Devi"
	  },
	  {
		"id": 5,
		"question": "Which state in India is home to the famous hill station 'Munnar'?",
		"options": [
		  "Kerala",
		  "Tamil Nadu",
		  "Karnataka",
		  "Maharashtra"
		],
		"correct": "Kerala"
	  },
	  {
		"id": 6,
		"question": "Which river flows through the famous hill station 'Manali'?",
		"options": [
		  "Beas",
		  "Ganges",
		  "Yamuna",
		  "Sutlej"
		],
		"correct": "Beas"
	  },
	  {
		"id": 7,
		"question": "Which hill station is known as the 'Scotland of India'?",
		"options": [
		  "Coorg",
		  "Munnar",
		  "Kodaikanal",
		  "Shillong"
		],
		"correct": "Coorg"
	  },
	  {
		"id": 8,
		"question": "Which is the highest peak in the Western Ghats?",
		"options": [
		  "Anamudi",
		  "Mullayanagiri",
		  "Doddabetta",
		  "Nilgiri Hills"
		],
		"correct": "Anamudi"
	  },
	  {
		"id": 9,
		"question": "Which state in India is home to the famous hill station 'Shimla'?",
		"options": [
		  "Himachal Pradesh",
		  "Uttarakhand",
		  "Jammu and Kashmir",
		  "Sikkim"
		],
		"correct": "Himachal Pradesh"
	  },
	  {
		"id": 10,
		"question": "Which is the highest peak in the Aravalli Range?",
		"options": [
		  "Guru Shikhar",
		  "Mount Abu",
		  "Kumbhalgarh",
		  "Jaipur"
		],
		"correct": "Guru Shikhar"
	  },
	  {
		"id": 11,
		"question": "Which hill station is known as the 'Valley of Flowers'?",
		"options": [
		  "Gulmarg",
		  "Valley of Flowers National Park",
		  "Pahalgam",
		  "Yusmarg"
		],
		"correct": "Valley of Flowers National Park"
	  },
	  {
		"id": 12,
		"question": "Which river flows through the famous hill station 'Ooty'?",
		"options": [
		  "Cauvery",
		  "Godavari",
		  "Krishna",
		  "Moyar"
		],
		"correct": "Moyar"
	  },
	  {
		"id": 13,
		"question": "Which is the highest peak in the Eastern Ghats?",
		"options": [
		  "Jindhagada Peak",
		  "Arma Konda",
		  "Maha Padav",
		  "Mahendragiri"
		],
		"correct": "Arma Konda"
	  },
	  {
		"id": 14,
		"question": "Which state in India is home to the famous hill station 'Gangtok'?",
		"options": [
		  "Sikkim",
		  "Arunachal Pradesh",
		  "Meghalaya",
		  "Manipur"
		],
		"correct": "Sikkim"
	  },
	  {
		"id": 15,
		"question": "Which mountain pass connects the Kullu Valley to Lahaul and Spiti Valley in Himachal Pradesh?",
		"options": [
		  "Rohtang Pass",
		  "Nathu La Pass",
		  "Zoji La Pass",
		  "Khardung La Pass"
		],
		"correct": "Rohtang Pass"
	  },
	  {
		"id": 16,
		"question": "Which is the highest peak in the Nilgiri Hills?",
		"options": [
		  "Doddabetta",
		  "Anamudi",
		  "Mullayanagiri",
		  "Kodaikanal"
		],
		"correct": "Doddabetta"
	  },
	  {
		"id": 17,
		"question": "Which hill station is known as the 'Kashmir of South India'?",
		"options": [
		  "Kodaikanal",
		  "Coonoor",
		  "Yercaud",
		  "Munnar"
		],
		"correct": "Kodaikanal"
	  },
	  {
		"id": 18,
		"question": "Which state in India is home to the famous hill station 'Nainital'?",
		"options": [
		  "Uttarakhand",
		  "Himachal Pradesh",
		  "Jammu and Kashmir",
		  "Manipur"
		],
		"correct": "Uttarakhand"
	  },
	  {
		"id": 19,
		"question": "Which river flows through the famous hill station 'Gangtok'?",
		"options": [
		  "Teesta",
		  "Brahmaputra",
		  "Barak",
		  "Ganges"
		],
		"correct": "Teesta"
	  },
	  {
		"id": 20,
		"question": "Which is the highest peak in the Vindhya Range?",
		"options": [
		  "Dhoopgarh",
		  "Amarkantak",
		  "Mahakaleshwar",
		  "Omkareshwar"
		],
		"correct": "Dhoopgarh"
	  },
	  {
		"id": 21,
		"question": "Which hill station is known as the 'Switzerland of India'?",
		"options": [
		  "Gulmarg",
		  "Pahalgam",
		  "Auli",
		  "Shillong"
		],
		"correct": "Auli"
	  },
	  {
		"id": 22,
		"question": "Which is the highest peak in the Satpura Range?",
		"options": [
		  "Dhupgarh",
		  "Mahadeo Hills",
		  "Chandragiri Hills",
		  "Pachmarhi Hills"
		],
		"correct": "Dhupgarh"
	  },
	  {
		"id": 23,
		"question": "Which state in India is home to the famous hill station 'Coonoor'?",
		"options": [
		  "Tamil Nadu",
		  "Kerala",
		  "Karnataka",
		  "Andhra Pradesh"
		],
		"correct": "Tamil Nadu"
	  },
	  {
		"id": 24,
		"question": "Which river flows through the famous hill station 'Kufri'?",
		"options": [
		  "Sutlej",
		  "Chenab",
		  "Yamuna",
		  "Ravi"
		],
		"correct": "Sutlej"
	  },
	  {
		"id": 25,
		"question": "Which is the highest peak in the Javadi Hills?",
		"options": [
		  "Kodikkarai Hills",
		  "Vedaranyam Hills",
		  "Pachamalai Hills",
		  "Palamathi Hills"
		],
		"correct": "Pachamalai Hills"
	  },
	  {
		"id": 26,
		"question": "Which hill station is known as the 'Land of Gods'?",
		"options": [
		  "Manali",
		  "Shimla",
		  "Dalhousie",
		  "Mcleodganj"
		],
		"correct": "Dalhousie"
	  },
	  {
		"id": 27,
		"question": "Which is the highest peak in the Maikal Range?",
		"options": [
		  "Bhander Hills",
		  "Sirpur Hills",
		  "Malajkhand Hills",
		  "Bhedaghat Hills"
		],
		"correct": "Malajkhand Hills"
	  },
	  {
		"id": 28,
		"question": "Which state in India is home to the famous hill station 'Auli'?",
		"options": [
		  "Uttarakhand",
		  "Himachal Pradesh",
		  "Jammu and Kashmir",
		  "Sikkim"
		],
		"correct": "Uttarakhand"
	  },
	  {
		"id": 29,
		"question": "Which river flows through the famous hill station 'Matheran'?",
		"options": [
		  "Ulhas",
		  "Mula",
		  "Pavana",
		  "Tapi"
		],
		"correct": "Ulhas"
	  },
	  {
		"id": 30,
		"question": "Which is the highest peak in the Sahyadri Range?",
		"options": [
		  "Kalsubai",
		  "Torna",
		  "Harishchandragad",
		  "Rajgad"
		],
		"correct": "Kalsubai"
	  },
	  {
		"id": 31,
		"question": "Which hill station is known as the 'Land of Tea Gardens'?",
		"options": [
		  "Darjeeling",
		  "Ooty",
		  "Munnar",
		  "Shillong"
		],
		"correct": "Munnar"
	  },
	  {
		"id": 32,
		"question": "Which is the highest peak in the Shevaroy Hills?",
		"options": [
		  "Yercaud",
		  "Kiliyur Falls",
		  "Pagoda Point",
		  "Bear's Cave"
		],
		"correct": "Yercaud"
	  },
	  {
		"id": 33,
		"question": "Which state in India is home to the famous hill station 'Gulmarg'?",
		"options": [
		  "Jammu and Kashmir",
		  "Himachal Pradesh",
		  "Uttarakhand",
		  "Arunachal Pradesh"
		],
		"correct": "Jammu and Kashmir"
	  },
	  {
		"id": 34,
		"question": "Which river flows through the famous hill station 'Shillong'?",
		"options": [
		  "Umngot",
		  "Gandak",
		  "Dihing",
		  "Umiam"
		],
		"correct": "Umiam"
	  },
	  {
		"id": 35,
		"question": "Which is the highest peak in the Rajmahal Hills?",
		"options": [
		  "Panchakot",
		  "Parasnath",
		  "Kakolat",
		  "Hazaribagh"
		],
		"correct": "Parasnath"
	  },
	  {
		"id": 36,
		"question": "Which hill station is known as the 'Queen of the Satpuras'?",
		"options": [
		  "Pachmarhi",
		  "Matheran",
		  "Lonavala",
		  "Mahabaleshwar"
		],
		"correct": "Pachmarhi"
	  },
	  {
		"id": 37,
		"question": "Which is the highest peak in the Patkai Range?",
		"options": [
		  "Kopili",
		  "Dhola-Sadiya Bridge",
		  "Gambhir",
		  "Mangaldai"
		],
		"correct": "Gambhir"
	  },
	  {
		"id": 38,
		"question": "Which state in India is home to the famous hill station 'Kodaikanal'?",
		"options": [
		  "Tamil Nadu",
		  "Kerala",
		  "Karnataka",
		  "Andhra Pradesh"
		],
		"correct": "Tamil Nadu"
	  },
	  {
		"id": 39,
		"question": "Which river flows through the famous hill station 'Coorg'?",
		"options": [
		  "Cauvery",
		  "Krishna",
		  "Godavari",
		  "Tungabhadra"
		],
		"correct": "Cauvery"
	  },
	  {
		"id": 40,
		"question": "Which is the highest peak in the Garo Hills?",
		"options": [
		  "Nokrek Peak",
		  "Cherrapunji",
		  "Balpakram",
		  "Tura Peak"
		],
		"correct": "Nokrek Peak"
	  },
	  {
		"id": 41,
		"question": "Which hill station is known as the 'Land of Oranges'?",
		"options": [
		  "Nainital",
		  "Darjeeling",
		  "Lansdowne",
		  "Kasauli"
		],
		"correct": "Darjeeling"
	  },
	  {
		"id": 42,
		"question": "Which is the highest peak in the Eastern Ghats?",
		"options": [
		  "Arma Konda",
		  "Simlipal",
		  "Anaimudi",
		  "Gandhamardhan"
		],
		"correct": "Arma Konda"
	  },
	  {
		"id": 43,
		"question": "Which state in India is home to the famous hill station 'Yercaud'?",
		"options": [
		  "Tamil Nadu",
		  "Kerala",
		  "Karnataka",
		  "Andhra Pradesh"
		],
		"correct": "Tamil Nadu"
	  },
	  {
		"id": 44,
		"question": "Which river flows through the famous hill station 'Mcleodganj'?",
		"options": [
		  "Beas",
		  "Ganges",
		  "Yamuna",
		  "Sutlej"
		],
		"correct": "Beas"
	  },
	  {
		"id": 45,
		"question": "Which is the highest peak in the Satpura Range?",
		"options": [
		  "Dhupgarh",
		  "Mahadeo Hills",
		  "Chandragiri Hills",
		  "Pachmarhi Hills"
		],
		"correct": "Dhupgarh"
	  },
	  {
		"id": 46,
		"question": "Which hill station is known as the 'Land of Coffee Plantations'?",
		"options": [
		  "Coorg",
		  "Munnar",
		  "Kodaikanal",
		  "Wayanad"
		],
		"correct": "Coorg"
	  },
	  {
		"id": 47,
		"question": "Which is the highest peak in the Aravalli Range?",
		"options": [
		  "Guru Shikhar",
		  "Mount Abu",
		  "Kumbhalgarh",
		  "Jaipur"
		],
		"correct": "Guru Shikhar"
	  },
	  {
		"id": 48,
		"question": "Which state in India is home to the famous hill station 'Mahabaleshwar'?",
		"options": [
		  "Maharashtra",
		  "Goa",
		  "Gujarat",
		  "Rajasthan"
		],
		"correct": "Maharashtra"
	  },
	  {
		"id": 49,
		"question": "Which river flows through the famous hill station 'Ooty'?",
		"options": [
		  "Cauvery",
		  "Godavari",
		  "Krishna",
		  "Moyar"
		],
		"correct": "Moyar"
	  },
	  {
		"id": 50,
		"question": "Which is the highest peak in the Western Ghats?",
		"options": [
		  "Anamudi",
		  "Mullayanagiri",
		  "Doddabetta",
		  "Nilgiri Hills"
		],
		"correct": "Anamudi"
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