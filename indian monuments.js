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

const quizArray = [ {
	
		"id": 1,
		"question": "Which monument is known as the 'Symbol of Love'?",
		"options": [
		  "Taj Mahal",
		  "Hampi Monuments",
		  "Red Fort",
		  "Qutub Minar"
		],
		"correct": "Taj Mahal"
	  },
	  {
		"id": 2,
		"question": "Which monument is located in New Delhi and serves as the Prime Minister's office?",
		"options": [
		  "India Gate",
		  "Rashtrapati Bhavan",
		  "Lotus Temple",
		  "Parliament House"
		],
		"correct": "Parliament House"
	  },
	  {
		"id": 3,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its rock-cut architecture?",
		"options": [
		  "Konark Sun Temple",
		  "Khajuraho Temples",
		  "Ajanta Caves",
		  "Elephanta Caves"
		],
		"correct": "Ajanta Caves"
	  },
	  {
		"id": 4,
		"question": "Which monument is a famous mausoleum located in Hyderabad?",
		"options": [
		  "Charminar",
		  "Meenakshi Temple",
		  "Hawa Mahal",
		  "Victoria Memorial"
		],
		"correct": "Charminar"
	  },
	  {
		"id": 5,
		"question": "Which monument is known for its unique stepwell architecture and is located in Gujarat?",
		"options": [
		  "Buland Darwaza",
		  "Jama Masjid",
		  "Rani Ki Vav",
		  "Jaisalmer Fort"
		],
		"correct": "Rani Ki Vav"
	  },
	  {
		"id": 6,
		"question": "Which monument is a famous Buddhist stupa located in Sanchi, Madhya Pradesh?",
		"options": [
		  "Sanchi Stupa",
		  "Brihadeeswarar Temple",
		  "Mahabodhi Temple",
		  "Chittorgarh Fort"
		],
		"correct": "Sanchi Stupa"
	  },
	  {
		"id": 7,
		"question": "Which monument is a medieval fortress located in Jaipur, Rajasthan?",
		"options": [
		  "Amer Fort",
		  "Jaisalmer Fort",
		  "Mehrangarh Fort",
		  "Gwalior Fort"
		],
		"correct": "Amer Fort"
	  },
	  {
		"id": 8,
		"question": "Which monument is an ancient rock-cut cave temple complex located in Maharashtra?",
		"options": [
		  "Ellora Caves",
		  "Badrinath Temple",
		  "Kedarnath Temple",
		  "Amarnath Cave Temple"
		],
		"correct": "Ellora Caves"
	  },
	  {
		"id": 9,
		"question": "Which monument is known for its Indo-Islamic architecture and is located in Agra?",
		"options": [
		  "Hawa Mahal",
		  "Agra Fort",
		  "Amber Palace",
		  "Jama Masjid"
		],
		"correct": "Agra Fort"
	  },
	  {
		"id": 10,
		"question": "Which monument is a group of rock-cut monuments located in Maharashtra?",
		"options": [
		  "Elephanta Caves",
		  "Meenakshi Temple",
		  "Brihadeeswarar Temple",
		  "Sun Temple, Modhera"
		],
		"correct": "Elephanta Caves"
	  },
	  {
		"id": 11,
		"question": "Which monument is a famous hill fort located in Maharashtra?",
		"options": [
		  "Gwalior Fort",
		  "Raigad Fort",
		  "Kumbhalgarh Fort",
		  "Chittorgarh Fort"
		],
		"correct": "Raigad Fort"
	  },
	  {
		"id": 12,
		"question": "Which monument is a historic fort located in Himachal Pradesh?",
		"options": [
		  "Golconda Fort",
		  "Rohtasgarh Fort",
		  "Kangra Fort",
		  "Vijay Stambh"
		],
		"correct": "Kangra Fort"
	  },
	  {
		"id": 13,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its intricate stone carvings?",
		"options": [
		  "Khajuraho Temples",
		  "Lingaraja Temple",
		  "Tawang Monastery",
		  "Rameshwaram Temple"
		],
		"correct": "Khajuraho Temples"
	  },
	  {
		"id": 14,
		"question": "Which monument is a famous rock-cut temple located in Odisha?",
		"options": [
		  "Dilwara Temples",
		  "Ranakpur Jain Temple",
		  "Jagannath Temple",
		  "Khandagiri-Udayagiri Caves"
		],
		"correct": "Khandagiri-Udayagiri Caves"
	  },
	  {
		"id": 15,
		"question": "Which monument is a grand palace located in Mysore, Karnataka?",
		"options": [
		  "Amer Palace",
		  "Hawa Mahal",
		  "Mysore Palace",
		  "City Palace, Jaipur"
		],
		"correct": "Mysore Palace"
	  },
	  {
		"id": 16,
		"question": "Which monument is a famous temple complex located in Tamil Nadu?",
		"options": [
		  "Madurai Meenakshi Temple",
		  "Golden Temple (Harmandir Sahib)",
		  "Kashi Vishwanath Temple",
		  "Kedarnath Temple"
		],
		"correct": "Madurai Meenakshi Temple"
	  },
	  {
		"id": 17,
		"question": "Which monument is known for its magnificent white marble architecture and is located in Rajasthan?",
		"options": [
		  "Charminar",
		  "Jaisalmer Fort",
		  "Rashtrapati Bhavan",
		  "Dilwara Temples"
		],
		"correct": "Dilwara Temples"
	  },
	  {
		"id": 18,
		"question": "Which monument is an iconic landmark located in Mumbai?",
		"options": [
		  "Gateway of India",
		  "India Gate",
		  "Charminar",
		  "Qutub Minar"
		],
		"correct": "Gateway of India"
	  },
	  {
		"id": 19,
		"question": "Which monument is a famous cave temple located in Maharashtra?",
		"options": [
		  "Brihadeeswarar Temple",
		  "Siddhivinayak Temple",
		  "Ajanta Caves",
		  "Golden Temple (Harmandir Sahib)"
		],
		"correct": "Ajanta Caves"
	  },
	  {
		"id": 20,
		"question": "Which monument is known as the 'Palace of Winds' and is located in Jaipur?",
		"options": [
		  "Lotus Temple",
		  "Jama Masjid",
		  "Hawa Mahal",
		  "Taj Mahal"
		],
		"correct": "Hawa Mahal"
	  },
	  {
		"id": 21,
		"question": "Which monument is a famous temple located in Amritsar, Punjab?",
		"options": [
		  "Rameshwaram Temple",
		  "Golden Temple (Harmandir Sahib)",
		  "Badrinath Temple",
		  "Kashi Vishwanath Temple"
		],
		"correct": "Golden Temple (Harmandir Sahib)"
	  },
	  {
		"id": 22,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its sun temple?",
		"options": [
		  "Ranakpur Jain Temple",
		  "Sri Ranganathaswamy Temple",
		  "Konark Sun Temple",
		  "Lingaraja Temple"
		],
		"correct": "Konark Sun Temple"
	  },
	  {
		"id": 23,
		"question": "Which monument is a famous pilgrimage site located in Uttarakhand?",
		"options": [
		  "Kedarnath Temple",
		  "Amarnath Cave Temple",
		  "Badrinath Temple",
		  "Vaishno Devi Temple"
		],
		"correct": "Badrinath Temple"
	  },
	  {
		"id": 24,
		"question": "Which monument is known for its intricate marble carvings and is located in Rajasthan?",
		"options": [
		  "Victoria Memorial",
		  "Rani Ki Vav",
		  "Mehrangarh Fort",
		  "Siddhivinayak Temple"
		],
		"correct": "Rani Ki Vav"
	  },
	  {
		"id": 25,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its rock-cut caves?",
		"options": [
		  "Ellora Caves",
		  "Jagannath Temple",
		  "Rohtasgarh Fort",
		  "Charminar"
		],
		"correct": "Ellora Caves"
	  },
	  {
		"id": 26,
		"question": "Which monument is a famous Hindu temple located in Varanasi?",
		"options": [
		  "Mahabodhi Temple",
		  "Kashi Vishwanath Temple",
		  "Tawang Monastery",
		  "Sri Ranganathaswamy Temple"
		],
		"correct": "Kashi Vishwanath Temple"
	  },
	  {
		"id": 27,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its rock-cut monolithic structures?",
		"options": [
		  "Meenakshi Temple",
		  "Mehrangarh Fort",
		  "Rameshwaram Temple",
		  "Khajuraho Temples"
		],
		"correct": "Mehrangarh Fort"
	  },
	  {
		"id": 28,
		"question": "Which monument is a famous temple located in Rameswaram, Tamil Nadu?",
		"options": [
		  "Amber Palace",
		  "Rameshwaram Temple",
		  "Hampi Monuments",
		  "Qutub Minar"
		],
		"correct": "Rameshwaram Temple"
	  },
	  {
		"id": 29,
		"question": "Which monument is an ancient stepwell located in Gujarat?",
		"options": [
		  "Stepwell of Chand Baori",
		  "Lotus Temple",
		  "Sun Temple, Modhera",
		  "Madurai Meenakshi Temple"
		],
		"correct": "Stepwell of Chand Baori"
	  },
	  {
		"id": 30,
		"question": "Which monument is known for its distinctive blue architecture and is located in Jodhpur?",
		"options": [
		  "Buland Darwaza",
		  "Jaisalmer Fort",
		  "Mehrangarh Fort",
		  "Hawa Mahal"
		],
		"correct": "Mehrangarh Fort"
	  },
	  {
		"id": 31,
		"question": "Which monument is a famous rock-cut cave temple located in Karnataka?",
		"options": [
		  "Elephanta Caves",
		  "Badami Cave Temples",
		  "Sun Temple, Konark",
		  "Tawang Monastery"
		],
		"correct": "Badami Cave Temples"
	  },
	  {
		"id": 32,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its frescoes?",
		"options": [
		  "Jama Masjid",
		  "Sun Temple, Modhera",
		  "Ranakpur Jain Temple",
		  "Sheesh Mahal, Amer Fort"
		],
		"correct": "Ranakpur Jain Temple"
	  },
	  {
		"id": 33,
		"question": "Which monument is a famous temple located in Kerala?",
		"options": [
		  "Sabarimala Temple",
		  "Madurai Meenakshi Temple",
		  "Siddhivinayak Temple",
		  "Golden Temple (Harmandir Sahib)"
		],
		"correct": "Sabarimala Temple"
	  },
	  {
		"id": 34,
		"question": "Which monument is known for its white marble architecture and is located in Agra?",
		"options": [
		  "Red Fort",
		  "Taj Mahal",
		  "Amber Palace",
		  "Sanchi Stupa"
		],
		"correct": "Taj Mahal"
	  },
	  {
		"id": 35,
		"question": "Which monument is a famous temple located in Tamil Nadu?",
		"options": [
		  "Kumbhalgarh Fort",
		  "Mahabodhi Temple",
		  "Meenakshi Temple",
		  "Hampi Monuments"
		],
		"correct": "Meenakshi Temple"
	  },
	  {
		"id": 36,
		"question": "Which monument is a historic fort located in Rajasthan?",
		"options": [
		  "Jaisalmer Fort",
		  "Chittorgarh Fort",
		  "Amer Fort",
		  "Golconda Fort"
		],
		"correct": "Jaisalmer Fort"
	  },
	  {
		"id": 37,
		"question": "Which monument is known for its massive fortified walls and is located in Madhya Pradesh?",
		"options": [
		  "Gwalior Fort",
		  "Vaishno Devi Temple",
		  "Hawa Mahal",
		  "Konark Sun Temple"
		],
		"correct": "Gwalior Fort"
	  },
	  {
		"id": 38,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its temple architecture?",
		"options": [
		  "Kedarnath Temple",
		  "Brihadeeswarar Temple",
		  "Jama Masjid",
		  "Rohtasgarh Fort"
		],
		"correct": "Brihadeeswarar Temple"
	  },
	  {
		"id": 39,
		"question": "Which monument is a famous temple located in Uttarakhand?",
		"options": [
		  "Amarnath Cave Temple",
		  "Sri Ranganathaswamy Temple",
		  "Charminar",
		  "Kedarnath Temple"
		],
		"correct": "Kedarnath Temple"
	  },
	  {
		"id": 40,
		"question": "Which monument is a historic fort located in Himachal Pradesh?",
		"options": [
		  "Chittorgarh Fort",
		  "Vijay Stambh",
		  "Rohtasgarh Fort",
		  "Kangra Fort"
		],
		"correct": "Kangra Fort"
	  },
	  {
		"id": 41,
		"question": "Which monument is a famous temple located in Odisha?",
		"options": [
		  "Jagannath Temple",
		  "Badrinath Temple",
		  "Rameshwaram Temple",
		  "Lingaraja Temple"
		],
		"correct": "Lingaraja Temple"
	  },
	  {
		"id": 42,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its cave paintings?",
		"options": [
		  "Khajuraho Temples",
		  "Ajanta Caves",
		  "Ellora Caves",
		  "Sun Temple, Konark"
		],
		"correct": "Ajanta Caves"
	  },
	  {
		"id": 43,
		"question": "Which monument is a famous temple located in Bihar?",
		"options": [
		  "Ranakpur Jain Temple",
		  "Bodh Gaya",
		  "Siddhivinayak Temple",
		  "Mahabodhi Temple"
		],
		"correct": "Mahabodhi Temple"
	  },
	  {
		"id": 44,
		"question": "Which monument is known for its architectural beauty and is located in Karnataka?",
		"options": [
		  "Hampi Monuments",
		  "Jama Masjid",
		  "City Palace, Jaipur",
		  "Hawa Mahal"
		],
		"correct": "Hampi Monuments"
	  },
	  {
		"id": 45,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its marble architecture?",
		"options": [
		  "Victoria Memorial",
		  "Rani Ki Vav",
		  "Sanchi Stupa",
		  "Dilwara Temples"
		],
		"correct": "Dilwara Temples"
	  },
	  {
		"id": 46,
		"question": "Which monument is a famous temple located in West Bengal?",
		"options": [
		  "Badrinath Temple",
		  "Jagannath Temple",
		  "Kali Temple, Kalighat",
		  "Sabarimala Temple"
		],
		"correct": "Kali Temple, Kalighat"
	  },
	  {
		"id": 47,
		"question": "Which monument is known for its grand architecture and is located in Uttar Pradesh?",
		"options": [
		  "Taj Mahal",
		  "Agra Fort",
		  "Amber Palace",
		  "Hampi Monuments"
		],
		"correct": "Agra Fort"
	  },
	  {
		"id": 48,
		"question": "Which monument is a famous temple located in Andhra Pradesh?",
		"options": [
		  "Sun Temple, Konark",
		  "Tawang Monastery",
		  "Venkateswara Temple, Tirupati",
		  "Meenakshi Temple"
		],
		"correct": "Venkateswara Temple, Tirupati"
	  },
	  {
		"id": 49,
		"question": "Which monument is a UNESCO World Heritage Site and is known for its Buddhist stupa?",
		"options": [
		  "Sanchi Stupa",
		  "Mahabodhi Temple",
		  "Red Fort",
		  "Lotus Temple"
		],
		"correct": "Sanchi Stupa"
	  },
	  {
		"id": 50,
		"question": "Which monument is a famous temple located in Assam?",
		"options": [
		  "Vaishno Devi Temple",
		  "Tawang Monastery",
		  "Kamakhya Temple",
		  "Amarnath Cave Temple"
		],
		"correct": "Kamakhya Temple"
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