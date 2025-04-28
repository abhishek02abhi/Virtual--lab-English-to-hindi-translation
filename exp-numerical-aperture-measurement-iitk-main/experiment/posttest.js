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
      
        "question": "स्टील की गेंद के त्रिज्या को दोगुना करने पर गेंद की अंतिम वेग (टर्मिनल वेलोसिटी) कितनी हो जाएगी?",
        "answers": {
          "a": "दोगुनी",
          "b": "चार गुना",
          "c": "आठ गुना",
          "d": "सोलह गुना"
        },
        "correctAnswer": "b"
      },
      {
        "question": "गिरती हुई गेंद की सामग्री का घनत्व बढ़ाने पर उसकी अंतिम वेग (टर्मिनल वेलोसिटी):",
        "answers": {
          "a": "बढ़ती है",
          "b": "घटती है",
          "c": "समान रहती है",
          "d": "नहीं"
        },
        "correctAnswer": "a"
      
                      
    },                                
    
    
    ///// To add more questions, copy the section below 
    									                  ///// this line

                                        {
                                          "question": "1. सिंगल मोड स्टेप इंडेक्स ऑप्टिकल फाइबर का न्यूमेरिकल एपर्चर का मान लगभग कितना होता है?",
                                          "answers": {
                                            "a": "0.2",
                                            "b": "2.0",
                                            "c": "20",
                                            "d": "200"
                                          },
                                          "correctAnswer": "a"
                                        }, {
                                          "question": "2. ऑप्टिकल फाइबर के आउटलेट और स्क्रीन के बीच की दूरी बढ़ने पर स्क्रीन पर बिंदु का व्यास -------------- होता है।",
                                          "answers": {
                                            "a": "बढ़ता है",
                                            "b": "घटता है",
                                            "c": "स्थिर रहता है",
                                            "d": "इनमें से कोई नहीं"
                                          },
                                          "correctAnswer": "a"
                                        }, {
                                          "question": "3. ऑप्टिकल फाइबर के कोर और क्लैडिंग के अपवर्तक सूचकांक के बीच का अंतर बढ़ने पर न्यूमेरिकल एपर्चर:",
                                          "answers": {
                                            "a": "बढ़ता है",
                                            "b": "घटता है",
                                            "c": "स्थिर रहता है",
                                            "d": "इनमें से कोई नहीं"
                                          },
                                          "correctAnswer": "a"
                                        }, {
                                          "question": "4. यदि ऑप्टिकल फाइबर के इनलेट पर कोई संकेत स्वीकृति शंकु (acceptance cone) के बाहर के कोण पर गिरता है, तो संकेत:",
                                          "answers": {
                                            "a": "ऑप्टिकल फाइबर में प्रवेश नहीं कर सकता",
                                            "b": "प्रवेश कर सकता है लेकिन फाइबर के माध्यम से प्रसारित नहीं हो सकता",
                                            "c": "प्रवेश कर सकता है और ऑप्टिकल फाइबर की क्लैडिंग के माध्यम से यात्रा कर सकता है",
                                            "d": "इनमें से कोई नहीं"
                                          },
                                          "correctAnswer": "b"
                                        }
                                        


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