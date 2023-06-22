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
		"id": "1",
		"question": "In which year did Mahatma Gandhi return to India from South Africa?",
		"options": ["1910", "1915", "1919", "1924"],
		"correct": "1915"
	  },
	  {
		"id": "2",
		"question": "What was the name of the movement started by Mahatma Gandhi in 1917 in Champaran district of Bihar?",
		"options": ["Dandi March", "Quit India Movement", "Champaran Satyagraha", "Non-Cooperation Movement"],
		"correct": "Champaran Satyagraha"
	  },
	  {
		"id": "3",
		"question": "Which event led to Mahatma Gandhi launching the Non-Cooperation Movement in 1920?",
		"options": ["Jallianwala Bagh massacre", "Chauri Chaura incident", "Salt March", "Partition of Bengal"],
		"correct": "Jallianwala Bagh massacre"
	  },
	  {
		"id": "4",
		"question": "In which year did Mahatma Gandhi lead the famous Salt March?",
		"options": ["1929", "1930", "1931", "1932"],
		"correct": "1930"
	  },
	  {
		"id": "5",
		"question": "Which movement was launched by Mahatma Gandhi in 1942?",
		"options": ["Non-Cooperation Movement", "Quit India Movement", "Dandi March", "Civil Disobedience Movement"],
		"correct": "Quit India Movement"
	  },
	  {
		"id": "6",
		"question": "Which newspaper was started by Mahatma Gandhi in 1903 in South Africa?",
		"options": ["Young India", "Indian Opinion", "Harijan", "Navjivan"],
		"correct": "Indian Opinion"
	  },
	  {
		"id": "7",
		"question": "What was the name of the ashram established by Mahatma Gandhi in Gujarat in 1915?",
		"options": ["Sabarmati Ashram", "Sevagram Ashram", "Phoenix Ashram", "Tolstoy Farm"],
		"correct": "Sabarmati Ashram"
	  },
	  {
		"id": "8",
		"question": "Which iconic phrase did Mahatma Gandhi use to inspire Indians during the freedom struggle?",
		"options": ["Do or Die", "Jai Hind", "Swaraj is my birthright", "Satyameva Jayate"],
		"correct": "Do or Die"
	  },
	  {
		"id": "9",
		"question": "Who gave the title of 'Mahatma' to Mohandas Karamchand Gandhi?",
		"options": ["Rabindranath Tagore", "Bal Gangadhar Tilak", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
		"correct": "Rabindranath Tagore"
	  },
	  {
		"id": "10",
		"question": "Which city was the venue for the historic Gandhi-Irwin Pact signed in 1931?",
		"options": ["Delhi", "Mumbai", "Chennai", "Kolkata"],
		"correct": "Delhi"
	  },
	  {
		"id": "11",
		"question": "What was the name of Mahatma Gandhi's autobiography?",
		"options": ["My Experiments with Truth", "The Story of My Experiments with Truth", "The Autobiography of Mahatma Gandhi", "Gandhi: An Autobiography"],
		"correct": "The Story of My Experiments with Truth"
	  },
	  {
		"id": "12",
		"question": "Which famous event marked the beginning of Mahatma Gandhi's civil disobedience movement?",
		"options": ["Dandi March", "Salt Satyagraha", "Bardoli Satyagraha", "Ahmedabad Mill Strike"],
		"correct": "Salt Satyagraha"
	  },
	  {
		"id": "13",
		"question": "In which year was Mahatma Gandhi assassinated?",
		"options": ["1946", "1947", "1948", "1949"],
		"correct": "1948"
	  },
	  {
		"id": "14",
		"question": "Which important resolution was passed at the Lahore session of the Indian National Congress in 1929?",
		"options": ["Resolution on Complete Independence", "Resolution on Non-Violent Non-Cooperation", "Resolution on Poorna Swaraj", "Resolution on Quit India"],
		"correct": "Resolution on Poorna Swaraj"
	  },
	  {
		"id": "15",
		"question": "Who was Mahatma Gandhi's wife?",
		"options": ["Kasturba Gandhi", "Sarojini Naidu", "Indira Gandhi", "Rajkumari Amrit Kaur"],
		"correct": "Kasturba Gandhi"
	  },
	  {
		"id": "16",
		"question": "Which famous phrase was coined by Mahatma Gandhi to describe his philosophy of non-violent resistance?",
		"options": ["Ahimsa", "Satyagraha", "Swadeshi", "Dharma"],
		"correct": "Satyagraha"
	  },
	  {
		"id": "17",
		"question": "Which Indian leader was Mahatma Gandhi's mentor and guide during his early years in South Africa?",
		"options": ["Bal Gangadhar Tilak", "Dadabhai Naoroji", "Gopal Krishna Gokhale", "Motilal Nehru"],
		"correct": "Gopal Krishna Gokhale"
	  },
	  {
		"id": "18",
		"question": "Which place did Mahatma Gandhi choose for his first experiment in communal harmony?",
		"options": ["Noakhali", "Amritsar", "Wardha", "Kolkata"],
		"correct": "Noakhali"
	  },
	  {
		"id": "19",
		"question": "Which organization did Mahatma Gandhi form in 1919 to support the cause of peasants and farmers?",
		"options": ["Indian National Congress", "Khilafat Movement", "All India Traders Association", "Sabarmati Ashram"],
		"correct": "Khilafat Movement"
	  },
	  {
		"id": "20",
		"question": "Which important event occurred on 15th August 1947, the same day India gained independence?",
		"options": ["Mahatma Gandhi's assassination", "Mahatma Gandhi's Dandi March", "Mahatma Gandhi's release from prison", "Mahatma Gandhi's meeting with Winston Churchill"],
		"correct": "Mahatma Gandhi's release from prison"
	  },
	  {
		"id": "21",
		"question": "What was the role of Mahatma Gandhi in the Kheda Satyagraha of 1918?",
		"options": ["He led the protest march", "He organized a nationwide strike", "He provided legal assistance to the farmers", "He started a hunger strike"],
		"correct": "He provided legal assistance to the farmers"
	  },
	  {
		"id": "22",
		"question": "Which was the first nationwide movement launched by Mahatma Gandhi in 1919?",
		"options": ["Quit India Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Khilafat Movement"],
		"correct": "Khilafat Movement"
	  },
	  {
		"id": "23",
		"question": "What was the purpose of the Dandi March led by Mahatma Gandhi in 1930?",
		"options": ["To protest against the Simon Commission", "To demand complete independence from British rule", "To boycott foreign goods", "To protest against the Rowlatt Act"],
		"correct": "To protest against the Salt Tax imposed by the British"
	  },
	  {
		"id": "24",
		"question": "Who was Mahatma Gandhi's political and spiritual mentor?",
		"options": ["Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Rabindranath Tagore", "Sardar Vallabhbhai Patel"],
		"correct": "Gopal Krishna Gokhale"
	  },
	  {
		"id": "25",
		"question": "What was the role of Mahatma Gandhi in the Quit India Movement of 1942?",
		"options": ["He led the movement from the front", "He called for a mass civil disobedience movement", "He initiated the Salt Satyagraha", "He organized the Bardoli Satyagraha"],
		"correct": "He called for a mass civil disobedience movement"
	  },
	  {
		"id": "26",
		"question": "Which important resolution was passed at the Congress session in Karachi in 1931?",
		"options": ["Resolution on Complete Independence", "Resolution on Non-Cooperation", "Resolution on Poorna Swaraj", "Resolution on Partition of India"],
		"correct": "Resolution on Poorna Swaraj"
	  },
	  {
		"id": "27",
		"question": "What was the significance of Mahatma Gandhi's visit to Champaran in 1917?",
		"options": ["He started the Quit India Movement", "He led the Salt Satyagraha", "He initiated the Non-Cooperation Movement", "He launched the Champaran Satyagraha"],
		"correct": "He launched the Champaran Satyagraha"
	  },
	  {
		"id": "28",
		"question": "Which important pact was signed between Mahatma Gandhi and Lord Irwin in 1931?",
		"options": ["Gandhi-Irwin Pact", "Lahore Pact", "Gandhi-Nehru Pact", "Delhi Pact"],
		"correct": "Gandhi-Irwin Pact"
	  },
	  {
		"id": "29",
		"question": "What was the role of Mahatma Gandhi in the Bardoli Satyagraha of 1928?",
		"options": ["He led the protest march", "He organized a nationwide strike", "He provided legal assistance to the farmers", "He started a hunger strike"],
		"correct": "He provided leadership and guidance to the farmers"
	  },
	  {
		"id": "30",
		"question": "Which important event marked the end of the Civil Disobedience Movement launched by Mahatma Gandhi in 1930?",
		"options": ["Dandi March", "Salt Satyagraha", "Gandhi-Irwin Pact", "Round Table Conference"],
		"correct": "Gandhi-Irwin Pact"
	  },{
			"id": "31",
			"question": "Which event led to the suspension of the Non-Cooperation Movement by Mahatma Gandhi in 1922?",
			"options": ["Chauri Chaura incident", "Salt March", "Jallianwala Bagh massacre", "Partition of Bengal"],
			"correct": "Chauri Chaura incident"
		  },
		  {
			"id": "32",
			"question": "What was the main objective of Mahatma Gandhi's constructive program?",
			"options": ["Promoting communal harmony", "Promoting khadi and village industries", "Promoting women's rights", "Promoting education for all"],
			"correct": "Promoting khadi and village industries"
		  },
		  {
			"id": "33",
			"question": "Which famous movement was started by Mahatma Gandhi in 1933 to protest against the British salt tax in India?",
			"options": ["Quit India Movement", "Salt Satyagraha", "Dandi March", "Civil Disobedience Movement"],
			"correct": "Salt Satyagraha"
		  },
		  {
			"id": "34",
			"question": "Which was the last major movement led by Mahatma Gandhi before India gained independence?",
			"options": ["Quit India Movement", "Salt Satyagraha", "Non-Cooperation Movement", "Dandi March"],
			"correct": "Quit India Movement"
		  },
		  {
			"id": "35",
			"question": "What was the significance of the Dandi March led by Mahatma Gandhi in 1930?",
			"options": ["To demand complete independence from British rule", "To protest against the Simon Commission", "To boycott foreign goods", "To protest against the Rowlatt Act"],
			"correct": "To protest against the Salt Tax imposed by the British"
		  },
		  {
			"id": "36",
			"question": "Which Indian leader supported Mahatma Gandhi during the Non-Cooperation Movement?",
			"options": ["Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
			"correct": "Jawaharlal Nehru"
		  },
		  {
			"id": "37",
			"question": "What was the name of the satyagraha led by Mahatma Gandhi in Ahmedabad in 1918?",
			"options": ["Bardoli Satyagraha", "Dandi March", "Ahmedabad Mill Strike", "Kheda Satyagraha"],
			"correct": "Ahmedabad Mill Strike"
		  },
		  {
			"id": "38",
			"question": "Which important resolution was passed at the Congress session in Karachi in 1931?",
			"options": ["Resolution on Complete Independence", "Resolution on Non-Cooperation", "Resolution on Poorna Swaraj", "Resolution on Partition of India"],
			"correct": "Resolution on Poorna Swaraj"
		  },
		  {
			"id": "39",
			"question": "What was the role of Mahatma Gandhi in the Kheda Satyagraha of 1918?",
			"options": ["He led the protest march", "He organized a nationwide strike", "He provided legal assistance to the farmers", "He started a hunger strike"],
			"correct": "He provided legal assistance to the farmers"
		  },
		  {
			"id": "40",
			"question": "Which famous phrase was coined by Mahatma Gandhi to describe his philosophy of non-violent resistance?",
			"options": ["Ahimsa", "Satyagraha", "Swadeshi", "Dharma"],
			"correct": "Satyagraha"
		  },
		  {
			"id": "41",
			"question": "What was the role of Mahatma Gandhi in the Bardoli Satyagraha of 1928?",
			"options": ["He led the protest march", "He organized a nationwide strike", "He provided legal assistance to the farmers", "He started a hunger strike"],
			"correct": "He provided leadership and guidance to the farmers"
		  },
		  {
			"id": "42",
			"question": "Which important pact was signed between Mahatma Gandhi and Lord Irwin in 1931?",
			"options": ["Gandhi-Irwin Pact", "Lahore Pact", "Gandhi-Nehru Pact", "Delhi Pact"],
			"correct": "Gandhi-Irwin Pact"
		  },
		  {
			"id": "43",
			"question": "Who was Mahatma Gandhi's political and spiritual mentor?",
			"options": ["Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Rabindranath Tagore", "Sardar Vallabhbhai Patel"],
			"correct": "Gopal Krishna Gokhale"
		  },
		  {
			"id": "44",
			"question": "What was the role of Mahatma Gandhi in the Champaran Satyagraha of 1917?",
			"options": ["He led the protest march", "He organized a nationwide strike", "He provided legal assistance to the farmers", "He started a hunger strike"],
			"correct": "He launched the Champaran Satyagraha"
		  },
		  {
			"id": "45",
			"question": "Which organization did Mahatma Gandhi form in 1919 to support the cause of peasants and farmers?",
			"options": ["Indian National Congress", "Khilafat Movement", "All India Traders Association", "Sabarmati Ashram"],
			"correct": "Khilafat Movement"
		  },
		  {
			"id": "46",
			"question": "Which important event marked the end of the Civil Disobedience Movement launched by Mahatma Gandhi in 1930?",
			"options": ["Dandi March", "Salt Satyagraha", "Gandhi-Irwin Pact", "Round Table Conference"],
			"correct": "Gandhi-Irwin Pact"
		  },
		  {
			"id": "47",
			"question": "What was the role of Mahatma Gandhi in the Ahmedabad Mill Strike of 1918?",
			"options": ["He led the protest march", "He organized a nationwide strike", "He provided legal assistance to the workers", "He started a hunger strike"],
			"correct": "He provided legal assistance to the workers"
		  },
		  {
			"id": "48",
			"question": "Which event marked the beginning of Mahatma Gandhi's involvement in Indian politics?",
			"options": ["Champaran Satyagraha", "Salt Satyagraha", "Quit India Movement", "Non-Cooperation Movement"],
			"correct": "Champaran Satyagraha"
		  },
		  {
			"id": "49",
			"question": "What was the significance of Mahatma Gandhi's visit to Noakhali in 1946?",
			"options": ["He started the Quit India Movement", "He led the Salt Satyagraha", "He initiated the Non-Cooperation Movement", "He promoted communal harmony"],
			"correct": "He promoted communal harmony"
	  
	  
		  },
		  {
			"id": "50",
			"question": "Which important resolution was passed at the Lahore session of the Indian National Congress in 1929?",
			"options": ["Resolution on Complete Independence", "Resolution on Non-Cooperation", "Resolution on Poorna Swaraj", "Resolution on Partition of India"],
			"correct": "Resolution on Poorna Swaraj"
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
