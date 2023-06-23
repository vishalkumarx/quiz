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

const quizArray = [ {
		"id": 1,
		"question": "Which World Heritage Site in India is known for its iconic white marble architecture?",
		"options": [
		  "Taj Mahal",
		  "Qutub Minar",
		  "Red Fort",
		  "Hampi"
		],
		"description": "The Taj Mahal is a UNESCO World Heritage Site renowned for its stunning white marble architecture and considered one of the Seven Wonders of the World.",
		"correct": "Taj Mahal"
	  },
	  {
		"id": 2,
		"question": "Which World Heritage Site in India is an ancient cave temple complex?",
		"options": [
		  "Ajanta Caves",
		  "Ellora Caves",
		  "Elephanta Caves",
		  "Badami Caves"
		],
		"description": "The Ajanta Caves are a UNESCO World Heritage Site known for their ancient Buddhist cave paintings and sculptures.",
		"correct": "Ajanta Caves"
	  },
	  {
		"id": 3,
		"question": "Which World Heritage Site in India is a group of rock-cut monuments?",
		"options": [
		  "Mahabalipuram",
		  "Khajuraho",
		  "Mamallapuram",
		  "Aihole"
		],
		"description": "The Ellora Caves are a UNESCO World Heritage Site featuring impressive rock-cut architecture representing multiple religions, including Buddhism, Hinduism, and Jainism.",
		"correct": "Ellora Caves"
	  },
	  {
		"id": 4,
		"question": "Which World Heritage Site in India is known for its intricate carvings depicting various deities?",
		"options": [
		  "Khajuraho",
		  "Konark Sun Temple",
		  "Brihadeeswarar Temple",
		  "Meenakshi Temple"
		],
		"description": "The Khajuraho Group of Monuments is a UNESCO World Heritage Site famous for its intricately carved sculptures, especially those depicting various aspects of human life and deities.",
		"correct": "Khajuraho"
	  },
	  {
		"id": 5,
		"question": "Which World Heritage Site in India is a rock-cut cave temple dedicated to Lord Shiva?",
		"options": [
		  "Elephanta Caves",
		  "Amber Fort",
		  "Kailasa Temple",
		  "Sanchi Stupa"
		],
		"description": "The Elephanta Caves, situated on Elephanta Island near Mumbai, are a UNESCO World Heritage Site featuring rock-cut cave temples dedicated to Lord Shiva.",
		"correct": "Elephanta Caves"
	  },
	  {
		"id": 6,
		"question": "Which World Heritage Site in India is a historic city known for its well-preserved ruins?",
		"options": [
		  "Hampi",
		  "Fatehpur Sikri",
		  "Bijapur",
		  "Golconda Fort"
		],
		"description": "Hampi is a UNESCO World Heritage Site recognized for its well-preserved ruins of the Vijayanagara Empire, showcasing the rich architectural and cultural heritage of South India.",
		"correct": "Hampi"
	  },
	  {
		"id": 7,
		"question": "Which World Heritage Site in India is a fort complex located in the Pink City?",
		"options": [
		  "Jaipur City Palace",
		  "Mehrangarh Fort",
		  "Agra Fort",
		  "Amber Fort"
		],
		"description": "The Amber Fort, also known as Amer Fort, is a UNESCO World Heritage Site situated in Jaipur. It is renowned for its blend of Hindu and Rajput architectural styles.",
		"correct": "Amber Fort"
	  },
	  {
		"id": 8,
		"question": "Which World Heritage Site in India is an ancient city famous for its well-preserved stepwells?",
		"options": [
		  "Rani Ki Vav",
		  "Jantar Mantar",
		  "Chittorgarh Fort",
		  "Ranthambore Fort"
		],
		"description": "Rani Ki Vav, located in Gujarat, is a UNESCO World Heritage Site known for its intricately designed stepwell, showcasing exceptional craftsmanship and architectural brilliance.",
		"correct": "Rani Ki Vav"
	  },
	  {
		"id": 9,
		"question": "Which World Heritage Site in India is a group of monolithic rock-cut temples?",
		"options": [
		  "Mahabalipuram",
		  "Kanchipuram",
		  "Mamallapuram",
		  "Rameswaram"
		],
		"description": "The Mahabalipuram Group of Monuments, also known as Mamallapuram, is a UNESCO World Heritage Site featuring intricately carved rock-cut temples and structures.",
		"correct": "Mahabalipuram"
	  },
	  {
		"id": 10,
		"question": "Which World Heritage Site in India is a hill fort known for its intricate carvings and water management system?",
		"options": [
		  "Kumbhalgarh Fort",
		  "Junagarh Fort",
		  "Gwalior Fort",
		  "Chittorgarh Fort"
		],
		"description": "The Chittorgarh Fort in Rajasthan is a UNESCO World Heritage Site recognized for its massive structure, intricate carvings, and sophisticated water management system.",
		"correct": "Chittorgarh Fort"
	  },
	  {
		"id": 11,
		"question": "Which World Heritage Site in India is a group of Buddhist monuments with an iconic stupa?",
		"options": [
		  "Sanchi Stupa",
		  "Buddhist Monuments at Sarnath",
		  "Dhamekh Stupa",
		  "Nalanda University"
		],
		"description": "The Sanchi Stupa, located in Madhya Pradesh, is a UNESCO World Heritage Site renowned for its Buddhist monuments, including the Great Stupa, which is one of the oldest stone structures in India.",
		"correct": "Sanchi Stupa"
	  },
	  {
		"id": 12,
		"question": "Which World Heritage Site in India is a group of temples dedicated to Lord Shiva?",
		"options": [
		  "Kedarnath Temple",
		  "Omkareshwar Temple",
		  "Brihadeeswarar Temple",
		  "Mahakaleshwar Temple"
		],
		"description": "The Brihadeeswarar Temple, also known as the Big Temple, is a UNESCO World Heritage Site situated in Thanjavur, Tamil Nadu. It is dedicated to Lord Shiva and features magnificent Dravidian architecture.",
		"correct": "Brihadeeswarar Temple"
	  },
	  {
		"id": 13,
		"question": "Which World Heritage Site in India is a group of palaces, gardens, and temples built during the reign of the Mughals?",
		"options": [
		  "Red Fort",
		  "Agra Fort",
		  "Fatehpur Sikri",
		  "Humayun's Tomb"
		],
		"description": "Fatehpur Sikri, located near Agra, is a UNESCO World Heritage Site renowned for its well-preserved palaces, gardens, and mosques. It was built during the reign of Emperor Akbar.",
		"correct": "Fatehpur Sikri"
	  },
	  {
		"id": 14,
		"question": "Which World Heritage Site in India is an archaeological site known for its Great Stupa?",
		"options": [
		  "Sanchi Stupa",
		  "Nalanda University",
		  "Ellora Caves",
		  "Buddhist Monuments at Sarnath"
		],
		"description": "Buddhist Monuments at Sarnath, located near Varanasi, is a UNESCO World Heritage Site famous for its Great Stupa and other Buddhist structures that hold historical and religious significance.",
		"correct": "Buddhist Monuments at Sarnath"
	  },
	  {
		"id": 15,
		"question": "Which World Heritage Site in India is a group of cave temples dedicated to Lord Shiva?",
		"options": [
		  "Ellora Caves",
		  "Ajanta Caves",
		  "Elephanta Caves",
		  "Amarnath Cave Temple"
		],
		"description": "The Ellora Caves, situated in Maharashtra, are a UNESCO World Heritage Site featuring rock-cut cave temples dedicated to various religions, including Hinduism, Buddhism, and Jainism.",
		"correct": "Ellora Caves"
	  },
	  {
		"id": 16,
		"question": "Which World Heritage Site in India is a group of monuments known for its Indo-Islamic architecture?",
		"options": [
		  "Qutub Minar",
		  "Mehrangarh Fort",
		  "Red Fort",
		  "Bijapur"
		],
		"description": "The Qutub Minar complex, located in Delhi, is a UNESCO World Heritage Site featuring several historically significant structures showcasing impressive Indo-Islamic architecture.",
		"correct": "Qutub Minar"
	  },
	  {
		"id": 17,
		"question": "Which World Heritage Site in India is a temple dedicated to the Sun God?",
		"options": [
		  "Konark Sun Temple",
		  "Sun Temple at Modhera",
		  "Sun Temple at Konarka",
		  "Sun Temple at Martand"
		],
		"description": "The Konark Sun Temple, situated in Odisha, is a UNESCO World Heritage Site known for its architectural grandeur and intricate stone carvings depicting the Sun God.",
		"correct": "Konark Sun Temple"
	  },
	  {
		"id": 18,
		"question": "Which World Heritage Site in India is a group of rock-cut cave temples?",
		"options": [
		  "Ellora Caves",
		  "Elephanta Caves",
		  "Badami Caves",
		  "Kailasa Temple"
		],
		"description": "The Elephanta Caves, located on Elephanta Island near Mumbai, are a UNESCO World Heritage Site featuring rock-cut cave temples dedicated to Lord Shiva.",
		"correct": "Elephanta Caves"
	  },
	  {
		"id": 19,
		"question": "Which World Heritage Site in India is an ancient university ruins known for its Buddhist influence?",
		"options": [
		  "Nalanda University",
		  "Takht-i-Bahi",
		  "Konark Sun Temple",
		  "Buddhist Monuments at Sarnath"
		],
		"description": "Nalanda University, situated in Bihar, is a UNESCO World Heritage Site recognized for its ancient ruins of a renowned Buddhist learning center.",
		"correct": "Nalanda University"
	  },
	  {
		"id": 20,
		"question": "Which World Heritage Site in India is an archaeological site with remnants of an ancient city?",
		"options": [
		  "Hampi",
		  "Mamallapuram",
		  "Fatehpur Sikri",
		  "Lothal"
		],
		"description": "Lothal, located in Gujarat, is a UNESCO World Heritage Site known for its well-preserved remnants of an ancient Indus Valley Civilization city.",
		"correct": "Lothal"
	  },
	  {
		"id": 21,
		"question": "Which World Heritage Site in India is a fort known for its magnificent architecture and palaces?",
		"options": [
		  "Amber Fort",
		  "Golconda Fort",
		  "Jaisalmer Fort",
		  "Junagarh Fort"
		],
		"description": "Junagarh Fort, situated in Bikaner, Rajasthan, is a UNESCO World Heritage Site recognized for its impressive architecture, stunning palaces, and historical significance.",
		"correct": "Junagarh Fort"
	  },
	  {
		"id": 22,
		"question": "Which World Heritage Site in India is a group of churches and convents representing Portuguese colonial architecture?",
		"options": [
		  "Churches and Convents of Goa",
		  "Champaner-Pavagadh Archaeological Park",
		  "Hampi",
		  "Mahabodhi Temple Complex"
		],
		"description": "The Churches and Convents of Goa, located in Goa, are a UNESCO World Heritage Site featuring significant examples of Portuguese colonial architecture and religious heritage.",
		"correct": "Churches and Convents of Goa"
	  },
	  {
		"id": 23,
		"question": "Which World Heritage Site in India is a temple dedicated to Lord Vishnu?",
		"options": [
		  "Meenakshi Temple",
		  "Tirumala Venkateswara Temple",
		  "Brihadeeswarar Temple",
		  "Ramanathaswamy Temple"
		],
		"description": "The Tirumala Venkateswara Temple, situated in Andhra Pradesh, is a renowned Hindu temple and a UNESCO World Heritage Site dedicated to Lord Vishnu.",
		"correct": "Tirumala Venkateswara Temple"
	  },
	  {
		"id": 24,
		"question": "Which World Heritage Site in India is a group of rock-cut caves known for their intricate carvings?",
		"options": [
		  "Ajanta Caves",
		  "Ellora Caves",
		  "Elephanta Caves",
		  "Badami Caves"
		],
		"description": "The Ajanta Caves, located in Maharashtra, are a UNESCO World Heritage Site renowned for their rock-cut cave temples with elaborate sculptures and paintings.",
		"correct": "Ajanta Caves"
	  },
	  {
		"id": 25,
		"question": "Which World Heritage Site in India is a complex of tombs known for its Persian and Indian architectural styles?",
		"options": [
		  "Humayun's Tomb",
		  "Qutub Minar",
		  "Taj Mahal",
		  "Fatehpur Sikri"
		],
		"description": "Humayun's Tomb, situated in Delhi, is a UNESCO World Heritage Site and a magnificent mausoleum known for its Persian and Indian architectural fusion.",
		"correct": "Humayun's Tomb"
	  },
	  {
		"id": 26,
		"question": "Which World Heritage Site in India is a group of monolithic temples carved out of a single rock?",
		"options": [
		  "Mamallapuram",
		  "Mahabalipuram",
		  "Mahakuta",
		  "Elephanta Caves"
		],
		"description": "Mahabalipuram, also known as Mamallapuram, is a UNESCO World Heritage Site famous for its monolithic rock-cut temples, including the iconic Shore Temple.",
		"correct": "Mahabalipuram"
	  },
	  {
		"id": 27,
		"question": "Which World Heritage Site in India is a fort known for its strategic location and impressive architecture?",
		"options": [
		  "Golconda Fort",
		  "Chittorgarh Fort",
		  "Amber Fort",
		  "Agra Fort"
		],
		"description": "Golconda Fort, located in Hyderabad, is a UNESCO World Heritage Site recognized for its strategic position, impressive architecture, and advanced acoustics system.",
		"correct": "Golconda Fort"
	  },
	  {
		"id": 28,
		"question": "Which World Heritage Site in India is a group of historic Buddhist monastic complexes?",
		"options": [
		  "Buddhist Monuments at Sarnath",
		  "Mahabodhi Temple Complex",
		  "Ajanta Caves",
		  "Nalanda University"
		],
		"description": "The Mahabodhi Temple Complex, situated in Bodh Gaya, Bihar, is a UNESCO World Heritage Site and a significant pilgrimage site for Buddhists, marking the place where Gautama Buddha attained enlightenment.",
		"correct": "Mahabodhi Temple Complex"
	  },
	  {
		"id": 29,
		"question": "Which World Heritage Site in India is a group of palaces, gardens, and lakes built during the reign of the Rajputs?",
		"options": [
		  "City Palace, Jaipur",
		  "Lake Palace, Udaipur",
		  "Umaid Bhawan Palace, Jodhpur",
		  "Mysore Palace, Mysore"
		],
		"description": "The City Palace in Jaipur, Rajasthan, is a UNESCO World Heritage Site featuring a magnificent complex of palaces, gardens, courtyards, and museums.",
		"correct": "City Palace, Jaipur"
	  },
	  {
		"id": 30,
		"question": "Which World Heritage Site in India is an ancient Buddhist site known for its massive stupa?",
		"options": [
		  "Sanchi Stupa",
		  "Dhamekh Stupa",
		  "Rani Ki Vav",
		  "Great Living Chola Temples"
		],
		"description": "Dhamekh Stupa, located in Sarnath near Varanasi, is a UNESCO World Heritage Site known for its massive cylindrical-shaped stupa and its association with Gautama Buddha.",
		"correct": "Dhamekh Stupa"
	  },
	  {
		"id": 31,
		"question": "Which World Heritage Site in India is a group of palaces, pavilions, and gardens?",
		"options": [
		  "Red Fort",
		  "Agra Fort",
		  "Mehrangarh Fort",
		  "Jaisalmer Fort"
		],
		"description": "The Red Fort, situated in Delhi, is a UNESCO World Heritage Site known for its impressive red sandstone architecture, palaces, pavilions, and well-maintained gardens.",
		"correct": "Red Fort"
	  },
	  {
		"id": 32,
		"question": "Which World Heritage Site in India is an ancient astronomical observatory?",
		"options": [
		  "Jantar Mantar",
		  "Qutub Minar",
		  "Hawa Mahal",
		  "Gol Gumbaz"
		],
		"description": "Jantar Mantar, located in Jaipur, is a UNESCO World Heritage Site known for its collection of architectural astronomical instruments and observatories.",
		"correct": "Jantar Mantar"
	  },
	  {
		"id": 33,
		"question": "Which World Heritage Site in India is a group of temples known for their erotic sculptures?",
		"options": [
		  "Khajuraho Group of Monuments",
		  "Elephanta Caves",
		  "Brihadeeswarar Temple",
		  "Hampi"
		],
		"description": "The Khajuraho Group of Monuments, situated in Madhya Pradesh, is a UNESCO World Heritage Site renowned for its stunning temples adorned with intricate and explicit carvings.",
		"correct": "Khajuraho Group of Monuments"
	  },
	  {
		"id": 34,
		"question": "Which World Heritage Site in India is a group of Hindu and Jain temples known for their intricate stone carvings?",
		"options": [
		  "Khajuraho Group of Monuments",
		  "Brihadeeswarar Temple",
		  "Rani Ki Vav",
		  "Group of Monuments at Pattadakal"
		],
		"description": "The Group of Monuments at Pattadakal, located in Karnataka, is a UNESCO World Heritage Site featuring a collection of beautifully carved Hindu and Jain temples showcasing the architectural styles of the Chalukya dynasty.",
		"correct": "Group of Monuments at Pattadakal"
	  },
	  {
		"id": 35,
		"question": "Which World Heritage Site in India is a group of rock-cut caves known for their Buddhist art and architecture?",
		"options": [
		  "Ajanta Caves",
		  "Ellora Caves",
		  "Badami Caves",
		  "Elephanta Caves"
		],
		"description": "The Badami Caves, situated in Karnataka, are a UNESCO World Heritage Site featuring rock-cut caves adorned with intricate sculptures and murals reflecting the art and architecture of the Chalukya dynasty.",
		"correct": "Badami Caves"
	  },
	  {
		"id": 36,
		"question": "Which World Heritage Site in India is a group of temples dedicated to Lord Shiva?",
		"options": [
		  "Kailasa Temple",
		  "Ramanathaswamy Temple",
		  "Kedarnath Temple",
		  "Omkareshwar Temple"
		],
		"description": "The Kailasa Temple, located in Ellora, Maharashtra, is a UNESCO World Heritage Site renowned for its remarkable rock-cut architecture dedicated to Lord Shiva.",
		"correct": "Kailasa Temple"
	  },
	  {
		"id": 37,
		"question": "Which World Heritage Site in India is a group of temples known for their architectural grandeur and intricate carvings?",
		"options": [
		  "Hampi",
		  "Mahabalipuram",
		  "Mamallapuram",
		  "Kanchipuram"
		],
		"description": "Hampi, situated in Karnataka, is a UNESCO World Heritage Site famous for its well-preserved ruins of temples and other structures showcasing the architectural grandeur of the Vijayanagara Empire.",
		"correct": "Hampi"
	  },
	  {
		"id": 38,
		"question": "Which World Heritage Site in India is a hill fort known for its impressive architecture and strategic location?",
		"options": [
		  "Raigad Fort",
		  "Kumbhalgarh Fort",
		  "Ranthambore Fort",
		  "Gwalior Fort"
		],
		"description": "Kumbhalgarh Fort, situated in Rajasthan, is a UNESCO World Heritage Site renowned for its massive fortifications, intricate architecture, and panoramic views of the surrounding landscape.",
		"correct": "Kumbhalgarh Fort"
	  },
	  {
		"id": 39,
		"question": "Which World Heritage Site in India is an ancient stepwell known for its intricate sculptures and carvings?",
		"options": [
		  "Rani Ki Vav",
		  "Chand Baori",
		  "Jama Masjid",
		  "Nalanda University"
		],
		"description": "Rani Ki Vav, located in Gujarat, is a UNESCO World Heritage Site and an intricately designed stepwell featuring remarkable sculptures, carvings, and a complex system for water conservation.",
		"correct": "Rani Ki Vav"
	  },
	  {
		"id": 40,
		"question": "Which World Heritage Site in India is a group of rock-cut Buddhist caves known for their chaityas and viharas?",
		"options": [
		  "Ajanta Caves",
		  "Ellora Caves",
		  "Buddhist Monuments at Sarnath",
		  "Badami Caves"
		],
		"description": "The Ellora Caves, situated in Maharashtra, are a UNESCO World Heritage Site featuring a combination of rock-cut Buddhist, Hindu, and Jain caves, including chaityas (prayer halls) and viharas (monastic residences).",
		"correct": "Ellora Caves"
	  },
	  {
		"id": 41,
		"question": "Which World Heritage Site in India is a group of Hindu temples dedicated to Lord Shiva?",
		"options": [
		  "Khajuraho Group of Monuments",
		  "Group of Monuments at Pattadakal",
		  "Mamallapuram",
		  "Mahabalipuram"
		],
		"description": "The Group of Monuments at Pattadakal, located in Karnataka, is a UNESCO World Heritage Site known for its collection of intricately carved Hindu temples dedicated to various deities, including Lord Shiva.",
		"correct": "Group of Monuments at Pattadakal"
	  },
	  {
		"id": 42,
		"question": "Which World Heritage Site in India is a group of temples known for their Dravidian architecture?",
		"options": [
		  "Brihadeeswarar Temple",
		  "Kailasa Temple",
		  "Sun Temple at Konark",
		  "Meenakshi Temple"
		],
		"description": "The Brihadeeswarar Temple, situated in Thanjavur, Tamil Nadu, is a UNESCO World Heritage Site and a magnificent example of Dravidian architecture dedicated to Lord Shiva.",
		"correct": "Brihadeeswarar Temple"
	  },
	  {
		"id": 43,
		"question": "Which World Heritage Site in India is a group of palaces and temples known for their artistic brilliance?",
		"options": [
		  "Mysore Palace",
		  "Amber Fort",
		  "City Palace, Jaipur",
		  "Junagarh Fort"
		],
		"description": "The Mysore Palace, located in Karnataka, is a UNESCO World Heritage Site and a splendid palace renowned for its architectural beauty, intricate carvings, and artistic brilliance.",
		"correct": "Mysore Palace"
	  },
	  {
		"id": 44,
		"question": "Which World Heritage Site in India is a group of temples dedicated to Lord Vishnu?",
		"options": [
		  "Tirumala Venkateswara Temple",
		  "Kedarnath Temple",
		  "Omkareshwar Temple",
		  "Ramanathaswamy Temple"
		],
		"description": "The Ramanathaswamy Temple, situated in Rameswaram, Tamil Nadu, is a significant Hindu pilgrimage site and a UNESCO World Heritage Site dedicated to Lord Vishnu.",
		"correct": "Ramanathaswamy Temple"
	  },
	  {
		"id": 45,
		"question": "Which World Heritage Site in India is an ancient Buddhist learning center and monastery?",
		"options": [
		  "Nalanda University",
		  "Taktsang Monastery",
		  "Tawang Monastery",
		  "Buddhist Monuments at Sarnath"
		],
		"description": "Nalanda University, located in Bihar, is a UNESCO World Heritage Site recognized for its ancient ruins of a renowned Buddhist learning center and monastery.",
		"correct": "Nalanda University"
	  },
	  {
		"id": 46,
		"question": "Which World Heritage Site in India is a group of rock-cut caves known for their intricate carvings?",
		"options": [
		  "Ajanta Caves",
		  "Ellora Caves",
		  "Elephanta Caves",
		  "Badami Caves"
		],
		"description": "The Ajanta Caves, located in Maharashtra, are a UNESCO World Heritage Site renowned for their rock-cut cave temples with elaborate sculptures and paintings.",
		"correct": "Ajanta Caves"
	  },
	  {
		"id": 47,
		"question": "Which World Heritage Site in India is a complex of tombs known for its Persian and Indian architectural styles?",
		"options": [
		  "Humayun's Tomb",
		  "Qutub Minar",
		  "Taj Mahal",
		  "Fatehpur Sikri"
		],
		"description": "Humayun's Tomb, situated in Delhi, is a UNESCO World Heritage Site and a magnificent mausoleum known for its Persian and Indian architectural fusion.",
		"correct": "Humayun's Tomb"
	  },
	  {
		"id": 48,
		"question": "Which World Heritage Site in India is a temple dedicated to Lord Vishnu?",
		"options": [
		  "Meenakshi Temple",
		  "Tirumala Venkateswara Temple",
		  "Brihadeeswarar Temple",
		  "Ramanathaswamy Temple"
		],
		"description": "The Tirumala Venkateswara Temple, situated in Andhra Pradesh, is a renowned Hindu temple and a UNESCO World Heritage Site dedicated to Lord Vishnu.",
		"correct": "Tirumala Venkateswara Temple"
	  },
	  {
		"id": 49,
		"question": "Which World Heritage Site in India is a group of palaces, gardens, and lakes built during the reign of the Rajputs?",
		"options": [
		  "City Palace, Jaipur",
		  "Lake Palace, Udaipur",
		  "Umaid Bhawan Palace, Jodhpur",
		  "Mysore Palace, Mysore"
		],
		"description": "The City Palace in Jaipur, Rajasthan, is a UNESCO World Heritage Site featuring a magnificent complex of palaces, gardens, courtyards, and museums.",
		"correct": "City Palace, Jaipur"
	  },
	  {
		"id": 50,
		"question": "Which World Heritage Site in India is an ancient Buddhist site known for its massive stupa?",
		"options": [
		  "Sanchi Stupa",
		  "Dhamekh Stupa",
		  "Rani Ki Vav",
		  "Great Living Chola Temples"
		],
		"description": "The Sanchi Stupa, located in Madhya Pradesh, is a UNESCO World Heritage Site and an important Buddhist pilgrimage site known for its massive dome-shaped stupa and intricate carvings.",
		"correct": "Sanchi Stupa"
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