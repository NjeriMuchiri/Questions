// using selectors inside the element

const questions = document.querySelectorAll(".Question");

questions.forEach(function(Question){
    const btn = Question.querySelector(".question-btn");
    btn.addEventListener("click",function(){
        // question.classList.toggle("show-text")
        questions.forEach(function (item){
             if(item !== Question) {
            item.classList.remove('show-text');
        }
        });
        Question.classList.toggle("show-text");
       
    });
});


// // traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click",function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// });

