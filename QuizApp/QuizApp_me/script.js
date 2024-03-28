
const quizPart=document.querySelector('.quiz');
const strtBtn = document.querySelector('.start-btn');
const allAnswers = document.querySelectorAll('.answers');
const answer_section = document.querySelector('.answer-section');
const correctAnswer = 'Charles Babbage';

window.onload = function () {
    quizPart.style.display='none';
    strtBtn.addEventListener('click',function(){
        strtBtn.style.display='none';
        quizPart.style.display='block';
    });

    // it gets item on which user clicked
    allAnswers.forEach(function (selectedDiv) { 
        selectedDiv.addEventListener('click', function () {
            answer_section.classList.add('unclickable');
            var urAnswer = selectedDiv.querySelector('p').innerText;

            urAnswer === correctAnswer ? selectedDiv.classList.add('right-answer')
                : selectedDiv.classList.add('wrong-answer');
        })
    })    
};


