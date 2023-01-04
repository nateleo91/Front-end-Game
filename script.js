window.onload = function () {
  
    let questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
        allQuestions = {
          'What was Mozart\'s cause of death?' : ['Old age', 'Mercury poisoning', 'Rheumatic fever', 'Influenza', 2],
          
          'Which of these is an opera by Mozart?' : ['King Stephen', 'Don Giovanni' , 'Fur Elise', 'Zur Namensfeier', 1],
          
          'What year was Mozart born?? ' : ['1755', '1756', '1654', '1739', 1],

          'At what age did Mozart begin to start composing little pieces?' : ['five', 'ten', 'eight', 'twelve', 0],

          'What premiere did he conduct shortly before he died?' : ['Paris Symphony no. 31', 'The Magic Flute', 'Lucio Sillia', 'Ascanio in Alba', 1 ]
        };
        
    function loadQuestion(curr) {
    
      let question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    
      let answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (let i = 0; i < answers.length -1; i += 1) {
        let createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      
      return function () {
        let givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'How did you do?';
          answerArea.innerHTML = 'Here is your answers.';
        }
                                
      };
    }
    
    function addChecker(bool) {
    
      let createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    loadQuestion(current);
    loadAnswers(current);
    
  };