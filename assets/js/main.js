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

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion(){
    console.log('showQuestion');

    // question
    
    const headerTemplate = '<h2 class="title">%title%</h2>';
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    //Answer choice
    for (answerText of questions[questionIndex]['answers']) {

        const questionTemplate = 
         `<li>
                <label>
                  <input type="radio" class="answer" name="answer" />
                  <span>%answer%</span>
                </label>
         </li>`;

        const answerHTML = questionTemplate.replace('%answer%', answerText)
        listContainer.innerHTML += answerHTML;
        
    }
}
