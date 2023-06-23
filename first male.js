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

const quizArray = [{
		"id": 1,
		"question": "Who was the first President of India?",
		"options": [
		  "Rajendra Prasad",
		  "Jawaharlal Nehru",
		  "Lal Bahadur Shastri",
		  "Indira Gandhi"
		],
		"correct": "Rajendra Prasad"
	  },
	  {
		"id": 2,
		"question": "Who was the first Prime Minister of India?",
		"options": [
		  "Jawaharlal Nehru",
		  "Rajendra Prasad",
		  "Lal Bahadur Shastri",
		  "Indira Gandhi"
		],
		"correct": "Jawaharlal Nehru"
	  },
	  {
		"id": 3,
		"question": "Who was the first Chief Justice of India?",
		"options": [
		  "H. J. Kania",
		  "M. Patanjali Sastri",
		  "Y. V. Chandrachud",
		  "P. Sathasivam"
		],
		"correct": "H. J. Kania"
	  },
	  {
		"id": 4,
		"question": "Who was the first Indian to win an individual Olympic gold medal?",
		"options": [
		  "Abhinav Bindra",
		  "Dhyan Chand",
		  "Milkha Singh",
		  "P. T. Usha"
		],
		"correct": "Abhinav Bindra"
	  },
	  {
		"id": 5,
		"question": "Who was the first Indian to receive the Nobel Prize in Physics?",
		"options": [
		  "C. V. Raman",
		  "Hargobind Khorana",
		  "Subrahmanyan Chandrasekhar",
		  "Venkatraman Ramakrishnan"
		],
		"correct": "C. V. Raman"
	  },
	  {
		"id": 6,
		"question": "Who was the first Indian to receive the Bharat Ratna?",
		"options": [
		  "C. Rajagopalachari",
		  "Sarvepalli Radhakrishnan",
		  "C. V. Raman",
		  "Jawaharlal Nehru"
		],
		"correct": "C. Rajagopalachari"
	  },
	  {
		"id": 7,
		"question": "Who was the first Indian to win the Booker Prize?",
		"options": [
		  "Arundhati Roy",
		  "Salman Rushdie",
		  "Kiran Desai",
		  "Aravind Adiga"
		],
		"correct": "Arundhati Roy"
	  },
	  {
		"id": 8,
		"question": "Who was the first Indian to go into space?",
		"options": [
		  "Rakesh Sharma",
		  "Kalpana Chawla",
		  "Sunita Williams",
		  "Yuri Gagarin"
		],
		"correct": "Rakesh Sharma"
	  },
	  {
		"id": 9,
		"question": "Who was the first Indian to receive the Nobel Prize in Literature?",
		"options": [
		  "Rabindranath Tagore",
		  "C. V. Raman",
		  "Amartya Sen",
		  "Kailash Satyarthi"
		],
		"correct": "Rabindranath Tagore"
	  },
	  {
		"id": 10,
		"question": "Who was the first Indian to reach the summit of Mount Everest?",
		"options": [
		  "Tenzing Norgay",
		  "Junko Tabei",
		  "Reinhold Messner",
		  "Edmund Hillary"
		],
		"correct": "Tenzing Norgay"
	  },
	  {
		"id": 11,
		"question": "Who was the first Indian to receive the Param Vir Chakra?",
		"options": [
		  "Major Somnath Sharma",
		  "Captain Vikram Batra",
		  "Havildar Abdul Hamid",
		  "Captain Manoj Kumar Pandey"
		],
		"correct": "Major Somnath Sharma"
	  },
	  {
		"id": 12,
		"question": "Who was the first Indian to win the Miss World title?",
		"options": [
		  "Reita Faria",
		  "Aishwarya Rai",
		  "Priyanka Chopra",
		  "Manushi Chhillar"
		],
		"correct": "Reita Faria"
	  },
	  {
		"id": 13,
		"question": "Who was the first Indian to receive the Dadasaheb Phalke Award?",
		"options": [
		  "Devika Rani",
		  "Prithviraj Kapoor",
		  "Satyajit Ray",
		  "Raj Kapoor"
		],
		"correct": "Devika Rani"
	  },
	  {
		"id": 14,
		"question": "Who was the first Indian to win an individual Olympic silver medal?",
		"options": [
		  "Rajyavardhan Singh Rathore",
		  "Vijay Kumar",
		  "Leander Paes",
		  "Abhinav Bindra"
		],
		"correct": "Rajyavardhan Singh Rathore"
	  },
	  {
		"id": 15,
		"question": "Who was the first Indian to receive the Ramon Magsaysay Award?",
		"options": [
		  "Vinoba Bhave",
		  "Mother Teresa",
		  "C. V. Raman",
		  "M. S. Subbulakshmi"
		],
		"correct": "Vinoba Bhave"
	  },
	  {
		"id": 16,
		"question": "Who was the first Indian to win the Pulitzer Prize?",
		"options": [
		  "Jhumpa Lahiri",
		  "Arundhati Roy",
		  "V. S. Naipaul",
		  "Amitav Ghosh"
		],
		"correct": "Jhumpa Lahiri"
	  },
	  {
		"id": 17,
		"question": "Who was the first Indian to receive the Ashoka Chakra?",
		"options": [
		  "Suhas Biswas",
		  "Neerja Bhanot",
		  "Neerja Mishra",
		  "Gajendra Singh Bisht"
		],
		"correct": "Suhas Biswas"
	  },
	  {
		"id": 18,
		"question": "Who was the first Indian to receive the Jnanpith Award?",
		"options": [
		  "G. Sankara Kurup",
		  "K. Shivaram Karanth",
		  "Birendra Kumar Bhattacharya",
		  "U. R. Ananthamurthy"
		],
		"correct": "G. Sankara Kurup"
	  },
	  {
		"id": 19,
		"question": "Who was the first Indian to win the Wimbledon singles title?",
		"options": [
		  "Mahesh Bhupathi",
		  "Leander Paes",
		  "Vijay Amritraj",
		  "Ramanathan Krishnan"
		],
		"correct": "Ramanathan Krishnan"
	  },
	  {
		"id": 20,
		"question": "Who was the first Indian to win the Bharat Ratna posthumously?",
		"options": [
		  "Lal Bahadur Shastri",
		  "Indira Gandhi",
		  "C. Rajagopalachari",
		  "Vinoba Bhave"
		],
		"correct": "Lal Bahadur Shastri"
	  },
	  {
		"id": 21,
		"question": "Who was the first Indian to win the Nobel Prize in Medicine?",
		"options": [
		  "Ronald Ross",
		  "Hargobind Khorana",
		  "Har Gobind Khorana",
		  "Venkatraman Ramakrishnan"
		],
		"correct": "Har Gobind Khorana"
	  },
	  {
		"id": 22,
		"question": "Who was the first Indian to receive the Padma Vibhushan?",
		"options": [
		  "Satyajit Ray",
		  "C. V. Raman",
		  "S. Radhakrishnan",
		  "Jawaharlal Nehru"
		],
		"correct": "C. V. Raman"
	  },
	  {
		"id": 23,
		"question": "Who was the first Indian to win the Rajiv Gandhi Khel Ratna Award?",
		"options": [
		  "Vishwanathan Anand",
		  "Sachin Tendulkar",
		  "Geet Sethi",
		  "Kapil Dev"
		],
		"correct": "Vishwanathan Anand"
	  },
	  {
		"id": 24,
		"question": "Who was the first Indian to win the Arjuna Award?",
		"options": [
		  "Devendra Jhajharia",
		  "Milkha Singh",
		  "Satish Pillai",
		  "Rajyavardhan Singh Rathore"
		],
		"correct": "Milkha Singh"
	  },
	  {
		"id": 25,
		"question": "Who was the first Indian to win the Man Booker International Prize?",
		"options": [
		  "Aravind Adiga",
		  "Amitav Ghosh",
		  "Salman Rushdie",
		  "Jhumpa Lahiri"
		],
		"correct": "Aravind Adiga"
	  },
	  {
		"id": 26,
		"question": "Who was the first Indian to receive the Param Vir Chakra posthumously?",
		"options": [
		  "Arun Khetarpal",
		  "Nirmal Jit Singh Sekhon",
		  "Vikram Batra",
		  "Sanjay Kumar"
		],
		"correct": "Arun Khetarpal"
	  },
	  {
		"id": 27,
		"question": "Who was the first Indian to receive the Victoria Cross?",
		"options": [
		  "Khudadad Khan",
		  "Baba Gurbachan Singh",
		  "Lance Naik Karam Singh",
		  "Nirmal Jit Singh Sekhon"
		],
		"correct": "Khudadad Khan"
	  },
	  {
		"id": 28,
		"question": "Who was the first Indian to win the ICC Cricketer of the Year award?",
		"options": [
		  "Rahul Dravid",
		  "Virender Sehwag",
		  "Sachin Tendulkar",
		  "Virat Kohli"
		],
		"correct": "Sachin Tendulkar"
	  },
	  {
		"id": 29,
		"question": "Who was the first Indian to win the National Film Award for Best Actor?",
		"options": [
		  "Dilip Kumar",
		  "Raj Kapoor",
		  "Amitabh Bachchan",
		  "Prithviraj Kapoor"
		],
		"correct": "Dilip Kumar"
	  },
	  {
		"id": 30,
		"question": "Who was the first Indian to win an individual Olympic bronze medal?",
		"options": [
		  "Karnam Malleswari",
		  "Sushil Kumar",
		  "Vijender Singh",
		  "Leander Paes"
		],
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 31,
		"question": "Who was the first Indian to win the Sahitya Akademi Award?",
		"options": [
		  "Tarashankar Bandopadhyay",
		  "Rabindranath Tagore",
		  "Mahadevi Verma",
		  "Premchand"
		],
		"correct": "Tarashankar Bandopadhyay"
	  },
	  {
		"id": 32,
		"question": "Who was the first Indian to win the World Chess Championship?",
		"options": [
		  "Viswanathan Anand",
		  "Vishwanathan Anand",
		  "P. Harikrishna",
		  "Pentala Harikrishna"
		],
		"correct": "Viswanathan Anand"
	  },
	  {
		"id": 33,
		"question": "Who was the first Indian to receive the Padma Shri?",
		"options": [
		  "K. N. Katju",
		  "Satyajit Ray",
		  "C. V. Raman",
		  "S. Radhakrishnan"
		],
		"correct": "K. N. Katju"
	  },
	  {
		"id": 34,
		"question": "Who was the first Indian to win the Arjuna Award for Athletics?",
		"options": [
		  "P. T. Usha",
		  "Milkha Singh",
		  "Dhyan Chand",
		  "Sardar Singh"
		],
		"correct": "Milkha Singh"
	  },
	  {
		"id": 35,
		"question": "Who was the first Indian to win the Rajiv Gandhi Khel Ratna Award for Athletics?",
		"options": [
		  "Viswanathan Anand",
		  "Abhinav Bindra",
		  "Sachin Tendulkar",
		  "Sushil Kumar"
		],
		"correct": "Abhinav Bindra"
	  },
	  {
		"id": 36,
		"question": "Who was the first Indian to receive the Arjuna Award for Athletics?",
		"options": [
		  "Gurbachan Singh Randhawa",
		  "Milkha Singh",
		  "Anju Bobby George",
		  "P. T. Usha"
		],
		"correct": "Gurbachan Singh Randhawa"
	  },
	  {
		"id": 37,
		"question": "Who was the first Indian to receive the Dhyan Chand Award?",
		"options": [
		  "Shankar Laxman",
		  "Abdul Aziz",
		  "Aslam Sher Khan",
		  "Bhagwat Subramaniam Chandrasekhar"
		],
		"correct": "Shankar Laxman"
	  },
	  {
		"id": 38,
		"question": "Who was the first Indian to receive the Padma Bhushan?",
		"options": [
		  "Satyajit Ray",
		  "C. V. Raman",
		  "S. Radhakrishnan",
		  "Jawaharlal Nehru"
		],
		"correct": "C. V. Raman"
	  },
	  {
		"id": 39,
		"question": "Who was the first Indian to win the Man Booker Prize?",
		"options": [
		  "Arundhati Roy",
		  "Salman Rushdie",
		  "Kiran Desai",
		  "Aravind Adiga"
		],
		"correct": "Arundhati Roy"
	  },
	  {
		"id": 40,
		"question": "Who was the first Indian to win the Rajiv Gandhi Khel Ratna Award for Hockey?",
		"options": [
		  "Dhanraj Pillay",
		  "Dhyan Chand",
		  "Viren Rasquinha",
		  "Bir Bahadur Chhetri"
		],
		"correct": "Dhanraj Pillay"
	  },
	  {
		"id": 41,
		"question": "Who was the first Indian to win the Arjuna Award for Hockey?",
		"options": [
		  "Dhanraj Pillay",
		  "Dhyan Chand",
		  "Sandeep Singh",
		  "Pargat Singh"
		],
		"correct": "Dhyan Chand"
	  },
	  {
		"id": 42,
		"question": "Who was the first Indian to win the Dronacharya Award?",
		"options": [
		  "O. M. Nambiar",
		  "Pullela Gopichand",
		  "Satpal Singh",
		  "M. P. Ganesh"
		],
		"correct": "O. M. Nambiar"
	  },
	  {
		"id": 43,
		"question": "Who was the first Indian to win the Rajiv Gandhi Khel Ratna Award for Badminton?",
		"options": [
		  "Prakash Padukone",
		  "Saina Nehwal",
		  "P. V. Sindhu",
		  "Aparna Popat"
		],
		"correct": "Prakash Padukone"
	  },
	  {
		"id": 44,
		"question": "Who was the first Indian to win the Arjuna Award for Badminton?",
		"options": [
		  "Syed Modi",
		  "Prakash Padukone",
		  "P. Gopichand",
		  "Saina Nehwal"
		],
		"correct": "Syed Modi"
	  },
	  {
		"id": 45,
		"question": "Who was the first Indian to receive the Rajiv Gandhi Khel Ratna Award for Boxing?",
		"options": [
		  "Vijender Singh",
		  "M. C. Mary Kom",
		  "Vikas Krishan Yadav",
		  "Sarita Devi"
		],
		"correct": "Vijender Singh"
	  },
	  {
		"id": 46,
		"question": "Who was the first Indian to receive the Arjuna Award for Boxing?",
		"options": [
		  "Vijender Singh",
		  "Mary Kom",
		  "Vikas Krishan Yadav",
		  "Dingko Singh"
		],
		"correct": "Dingko Singh"
	  },
	  {
		"id": 47,
		"question": "Who was the first Indian to win the Dronacharya Award for Boxing?",
		"options": [
		  "Gurbax Singh Sandhu",
		  "Mukesh Kumar",
		  "Satish Pillai",
		  "Vijender Singh Beniwal"
		],
		"correct": "Gurbax Singh Sandhu"
	  },
	  {
		"id": 48,
		"question": "Who was the first Indian to receive the Rajiv Gandhi Khel Ratna Award for Athletics?",
		"options": [
		  "Viswanathan Anand",
		  "P. T. Usha",
		  "Milkha Singh",
		  "Sachin Tendulkar"
		],
		"correct": "P. T. Usha"
	  },
	  {
		"id": 49,
		"question": "Who was the first Indian to receive the Arjuna Award for Athletics?",
		"options": [
		  "Milkha Singh",
		  "P. T. Usha",
		  "Sachin Tendulkar",
		  "Gurbachan Singh Randhawa"
		],
		"correct": "Gurbachan Singh Randhawa"
	  },
	  {
		"id": 50,
		"question": "Who was the first Indian to receive the Dronacharya Award for Athletics?",
		"options": [
		  "Om Prakash Bhardwaj",
		  "R. D. Singh",
		  "Satyanarayana Singh",
		  "O. M. Nambiar"
		],
		"correct": "O. M. Nambiar"
	  }
	]
   ;



  
  
  
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
