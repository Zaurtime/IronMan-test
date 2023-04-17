const questions = [
    {
        question: 'What is the most difficult IronMan race?',
        answers: [
                  'Patagonman, Chile', 
                  'Cork, Ireland', 
                  'Lanzarote, Canary Islands', 
                  'Norseman Xtreme, Norway'
                ],
        correct: 1,
    },
    {
        question: 'How many km an IronMan run daily?',
        answers: ['10km', '42km', '1km', 'Next Monday 5km'],
        correct: 2,
    },
    {
        question: 'How many km can you swim?',
        answers: ['100m', '200m', '2km', '3km and 800meters'],
        correct: 4,
    },
    {
        question: 'Your personal best distance in cycling?',
        answers: ['20km or less',
                  '50km',
                  '180km or more',
                  '100km'],
        correct: 3,
    },
    {
        question: 'Who won IronMan Pro World Championship?',
        answers: ['Gustav Iden', 'Sam Laidlow', 'Lionel Sanders', 'Jan Frodeno'],
        correct: 1,
    }

];

// Searching elements
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');


// game process
let score = 0; // right answers count
let questionIndex = 0; // current question

// clear page fuction
clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion(){
    

    // question
    
    const headerTemplate = '<h2 class="title">%title%</h2>';
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    //Answer choice
    let answerNumber = 1;
    for (answerText of questions[questionIndex]['answers']) {   

        const questionTemplate = 
         `<li>
                <label>
                  <input value="%number%" type="radio" class="answer" name="answer" />
                  <span>%answer%</span>
                </label>
         </li>`;

        const answerHTML = questionTemplate
                                .replace('%answer%', answerText)
                                .replace('%number%', answerNumber)

        listContainer.innerHTML += answerHTML;
        answerNumber++;
    }
}

function checkAnswer(){
    

// found selected button
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
   

// if answer not selected - nothing need to do, exit function
    if (!checkedRadio){
        submitBtn.blur();
        return
    } 

// To know user answer
    const userAnswer = parseInt(checkedRadio.value)

// if user answered correct add 
   if (userAnswer === questions[questionIndex]['correct']) {
       score++;
   }
   

   if (questionIndex !== questions.length - 1){
       
       questionIndex++;
       clearPage();
       showQuestion();

   } else {
        
        clearPage();
        showResults();

   }
}

function showResults() {
    

    const resultsTemplate = `
            <h2 class="title">%title%</h2>
            <h3 class="summary">%message%</h3>
            <p class="result">%result%</p>
        `;

    let title, message;
    // Variety text answers for result
    if (score === questions.length) {
        title = 'Congratulations!🎉';
        message = 'You are answered all questions right!😊👍';
    } else if ((score * 100) / questions.length >= 50) {
        title = 'Not bad! 💪';
        message = 'You are answered more than half right answers 👍';
    } else {
        title = 'Need to try again 😏 Failure is when you stop trying!';
        message = 'You score less than half right answers';
    }

    //result
    let result = `${score} from ${questions.length}`;

    //final response add messages show to user
    const finalMessage = resultsTemplate
                            .replace('%title%', title)
                            .replace('%message%', message)
                            .replace('%result%', result)

    headerContainer.innerHTML = finalMessage;

    //Change button to Start again
    submitBtn.blur();
    submitBtn.innerText = 'Start again';
    submitBtn.onclick = () => history.go();
}


