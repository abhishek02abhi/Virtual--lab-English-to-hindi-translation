/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      "question": "1. ऑप्टिकल फाइबर के कोर का अपवर्तनांक क्लैडिंग की तुलना में ------------------ होता है:",
      "answers": {
        "a": "अधिक",
        "b": "कम",
        "c": "समान",
        "d": "नहीं"
      },
      "correctAnswer": "a"
    }, {
      "question": "2. ऑप्टिकल फाइबर में प्रकाश के प्रसार के लिए घटना कोण और अर्ध-स्वीकृति कोण के बीच सही संबंध है:",
      "answers": {
        "a": "&alpha; < &alpha;<sub>max</sub>",
        "b": "&alpha; > &alpha;<sub>max</sub>",
        "c": "&alpha; = &alpha;<sub>max</sub>",
        "d": "इनमें से कोई नहीं"
      },
      "correctAnswer": "a"
    }, {
      "question": "3. न्यूमेरिकल एपर्चर निर्भर करता है:",
      "answers": {
        "a": "कोर की सामग्री",
        "b": "क्लैडिंग की सामग्री",
        "c": "बाहरी माध्यम (हवा)",
        "d": "उपरोक्त सभी"
      },
      "correctAnswer": "d"
    },
     {
      "question": "4. ऑप्टिकल फाइबर में संकेत का प्रसार निम्नलिखित पर आधारित है:",
      "answers": {
        "a": "सम्पूर्ण आंतरिक परावर्तन",
        "b": "परावर्तन",
        "c": "विवर्तन",
        "d": "प्रकीर्णन"
      },
      "correctAnswer": "a"
    },                              ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////