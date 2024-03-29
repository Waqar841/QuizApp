
const quizPart=document.querySelector('.quiz');
const strtBtn = document.querySelector('.start-btn');
const allAnswers = document.querySelectorAll('.answers');
const answer_section = document.querySelector('.answer-section');
const Question_2 = document.querySelector('.q-question');
let correctAnswer = 'Charles Babbage';
const nextBtn = document.querySelector('.btn-div');
const Ans1 = document.querySelector('.Ans-1');
const Ans2 = document.querySelector('.Ans-2');
const Ans3 = document.querySelector('.Ans-3');
const Ans4 = document.querySelector('.Ans-4');
let count = 0;


window.onload = function () {
    quizPart.style.display='none';
    strtBtn.addEventListener('click',function(){
        strtBtn.style.display='none';
        quizPart.style.display='block';
    });

    // It gets that item on which user has clicked
    allAnswers.forEach(function (selectedDiv) { 
        selectedDiv.addEventListener('click', function () {
            answer_section.classList.add('unclickable');
            var urAnswer = selectedDiv.querySelector('p').innerText;

            urAnswer === correctAnswer ? selectedDiv.classList.add('right-answer')
                : selectedDiv.classList.add('wrong-answer');
        })
    })

    nextBtn.addEventListener('click', function () { 
        Ans1.innerText = count === 0 ? 'Mandarin' : 'Africa';
        Ans2.innerText = count === 0 ? 'Spanish' : 'Europe';
        Ans3.innerText = count === 0 ? 'English' : 'Asia';
        Ans4.innerText = count === 0 ? 'German' : 'North America';
        count === 0 ? Question_2.innerText = 'Which is the most widely spoken language in the world?' :
            Question_2.innerText = 'Which is the only continent in the world without a desert?'

        count === 0 ? correctAnswer = 'English' : correctAnswer = 'Europe';
        count = 1;

        answer_section.classList.remove('unclickable');
        
    })
};
