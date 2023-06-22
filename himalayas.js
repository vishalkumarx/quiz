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
		"question": "Which is the highest peak in the Himalayas?",
		"options": ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
		"correct": "Mount Everest"
	  },
	  {
		"id": 2,
		"question": "What is the average elevation of the Himalayan mountain range?",
		"options": ["6,000 meters", "4,000 meters", "8,000 meters", "10,000 meters"],
		"correct": "6,000 meters"
	  },
	  {
		"id": 3,
		"question": "Which country is home to the highest number of Himalayan peaks?",
		"options": ["India", "Nepal", "China", "Bhutan"],
		"correct": "Nepal"
	  },
	  {
		"id": 4,
		"question": "What is the approximate length of the Himalayan mountain range?",
		"options": ["2,400 kilometers", "4,500 kilometers", "6,800 kilometers", "8,000 kilometers"],
		"correct": "2,400 kilometers"
	  },
	  {
		"id": 5,
		"question": "Which river originates from the Gangotri Glacier in the Himalayas?",
		"options": ["Ganges", "Brahmaputra", "Yamuna", "Indus"],
		"correct": "Ganges"
	  },
	  {
		"id": 6,
		"question": "Which is the largest glacier in the Himalayas?",
		"options": ["Gangotri Glacier", "Siachen Glacier", "Biafo Glacier", "Zemu Glacier"],
		"correct": "Siachen Glacier"
	  },
	  {
		"id": 7,
		"question": "Which is the easternmost peak in the Himalayas?",
		"options": ["Kangchenjunga", "Nanda Devi", "Annapurna", "Dhaulagiri"],
		"correct": "Kangchenjunga"
	  },
	  {
		"id": 8,
		"question": "Which is the westernmost peak in the Himalayas?",
		"options": ["Nanga Parbat", "Mount Everest", "K2", "Makalu"],
		"correct": "Nanga Parbat"
	  },
	  {
		"id": 9,
		"question": "Which is the southernmost peak in the Himalayas?",
		"options": ["Nanda Devi", "Annapurna", "Dhaulagiri", "Makalu"],
		"correct": "Nanda Devi"
	  },
	  {
		"id": 10,
		"question": "Which region in the Himalayas is famous for its monasteries?",
		"options": ["Ladakh", "Sikkim", "Spiti Valley", "Bhutan"],
		"correct": "Ladakh"
	  },
	  {
		"id": 11,
		"question": "Which pass in the Himalayas is considered the gateway to the Kailash Mansarovar Yatra?",
		"options": ["Lipulekh Pass", "Nathu La Pass", "Rohtang Pass", "Zoji La Pass"],
		"correct": "Lipulekh Pass"
	  },
	  {
		"id": 12,
		"question": "Which is the longest river in the Himalayas?",
		"options": ["Brahmaputra", "Ganges", "Yamuna", "Indus"],
		"correct": "Brahmaputra"
	  },
	  {
		"id": 13,
		"question": "Which is the highest lake in the Himalayas?",
		"options": ["Tilicho Lake", "Pangong Tso", "Gosaikunda", "Rara Lake"],
		"correct": "Tilicho Lake"
	  },
	  {
		"id": 14,
		"question": "Which national park in the Himalayas is home to the Bengal tiger?",
		"options": ["Corbett National Park", "Sagarmatha National Park", "Manas National Park", "Kangchenjunga National Park"],
		"correct": "Corbett National Park"
	  },
	  {
		"id": 15,
		"question": "Which is the highest road pass in the Himalayas?",
		"options": ["Khardung La", "Mana Pass", "Rohtang Pass", "Zoji La Pass"],
		"correct": "Khardung La"
	  },
	  {
		"id": 16,
		"question": "Which is the largest protected area in the Himalayas?",
		"options": ["Annapurna Conservation Area", "Great Himalayan National Park", "Khangchendzonga National Park", "Dachigam National Park"],
		"correct": "Great Himalayan National Park"
	  },
	  {
		"id": 17,
		"question": "Which is the most sacred river in the Himalayas?",
		"options": ["Ganges", "Yamuna", "Brahmaputra", "Indus"],
		"correct": "Ganges"
	  },
	  {
		"id": 18,
		"question": "Which city in the Himalayas is known as the 'Queen of Hills'?",
		"options": ["Shimla", "Darjeeling", "Mussoorie", "Nainital"],
		"correct": "Darjeeling"
	  },
	  {
		"id": 19,
		"question": "Which mountain range is located in the western part of the Himalayas?",
		"options": ["Pir Panjal Range", "Dhauladhar Range", "Zanskar Range", "Karakoram Range"],
		"correct": "Pir Panjal Range"
	  },
	  {
		"id": 20,
		"question": "Which is the highest mountain pass in the Himalayas?",
		"options": ["Chang La", "Sela Pass", "Nathu La Pass", "Marsimik La"],
		"correct": "Marsimik La"
	  },
	  {
		"id": 21,
		"question": "Which is the largest valley in the Himalayas?",
		"options": ["Kashmir Valley", "Kangra Valley", "Kathmandu Valley", "Kullu Valley"],
		"correct": "Kashmir Valley"
	  },
	  {
		"id": 22,
		"question": "Which is the highest village in the Himalayas?",
		"options": ["Kibber", "Turtuk", "Chitkul", "Komic"],
		"correct": "Komic"
	  },
	  {
		"id": 23,
		"question": "Which mountain range separates the Himalayas from the Tibetan Plateau?",
		"options": ["Karakoram Range", "Pir Panjal Range", "Zanskar Range", "Dhauladhar Range"],
		"correct": "Karakoram Range"
	  },
	  {
		"id": 24,
		"question": "Which is the largest glacier outside the polar regions?",
		"options": ["Siachen Glacier", "Baltoro Glacier", "Gangotri Glacier", "Zemu Glacier"],
		"correct": "Baltoro Glacier"
	  },
	  {
		"id": 25,
		"question": "Which river flows through the famous Pashupatinath Temple in Nepal?",
		"options": ["Bagmati River", "Kali Gandaki River", "Koshi River", "Trishuli River"],
		"correct": "Bagmati River"
	  },
	  {
		"id": 26,
		"question": "Which is the highest waterfall in the Himalayas?",
		"options": ["Bhagsu Waterfall", "Bhimshankar Waterfall", "Kempty Falls", "Sissu Waterfall"],
		"correct": "Bhimshankar Waterfall"
	  },
	  {
		"id": 27,
		"question": "Which is the largest national park in the Indian Himalayan region?",
		"options": ["Hemis National Park", "Valley of Flowers National Park", "Great Himalayan National Park", "Nanda Devi National Park"],
		"correct": "Great Himalayan National Park"
	  },
	  {
		"id": 28,
		"question": "Which is the largest lake in the Indian Himalayan region?",
		"options": ["Dal Lake", "Pangong Tso", "Nainital Lake", "Wular Lake"],
		"correct": "Wular Lake"
	  },
	  {
		"id": 29,
		"question": "Which is the highest waterfall in the Indian Himalayan region?",
		"options": ["Kempty Falls", "Nohkalikai Falls", "Sissu Waterfall", "Jogini Falls"],
		"correct": "Nohkalikai Falls"
	  },
	  {
		"id": 30,
		"question": "Which is the largest glacier in the Indian Himalayan region?",
		"options": ["Gangotri Glacier", "Siachen Glacier", "Biafo Glacier", "Pindari Glacier"],
		"correct": "Siachen Glacier"
	  },
	  {
		"id": 31,
		"question": "Which city in the Indian Himalayan region is known as the 'Valley of Gods'?",
		"options": ["Manali", "Shimla", "Kullu", "Mandi"],
		"correct": "Kullu"
	  },
	  {
		"id": 32,
		"question": "Which is the largest national park in the Bhutanese Himalayas?",
		"options": ["Jigme Dorji National Park", "Phrumsengla National Park", "Royal Manas National Park", "Bumdeling Wildlife Sanctuary"],
		"correct": "Jigme Dorji National Park"
	  },
	  {
		"id": 33,
		"question": "Which is the highest peak in the Bhutanese Himalayas?",
		"options": ["Gangkhar Puensum", "Jomolhari", "Tongshanjiabu", "Kula Kangri"],
		"correct": "Gangkhar Puensum"
	  },
	  {
		"id": 34,
		"question": "Which is the largest glacier in the Bhutanese Himalayas?",
		"options": ["Gangkhar Puensum Glacier", "Lunana Glacier", "Doklam Glacier", "Kula Kangri Glacier"],
		"correct": "Gangkhar Puensum Glacier"
	  },
	  {
		"id": 35,
		"question": "Which river flows through the Paro Valley in Bhutan?",
		"options": ["Paro Chhu", "Wang Chhu", "Mochu", "Puna Tsang Chhu"],
		"correct": "Paro Chhu"
	  },
	  {
		"id": 36,
		"question": "Which is the highest peak in the Tibetan Himalayas?",
		"options": ["Mount Kailash", "Mount Everest", "Namcha Barwa", "Gurla Mandhata"],
		"correct": "Namcha Barwa"
	  },
	  {
		"id": 37,
		"question": "Which is the largest lake in the Tibetan Himalayas?",
		"options": ["Yamdrok Lake", "Lake Manasarovar", "Lake Rakshastal", "Pangong Tso"],
		"correct": "Lake Manasarovar"
	  },
	  {
		"id": 38,
		"question": "Which is the longest river in the Tibetan Himalayas?",
		"options": ["Indus", "Brahmaputra", "Yangtze", "Mekong"],
		"correct": "Brahmaputra"
	  },
	  {
		"id": 39,
		"question": "Which is the highest plateau in the world located in the Tibetan Himalayas?",
		"options": ["Changtang Plateau", "Qinghai Plateau", "Ladakh Plateau", "Pamir Plateau"],
		"correct": "Qinghai Plateau"
	  },
	  {
		"id": 40,
		"question": "Which is the largest town in the Tibetan Himalayas?",
		"options": ["Lhasa", "Shigatse", "Gyantse", "Nyingchi"],
		"correct": "Lhasa"
	  },
	  {
		"id": 41,
		"question": "Which is the highest peak in the Nepalese Himalayas?",
		"options": ["Mount Everest", "Kangchenjunga", "Lhotse", "Makalu"],
		"correct": "Mount Everest"
	  },
	  {
		"id": 42,
		"question": "Which is the largest glacier in the Nepalese Himalayas?",
		"options": ["Ngozumpa Glacier", "Khumbu Glacier", "Imja Glacier", "Yalung Glacier"],
		"correct": "Ngozumpa Glacier"
	  },
	  {
		"id": 43,
		"question": "Which is the deepest gorge in the Nepalese Himalayas?",
		"options": ["Kali Gandaki Gorge", "Bheri Valley", "Budi Gandaki Gorge", "Trishuli Gorge"],
		"correct": "Kali Gandaki Gorge"
	  },
	  {
		"id": 44,
		"question": "Which is the largest lake in the Nepalese Himalayas?",
		"options": ["Rara Lake", "Phewa Lake", "Gosaikunda", "Shey Phoksundo Lake"],
		"correct": "Rara Lake"
	  },
	  {
		"id": 45,
		"question": "Which is the highest waterfall in the Nepalese Himalayas?",
		"options": ["Hyatung Waterfall", "Hyatung Waterfall", "Gupteshwar Waterfall", "Patale Chhango"],
		"correct": "Hyatung Waterfall"
	  },
	  {
		"id": 46,
		"question": "Which is the largest national park in the Nepalese Himalayas?",
		"options": ["Sagarmatha National Park", "Langtang National Park", "Bardiya National Park", "Chitwan National Park"],
		"correct": "Sagarmatha National Park"
	  },
	  {
		"id": 47,
		"question": "Which is the highest pass in the Nepalese Himalayas?",
		"options": ["Renjo La", "Thorong La", "Gyajo La", "Larke La"],
		"correct": "Thorong La"
	  },
	  {
		"id": 48,
		"question": "Which is the highest peak in the Indian state of Sikkim?",
		"options": ["Kangchenjunga", "Narsingh", "Pandim", "Kabru"],
		"correct": "Kangchenjunga"
	  },
	  {
		"id": 49,
		"question": "Which is the largest glacier in the Indian state of Sikkim?",
		"options": ["Zemu Glacier", "Khangchendzonga Glacier", "Rathong Glacier", "Zemu Gap Glacier"],
		"correct": "Zemu Glacier"
	  },
	  {
		"id": 50,
		"question": "Which is the highest lake in the Indian state of Sikkim?",
		"options": ["Gurudongmar Lake", "Khecheopalri Lake", "Tsomgo Lake", "Menmecho Lake"],
		"correct": "Gurudongmar Lake"
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