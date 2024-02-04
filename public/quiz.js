
// Quiz Questions
const quizQuestions = [
  {
    question: "What is the primary purpose of machine learning?",
    options: [
      "Data analysis",
      "Writing code for computers",
      "Making predictions based on data",
      "Data manipulation"
    ],
    correctAnswer: "Making predictions based on data",
    timeLimit: 20 // Time limit for this question in seconds
  },
  {
    question: "What distinguishes supervised learning from unsupervised learning?",
    options: [
      "Supervised learning uses labeled data for training, while unsupervised learning uses unlabeled data.",
      "Supervised learning uses clustering algorithms, while unsupervised learning uses classification algorithms.",
      "Supervised learning is more accurate than unsupervised learning.",
      "Unsupervised learning requires human intervention for training."
    ],
    correctAnswer: "Supervised learning uses labeled data for training, while unsupervised learning uses unlabeled data.",
    timeLimit: 25 // Time limit for this question in seconds
  },
  {
    question: "Which of the following is NOT a potential application of machine learning?",
    options: [
      "Email spam detection",
      "Image recognition",
      "Weather forecasting",
      "Data storage (Correct)"
    ],
    correctAnswer: "Data storage (Correct)",
    timeLimit: 20 // Time limit for this question in seconds
  },
  {
    question: "How is machine learning utilized in recommendation systems?",
    options: [
      "By identifying patterns in user behavior to recommend relevant items",
      "By displaying popular items to users",
      "By analyzing only explicit user feedback",
      "By ignoring user preferences"
    ],
    correctAnswer: "By identifying patterns in user behavior to recommend relevant items",
    timeLimit: 25 // Time limit for this question in seconds
  },
  {
    question: "Which of the following is a true statement about machine learning in autonomous vehicles?",
    options: [
      "Machine learning helps in navigation only. Challenges include limited computational power.",
      "Machine learning assists in decision-making for safe driving. Challenges include interpreting complex environments and ensuring safety (Correct)",
      "Machine learning optimizes vehicle performance. Challenges include managing real-time data efficiently.",
      "Machine learning aids in predictive maintenance. Challenges involve integrating diverse sensor technologies."
    ],
    correctAnswer: "Machine learning assists in decision-making for safe driving. Challenges include interpreting complex environments and ensuring safety (Correct)",
    timeLimit: 30 // Time limit for this question in seconds
  },
  {
    question: "Which of the following is a true statement about machine learning in financial fraud detection?",
    options: [
      "Machine learning is limited by data availability for effective fraud detection.",
      "Machine learning assists in identifying patterns. Challenges involve interpreting unstructured data and keeping up with evolving fraud techniques (Correct)",
      "Machine learning plays a minor role in fraud detection, primarily focusing on customer satisfaction. Challenges include integration complexities.",
      "Machine learning contributes marginally to fraud detection accuracy. Challenges involve data privacy and security concerns."
    ],
    correctAnswer: "Machine learning helps identify unusual patterns. Challenges involve handling large volumes of data and staying updated with new fraud methods (Correct)",
    timeLimit: 30 // Time limit for this question in seconds
  }, 
  {
    question: "What is the primary objective of classification algorithms in supervised learning?",
    options: [
      "To predict continuous values",
      "To group similar data points together",
      "To assign input data points to specific categories or classes",
      "To reduce the dimensions of the dataset"
    ],
    correctAnswer: "To assign input data points to specific categories or classes",
    timeLimit: 25 // Time limit for this question in seconds
  },
  {
    question: "Which algorithm is suitable for both regression and classification tasks?",
    options: [
      "K-means Clustering",
      "Decision Trees",
      "Naive Bayes",
      "Support Vector Machines (Correct)"
    ],
    correctAnswer: "Support Vector Machines (Correct)",
    timeLimit: 25 // Time limit for this question in seconds
  },
  {
    question: "What makes Random Forest different from a single Decision Tree?",
    options: [
      "Random Forest uses more features",
      "Random Forest reduces overfitting",
      "Random Forest combines multiple trees to make predictions",
      "Random Forest only handles classification tasks"
    ],
    correctAnswer: "Random Forest combines multiple trees to make predictions",
    timeLimit: 25 // Time limit for this question in seconds
  },
  {
    question: "What is the main drawback of using the k-Nearest Neighbors (KNN) algorithm?",
    options: [
      "It relies heavily on assumptions about data distribution",
      "It is not sensitive to irrelevant features",
      "It requires storing all training data points",
      "It could be sensitive to noisy data"
    ],
    correctAnswer: "It requires storing all training data points",
    timeLimit: 30 // Time limit for this question in seconds
  },
  {
    question: "What does the term 'bias-variance tradeoff' refer to in supervised learning?",
    options: [
      "Balancing model complexity with model accuracy",
      "Managing the tradeoff between underfitting and overfitting in models",
      "Finding an equilibrium between precision and recall in classification models",
      "Finding the optimal learning rate for gradient descent"
    ],
    correctAnswer: "Managing the tradeoff between underfitting and overfitting in models",
    timeLimit: 30 // Time limit for this question in seconds
  },
  {
    question: "What is the primary objective of the K-means clustering algorithm?",
    options: [
      "To classify data into predefined categories",
      "To group similar data points together",
      "To predict continuous values",
      "To reduce the dimensions of the dataset"
    ],
    correctAnswer: "To group similar data points together",
    timeLimit: 25 // Time limit for this question in seconds
  },
  {
    question: "What is the purpose of Principal Component Analysis (PCA) in unsupervised learning?",
    options: [
      "To analyze the principal component complexity of the dataset",
      "To reduce the dimensionality of the dataset by transforming features",
      "To increase the interpretability of the data",
      "To classify data into predefined categories"
    ],
    correctAnswer: "To reduce the dimensionality of the dataset by transforming features",
    timeLimit: 25 // Time limit for this question in seconds
  },
  {
    question: "In which scenario is Principal Component Analysis (PCA) most beneficial?",
    options: [
      "When all features in the dataset are independent",
      "When the dataset contains a high number of uncorrelated features",
      "When the dataset has a small number of instances",
      "When the features in the dataset are highly correlated"
    ],
    correctAnswer: "When the features in the dataset are highly correlated",
    timeLimit: 25 // Time limit for this question in seconds
  }, 
  {
    question: "What is the first step in a Hierarchical Clustering algorithm?",
    options: [
      "Assigning all data points to a single cluster",
      "Calculating the distance matrix between data points",
      "Forming individual clusters for each data point",
      "Considering each data point as a separate cluster"
    ],
    correctAnswer: "Considering each data point as a separate cluster",
    timeLimit: 20 // Time limit for this question in seconds
  }, 
  {
    question: "What is the final output of a Hierarchical Clustering algorithm?",
    options: [
      "A list of hierarchically ordered centroids representing clusters",
      "A hierarchical structure or dendrogram showing cluster relationships",
      "A hierarchical set of labeled data points",
      "A visualization of the hierarchical data distribution"
    ],
    correctAnswer: "A hierarchical structure or dendrogram showing cluster relationships",
    timeLimit: 20 // Time limit for this question in seconds
  },
  {
    question: "What is the 'curse of dimensionality' in machine learning?",
    options: [
      "The phenomenon where models become too simple due to low-dimensional data",
      "The challenge of handling large datasets with numerous features, leading to increased computational complexity and sparsity",
      "The process of reducing dimensionality in datasets to improve model performance",
      "The limitation of models to handle categorical variables in high-dimensional data"
    ],
    correctAnswer: "The challenge of handling large datasets with numerous features, leading to increased computational complexity and sparsity",
    timeLimit: 20 // Time limit for this question in seconds
  },
  {
    question: "What is an advantage of Linear Discriminant Analysis (LDA) over the Nearest Mean Classifier?",
    options: [
      "LDA assumes equal covariance matrices for all classes, allowing more flexible decision boundaries",
      "LDA works well with non-linearly separable classes compared to the Nearest Mean Classifier",
      "LDA is computationally more efficient and less sensitive to outliers",
      "LDA requires less memory compared to the Nearest Mean Classifier"
    ],
    correctAnswer: "LDA is computationally more efficient and less sensitive to outliers",
    timeLimit: 20 // Time limit for this question in seconds
  },
  {
    question: "What is a disadvantage of Linear Discriminant Analysis (LDA)?",
    options: [
      "LDA assumes that data in each class are normally distributed",
      "LDA performs poorly with a small number of training samples per class",
      "LDA is not suitable for classification tasks",
      "LDA is insensitive to irrelevant features"
    ],
    correctAnswer: "LDA performs poorly with a small number of training samples per class",
    timeLimit: 20 // Time limit for this question in seconds
  }
];

const visSurvey = [
  {
    question: "How often did you perform goal-oriented visualization?",
    options: [
      "0 times",
      "1-2 times total",
      "3-4 times total",
      "5-7 times total",
      "7-12 times total",
      "Once a day"
    ],
    correctAnswer: "",
    timeLimit: 200 // Time limit for this question in seconds
  },
  {
  question: "How intensely did you percieve your goal-oriented visualizations to be?",
  options: [
    "No itensity",
    "Low intensity",
    "Mild intensity",
    "Moderate intensity",
    "High intensity",
    "Extremely high intensity, with vivid mental imagery"
  ],
  correctAnswer: "",
  timeLimit: 200 // Time limit for this question in seconds
  }
];



function getUserCodeFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('code'); // Assuming 'code' is the parameter name in the URL
}

// Get the user code from the URL


// Object to store user answers (key: user code, value: array of answers)
const userAnswersMap = {};
const userSurveyAnswersMap = {};

let currentSurveyQuestionIndex = 0;

// Function to initialize user's answer array when starting the quiz
function initializeUserAnswers(userCode) {
  if (!userAnswersMap[userCode]) {
    userAnswersMap[userCode] = new Array(quizQuestions.length).fill(null);
  } if(userCode.charAt(0) == "v") {
    userSurveyAnswersMap[userCode] = new Array(visSurvey.length).fill(null);
  }
}


// Function to generate HTML for a given question
function generateQuestionHTML(questionObj) {
  let imageHTML = "";
  if (questionObj.image) {
    imageHTML = `<img src="${questionObj.image}" alt="${questionObj.image}">`;
  }

  let optionsHTML = "";
  questionObj.options.forEach((option, index) => {
    optionsHTML += `<input type="radio" id="option${index}" name="question" value="${option}">
                    <label for="option${index}">${option}</label><br>`;
  });

  const questionHTML = `
    <div class="question">
      ${imageHTML}
      <h2>${questionObj.question}</h2>
      <form id="questionForm">
        ${optionsHTML}
        <br>
        <button type="button" onclick="checkAnswer(${questionObj.timeLimit}, '${questionObj.correctAnswer}')">Submit</button>
      </form>
      <p id="result"></p>
    </div>
  `;
  
  return questionHTML;
}

function generateSurveyQuestionHTML(questionObj) {
  let optionsHTML = "";
  questionObj.options.forEach((option, index) => {
    optionsHTML += `<input type="radio" id="option${index}" name="question" value="${option}">
                    <label for="option${index}">${option}</label><br>`;
  });

  const questionHTML = `
    <div class="question">
      <h2>${questionObj.question}</h2>
      <form id="questionForm">
        ${optionsHTML}
        <br>
        <button type="button" onclick="checkSurveyAnswer(${questionObj.timeLimit})">Submit</button>
      </form>
      <p id="result"></p>
    </div>
  `;

  return questionHTML;
}

function checkSurveyAnswer(timeLimit) {
  clearTimeout(timer);
  const selectedAnswer = document.querySelector('input[name="question"]:checked');
  const resultElement = document.getElementById('result');

  if (!selectedAnswer) {
    resultElement.textContent = "Please select an answer!";
  } else {
    const userAnswer = selectedAnswer.value;
    if (userSurveyAnswersMap[getUserCodeFromURL()]) {
      userSurveyAnswersMap[getUserCodeFromURL()][currentQuestionIndex] = userAnswer; // Store user's answer
    }
    resultElement.textContent = "Answer recorded!";
  }

  setTimeout(() => {
    resultElement.textContent = "";
    loadNextSurveyQuestion();
  }, 20); // Change this time to show the result before moving to the next question
}

function loadNextSurveyQuestion() {
  const surveyContainer = document.getElementById('surveyContainer');
  if (currentSurveyQuestionIndex < visSurvey.length - 1) {
    currentSurveyQuestionIndex++;
    surveyContainer.innerHTML = generateSurveyQuestionHTML(visSurvey[currentSurveyQuestionIndex]);
    startTimer(visSurvey[currentSurveyQuestionIndex].timeLimit);
  } else {
    try {
      postSurvey();
    } catch (error) {
      throw new Error("failed to post survey", survey);
    }
    surveyContainer.innerHTML = "<h2>Survey Finished!</h2>";
  }
}

// Function to post survey answers to the database
async function postSurvey() {
  const userCode = getUserCodeFromURL();
  const userAnswers = userAnswersMap[userCode];

  fetch(`/postSurvey?code=${userCode}&q0=${userAnswers[0]}&q1=${userAnswers[1]}`);
  .then(response => response.json())
  .then(data => {
    // Process the received data
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


// Function to check the selected answer
function checkAnswer(timeLimit, correctAnswer, userCode) {
  clearTimeout(timer);
  const selectedAnswer = document.querySelector('input[name="question"]:checked');
  const resultElement = document.getElementById('result');

  if (!selectedAnswer) {
    resultElement.textContent = "Please select an answer!";
  } else {
    const userAnswer = selectedAnswer.value;
    if (userAnswersMap[getUserCodeFromURL()]) {
      userAnswersMap[getUserCodeFromURL()][currentQuestionIndex] = userAnswer; // Store user's answer
    }
    if (userAnswer === correctAnswer) {
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect!";
    }
  }

  setTimeout(() => {
    resultElement.textContent = "";
    loadNextQuestion();
  }, 200); // Change this time to show the result before moving to the next question (in milliseconds)
}

// Function to load the next question
let currentQuestionIndex = 0;
function loadNextQuestion() {
  const quizContainer = document.getElementById('quizContainer');
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    quizContainer.innerHTML = generateQuestionHTML(quizQuestions[currentQuestionIndex]);
    startTimer(quizQuestions[currentQuestionIndex].timeLimit);
  } else {
    try {
      postQuiz();
    } catch (error) {
      throw new Error("failed to post quiz", quiz)
    }
    if(userId.charAt(0) === "v") {
      loadNextSurveyQuestion();
    } else {
      quizContainer.innerHTML = "<h2>Quiz Finished!</h2>";
    }

  }
}

// Function to start the timer for each question
let timer;
function startTimer(seconds) {
  let timeLeft = seconds;
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      document.getElementById('timer').textContent = `Time Left: ${timeLeft} seconds`;
    } else {
      clearInterval(timer);
      document.getElementById('timer').textContent = 'Time\'s up!';
      loadNextQuestion();
    }
  }, 1000); // Timer runs every second (1000 milliseconds)
}

async function postQuiz() {
  const userCode = getUserCodeFromURL();
  const userAnswers = userAnswersMap[userCode];

  fetch(`/post?code=${userCode}&q0=${userAnswers[0]}&q1=${userAnswers[1]}
  &q2=${userAnswers[2]}&q3=${userAnswers[3]}&q4=${userAnswers[4]}
  &q5=${userAnswers[5]}&q6=${userAnswers[6]}&q7=${userAnswers[7]}
  &q8=${userAnswers[8]}&q9=${userAnswers[9]}&q10=${userAnswers[10]}
  &q11=${userAnswers[11]}&q12=${userAnswers[12]}&q13=${userAnswers[13]}
  &q14=${userAnswers[14]}&q15=${userAnswers[15]}&q16=${userAnswers[16]}
  &q17=${userAnswers[17]}&q18=${userAnswers[18]}`);
  .then(response => response.json())
  .then(data => {
    // Process the received data
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


// Initialize the quiz

initializeUserAnswers(getUserCodeFromURL());
const quizContainer = document.getElementById('quizContainer');
quizContainer.innerHTML = generateQuestionHTML(quizQuestions[currentQuestionIndex]);
startTimer(quizQuestions[currentQuestionIndex].timeLimit);

