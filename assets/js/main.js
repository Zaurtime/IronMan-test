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


let score = 0; // right answers count
let questionIndex = 0; // current question
