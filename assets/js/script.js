window.onload = function () {
    let result = {};
    let step = 0;

    function showQuestion(questionNumber) {
        document.querySelector(".question").innerHTML = quiz[step]['q'];
        let answer = '';
        for (let key in quiz[step]['a']) {
            answer += '<li data-v="${key}">${quiz[step]['a'][key]}</li>';
        }
        document.querySelector(".answer").innerHTML = answer;
    }

    showQuestion(step);
}