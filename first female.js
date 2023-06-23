//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");

let descriptionContainer = document.getElementById("ques-des");
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
		"question": "Who was the first Indian woman to win an Olympic medal?",
		"options": [
		  "Karnam Malleswari",
		  "P. T. Usha",
		  "Mary Kom",
		  "Saina Nehwal"
		],
		"description": "Karnam Malleswari won the bronze medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 2,
		"question": "Who was the first Indian woman to climb Mount Everest?",
		"options": [
		  "Bachendri Pal",
		  "Santosh Yadav",
		  "Arati Saha",
		  "Premlata Agarwal"
		],
		"description": "Bachendri Pal became the first Indian woman to summit Mount Everest on May 23, 1984.",
		"correct": "Bachendri Pal"
	  },
	  {
		"id": 3,
		"question": "Who was the first Indian woman to win the Miss World title?",
		"options": [
		  "Aishwarya Rai Bachchan",
		  "Priyanka Chopra",
		  "Sushmita Sen",
		  "Reita Faria"
		],
		"description": "Reita Faria became the first Indian woman to win the Miss World title in 1966.",
		"correct": "Reita Faria"
	  },
	  {
		"id": 4,
		"question": "Who was the first Indian woman to win an individual Olympic silver medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Sakshi Malik"
		],
		"description": "P. V. Sindhu won the silver medal in badminton at the 2016 Rio Olympics.",
		"correct": "P. V. Sindhu"
	  },
	  {
		"id": 5,
		"question": "Who was the first Indian woman to win a Grammy Award?",
		"options": [
		  "Anoushka Shankar",
		  "Lata Mangeshkar",
		  "Shreya Ghoshal",
		  "Tanvi Shah"
		],
		"description": "Tanvi Shah became the first Indian woman to win a Grammy Award in 2010 for her work on the song 'Jai Ho' from the film Slumdog Millionaire.",
		"correct": "Tanvi Shah"
	  },
	  {
		"id": 6,
		"question": "Who was the first Indian woman to win a gold medal at the Asian Games?",
		"options": [
		  "P. T. Usha",
		  "Kamaljit Sandhu",
		  "Karnam Malleswari",
		  "Hima Das"
		],
		"description": "Kamaljit Sandhu won the gold medal in the 400m race at the 1970 Bangkok Asian Games.",
		"correct": "Kamaljit Sandhu"
	  },
	  {
		"id": 7,
		"question": "Who was the first Indian woman to win the Booker Prize?",
		"options": [
		  "Arundhati Roy",
		  "Arundhati Subramaniam",
		  "Anita Desai",
		  "Kiran Desai"
		],
		"description": "Arundhati Roy won the Booker Prize in 1997 for her novel 'The God of Small Things'.",
		"correct": "Arundhati Roy"
  
  
	  },
	  {
		"id": 8,
		"question": "Who was the first Indian woman to win an individual Olympic gold medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Karnam Malleswari"
		],
		"description": "Karnam Malleswari won the gold medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 9,
		"question": "Who was the first Indian woman to win the Nobel Peace Prize?",
		"options": [
		  "Indira Gandhi",
		  "Mother Teresa",
		  "Aung San Suu Kyi",
		  "Malala Yousafzai"
		],
		"description": "Mother Teresa, an ethnic Albanian, was an Indian citizen and won the Nobel Peace Prize in 1979 for her humanitarian work.",
		"correct": "Mother Teresa"
	  },
	  {
		"id": 10,
		"question": "Who was the first Indian woman to win the Bharat Ratna award?",
		"options": [
		  "Indira Gandhi",
		  "Lata Mangeshkar",
		  "Sarojini Naidu",
		  "Mother Teresa"
		],
		"description": "Indira Gandhi, the first and only female Prime Minister of India, was posthumously awarded the Bharat Ratna in 1971.",
		"correct": "Indira Gandhi"
	  },
	  {
		"id": 11,
		"question": "Who was the first Indian woman to win an individual Olympic bronze medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mary Kom",
		  "Karnam Malleswari"
		],
		"description": "Mary Kom won the bronze medal in boxing at the 2012 London Olympics.",
		"correct": "Mary Kom"
	  },
	  {
		"id": 12,
		"question": "Who was the first Indian woman to win the Miss Universe title?",
		"options": [
		  "Sushmita Sen",
		  "Lara Dutta",
		  "Aishwarya Rai Bachchan",
		  "Diya Mirza"
		],
		"description": "Sushmita Sen won the Miss Universe title in 1994, becoming the first Indian woman to do so.",
		"correct": "Sushmita Sen"
	  },
	  {
		"id": 13,
		"question": "Who was the first Indian woman to win an individual Olympic gold medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Karnam Malleswari"
		],
		"description": "Karnam Malleswari won the gold medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 14,
		"question": "Who was the first Indian woman to win the Nobel Prize in Literature?",
		"options": [
		  "Arundhati Roy",
		  "Sarojini Naidu",
		  "Anita Desai",
		  "Aung San Suu Kyi"
		],
		"description": "Sarojini Naidu, also known as the Nightingale of India, was the first Indian woman to win the Nobel Prize in Literature in 1913.",
		"correct": "Sarojini Naidu"
	  },
	 
  
   {
		"id": 15,
		"question": "Who was the first Indian woman to win the Rajiv Gandhi Khel Ratna award?",
		"options": [
		  "Karnam Malleswari",
		  "P. T. Usha",
		  "Saina Nehwal",
		  "Mary Kom"
		],
		"description": "Karnam Malleswari was the first Indian woman to win the Rajiv Gandhi Khel Ratna award in 1995.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 16,
		"question": "Who was the first Indian woman to win an individual Olympic silver medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Sakshi Malik"
		],
		"description": "P. V. Sindhu won the silver medal in badminton at the 2016 Rio Olympics.",
		"correct": "P. V. Sindhu"
	  },
	  {
		"id": 17,
		"question": "Who was the first Indian woman to win the Miss World title?",
		"options": [
		  "Aishwarya Rai Bachchan",
		  "Priyanka Chopra",
		  "Sushmita Sen",
		  "Reita Faria"
		],
		"description": "Reita Faria became the first Indian woman to win the Miss World title in 1966.",
		"correct": "Reita Faria"
	  },
	  {
		"id": 18,
		"question": "Who was the first Indian woman to win an Olympic medal?",
		"options": [
		  "Karnam Malleswari",
		  "P. T. Usha",
		  "Mary Kom",
		  "Saina Nehwal"
		],
		"description": "Karnam Malleswari won the bronze medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 19,
		"question": "Who was the first Indian woman to win a Grammy Award?",
		"options": [
		  "Anoushka Shankar",
		  "Lata Mangeshkar",
		  "Shreya Ghoshal",
		  "Tanvi Shah"
		],
		"description": "Tanvi Shah became the first Indian woman to win a Grammy Award in 2010 for her work on the song 'Jai Ho' from the film Slumdog Millionaire.",
		"correct": "Tanvi Shah"
	  },
	  {
		"id": 20,
		"question": "Who was the first Indian woman to win a gold medal at the Asian Games?",
		"options": [
		  "P. T. Usha",
		  "Kamaljit Sandhu",
		  "Karnam Malleswari",
		  "Hima Das"
		],
		"description": "Kamaljit Sandhu won the gold medal in the 400m race at the 1970 Bangkok Asian Games.",
		"correct": "Kamaljit Sandhu"
	  },
	  {
		"id": 21,
		"question": "Who was the first Indian woman to win the Booker Prize?",
		"options": [
		  "Arundhati Roy",
		  "Arundhati Subramaniam",
		  "Anita Desai",
		  "Kiran Desai"
		],
		"description": "Arundhati Roy won the Booker Prize in 1997 for her novel 'The God of Small Things'.",
		"correct": "Arundhati Roy"
	  },
	  {
		"id": 22,
		"question": "Who was the first Indian woman to win an individual Olympic gold medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Karnam Malleswari"
		],
		"description": "Karnam Malleswari won the gold medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 23,
		"question": "Who was the first Indian woman to win the Nobel Peace Prize?",
		"options": [
		  "Indira Gandhi",
		  "Mother Teresa",
		  "Aung San Suu Kyi",
		  "Malala Yousafzai"
		],
		"description": "Mother Teresa, an ethnic Albanian, was an Indian citizen and won the Nobel Peace Prize in 1979 for her humanitarian work.",
		"correct": "Mother Teresa"
	  },
	  {
		"id": 24,
		"question": "Who was the first Indian woman to win the Bharat Ratna award?",
		"options": [
		  "Indira Gandhi",
		  "Lata Mangeshkar",
		  "Sarojini Naidu",
		  "Mother Teresa"
		],
		"description": "Indira Gandhi, the first and only female Prime Minister of India, was posthumously awarded the Bharat Ratna in 1971.",
		"correct": "Indira Gandhi"
	  },
	  {
		"id": 25,
		"question": "Who was the first Indian woman to win an individual Olympic bronze medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mary Kom",
		  "Karnam Malleswari"
		],
		"description": "Mary Kom won the bronze medal in boxing at the 2012 London Olympics.",
		"correct": "Mary Kom"
	  },
	  {
		"id": 26,
		"question": "Who was the first Indian woman to win the Miss Universe title?",
		"options": [
		  "Sushmita Sen",
		  "Lara Dutta",
		  "Aishwarya Rai Bachchan",
		  "Diya Mirza"
		],
		"description": "Sushmita Sen won the Miss Universe title in 1994, becoming the first Indian woman to do so.",
		"correct": "Sushmita Sen"
	  },
	  {
		"id": 27,
		"question": "Who was the first Indian woman to win an individual Olympic gold medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Karnam Malleswari"
		],
		"description": "Karnam Malleswari won the gold medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 28,
		"question": "Who was the first Indian woman to win the Nobel Prize in Literature?",
		"options": [
		  "Arundhati Roy",
		  "Sarojini Naidu",
		  "Anita Desai",
		  "Aung San Suu Kyi"
		],
		"description": "Sarojini Naidu, also known as the Nightingale of India, was the first Indian woman to win the Nobel Prize in Literature in 1913.",
		"correct": "Sarojini Naidu"
	  },
	  {
		"id": 29,
		"question": "Who was the first Indian woman to win the Rajiv Gandhi Khel Ratna award?",
		"options": [
		  "Karnam Malleswari",
		  "P. T. Usha",
		  "Saina Nehwal",
		  "Mary Kom"
		],
		"description": "Karnam Malleswari was the first Indian woman to win the Rajiv Gandhi Khel Ratna award in 1995.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 30,
		"question": "Who was the first Indian woman to win an individual Olympic silver medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Sakshi Malik"
		],
		"description": "P. V. Sindhu won the silver medal in badminton at the 2016 Rio Olympics.",
		"correct": "P. V. Sindhu"
	  },
	  {
		"id": 31,
		"question": "Who was the first Indian woman to win the Miss World title?",
		"options": [
		  "Aishwarya Rai Bachchan",
		  "Priyanka Chopra",
		  "Sushmita Sen",
		  "Reita Faria"
		],
		"description": "Reita Faria became the first Indian woman to win the Miss World title in 1966.",
		"correct": "Reita Faria"
	  },
	  {
		"id": 32,
		"question": "Who was the first Indian woman to win an Olympic medal?",
		"options": [
		  "Karnam Malleswari",
		  "P. T. Usha",
		  "Mary Kom",
		  "Saina Nehwal"
		],
		"description": "Karnam Malleswari won the bronze medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 33,
		"question": "Who was the first Indian woman to win a Grammy Award?",
		"options": [
		  "Anoushka Shankar",
		  "Lata Mangeshkar",
		  "Shreya Ghoshal",
		  "Tanvi Shah"
		],
		"description": "Tanvi Shah became the first Indian woman to win a Grammy Award in 2010 for her work on the song 'Jai Ho' from the film Slumdog Millionaire.",
		"correct": "Tanvi Shah"
	  },
	  {
		"id": 34,
		"question": "Who was the first Indian woman to win a gold medal at the Asian Games?",
		"options": [
		  "P. T. Usha",
		  "Kamaljit Sandhu",
		  "Karnam Malleswari",
		  "Hima Das"
		],
		"description": "Kamaljit Sandhu won the gold medal in the 400m race at the 1970 Bangkok Asian Games.",
		"correct": "Kamaljit Sandhu"
	  },
	  {
		"id": 35,
		"question": "Who was the first Indian woman to win the Booker Prize?",
		"options": [
		  "Arundhati Roy",
		  "Arundhati Subramaniam",
		  "Anita Desai",
		  "Kiran Desai"
		],
		"description": "Arundhati Roy won the Booker Prize in 1997 for her novel 'The God of Small Things'.",
	   
  
   "correct": "Arundhati Roy"
	  },
	  {
		"id": 36,
		"question": "Who was the first Indian woman to win an individual Olympic gold medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Karnam Malleswari"
		],
		"description": "Karnam Malleswari won the gold medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 37,
		"question": "Who was the first Indian woman to win the Nobel Peace Prize?",
		"options": [
		  "Indira Gandhi",
		  "Mother Teresa",
		  "Aung San Suu Kyi",
		  "Malala Yousafzai"
		],
		"description": "Mother Teresa, an ethnic Albanian, was an Indian citizen and won the Nobel Peace Prize in 1979 for her humanitarian work.",
		"correct": "Mother Teresa"
	  },
	  {
		"id": 38,
		"question": "Who was the first Indian woman to win the Bharat Ratna award?",
		"options": [
		  "Indira Gandhi",
		  "Lata Mangeshkar",
		  "Sarojini Naidu",
		  "Mother Teresa"
		],
		"description": "Indira Gandhi, the first and only female Prime Minister of India, was posthumously awarded the Bharat Ratna in 1971.",
		"correct": "Indira Gandhi"
	  },
	  {
		"id": 39,
		"question": "Who was the first Indian woman to win an individual Olympic bronze medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mary Kom",
		  "Karnam Malleswari"
		],
		"description": "Mary Kom won the bronze medal in boxing at the 2012 London Olympics.",
		"correct": "Mary Kom"
	  },
	  {
		"id": 40,
		"question": "Who was the first Indian woman to win the Miss Universe title?",
		"options": [
		  "Sushmita Sen",
		  "Lara Dutta",
		  "Aishwarya Rai Bachchan",
		  "Diya Mirza"
		],
		"description": "Sushmita Sen won the Miss Universe title in 1994, becoming the first Indian woman to do so.",
		"correct": "Sushmita Sen"
	  },
	  {
		"id": 41,
		"question": "Who was the first Indian woman to win an individual Olympic gold medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Karnam Malleswari"
		],
		"description": "Karnam Malleswari won the gold medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 42,
		"question": "Who was the first Indian woman to win the Nobel Prize in Literature?",
		"options": [
		  "Arundhati Roy",
		  "Sarojini Naidu",
		  "Anita Desai",
		  "Aung San Suu Kyi"
		],
		"description": "Sarojini Naidu, also known as the Nightingale of India, was the first Indian woman to win the Nobel Prize in Literature in 1913.",
		"correct": "Sarojini Naidu"
	  },
	  {
		"id": 43,
		"question": "Who was the first Indian woman to win the Rajiv Gandhi Khel Ratna award?",
		"options": [
		  "Karnam Malleswari",
		  "P. T. Usha",
		  "Saina Nehwal",
		  "Mary Kom"
		],
		"description": "Karnam Malleswari was the first Indian woman to win the Rajiv Gandhi Khel Ratna award in 1995.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 44,
		"question": "Who was the first Indian woman to win an individual Olympic silver medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Sakshi Malik"
		],
		"description": "P. V. Sindhu won the silver medal in badminton at the 2016 Rio Olympics.",
		"correct": "P. V. Sindhu"
	  },
	  {
		"id": 45,
		"question": "Who was the first Indian woman to win the Miss World title?",
		"options": [
		  "Aishwarya Rai Bachchan",
		  "Priyanka Chopra",
		  "Sushmita Sen",
		  "Reita Faria"
		],
		"description": "Reita Faria became the first Indian woman to win the Miss World title in 1966.",
		"correct": "Reita Faria"
	  },
	  {
		"id": 46,
		"question": "Who was the first Indian woman to win an Olympic medal?",
		"options": [
		  "Karnam Malleswari",
		  "P. T. Usha",
		  "Mary Kom",
		  "Saina Nehwal"
		],
		"description": "Karnam Malleswari won the bronze medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  },
	  {
		"id": 47,
		"question": "Who was the first Indian woman to win a Grammy Award?",
		"options": [
		  "Anoushka Shankar",
		  "Lata Mangeshkar",
		  "Shreya Ghoshal",
		  "Tanvi Shah"
		],
		"description": "Tanvi Shah became the first Indian woman to win a Grammy Award in 2010 for her work on the song 'Jai Ho' from the film Slumdog Millionaire.",
		"correct": "Tanvi Shah"
	  },
	  {
		"id": 48,
		"question": "Who was the first Indian woman to win a gold medal at the Asian Games?",
		"options": [
		  "P. T. Usha",
		  "Kamaljit Sandhu",
		  "Karnam Malleswari",
		  "Hima Das"
		],
		"description": "Kamaljit Sandhu won the gold medal in the 400m race at the 1970 Bangkok Asian Games.",
		"correct": "Kamaljit Sandhu"
	  },
	  {
		"id": 49,
		"question": "Who was the first Indian woman to win the Booker Prize?",
		"options": [
		  "Arundhati Roy",
		  "Arundhati Subramaniam",
		  "Anita Desai",
		  "Kiran Desai"
		],
		"description": "Arundhati Roy won the Booker Prize in 1997 for her novel 'The God of Small Things'.",
		"correct": "Arundhati Roy"
	  },
	  {
		"id": 50,
		"question": "Who was the first Indian woman to win an individual Olympic gold medal?",
		"options": [
		  "P. V. Sindhu",
		  "Saina Nehwal",
		  "Mirabai Chanu",
		  "Karnam Malleswari"
		],
		"description": "Karnam Malleswari won the gold medal in weightlifting at the 2000 Sydney Olympics.",
		"correct": "Karnam Malleswari"
	  }
]
   ;



  
  
  
//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
  descriptionContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
	descriptionContainer.classList.add("hide");

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
	//descriptionContainer.innerHTML=i.description;
    div.appendChild(question_DIV);
	var des = i.description;
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
  descriptionContainer.innerHTML = quizArray[questionCount].description;
  descriptionContainer.classList.remove("hide");
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
  descriptionContainer.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};