
const quizPart=document.querySelector('.quiz');
const strtBtn=document.querySelector('.start-btn');

console.log(quizPart);

window.onload = function () {
    quizPart.style.display='none';
    strtBtn.addEventListener('click',function(){
        strtBtn.style.display='none';
        quizPart.style.display='block';
    });
};


