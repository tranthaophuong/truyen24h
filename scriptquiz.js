const questions = [
    {
        question: " Trí nhớ là gì?",
        answers: [
            {text: "Là khả năng lưu giữ thông tin, không chỉ là đặc quyền của con người mà tồn tại ở cả động vật. ", correct: true},
            {text: "Là khả năng ghi lại thông tin nhờ quá trình hưng phấn ở những vùng tương ứng của bộ não trước các kích thích thực tại.", correct: false},
            {text: "Là quá trình hình thành những đường liên hệ tạm thời duy trì dấu vết của những kích thích đã tác động vào não.", correct: false},
        ]
    }, 
    {
        question: " Những nguyên nhân chủ quan gây suy giảm trí nhớ là gì?",
        answers: [
            {text: "Uống rượu", correct: false},
            {text: "Thức khuya", correct: false},
            {text: "Thường xuyên tiếp xúc với các hóa chất độc hại, môi trường thiếu oxy", correct: false},
            {text: "Sử dụng điện thoại quá nhiều", correct: false},
            {text: "Cả 4 phương án trên", correct: true},
        ]  
    },
    {
        question: " Đâu là một số biểu hiện suy giảm trí nhớ của người trẻ?",
        answers: [
            {text: "Cơ thể mệt mỏi, yếu ớt", correct: false},
            {text: "Đãng trí, kém tập trung", correct: true},
            {text: "Ngủ nhiều", correct: false},
        ]  
    }
]; 

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn1");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Tiếp tục";
    showQuestion();
}

function showQuestion(){
    resetState();
   let currentQuestion = questions [currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + "." + currentQuestion. 
   question; 

   currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn1");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
   });
}



function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn1 = e.target;
    const isCorrect = selectedBtn1.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn1.classList.add("correct");
        score++;
    }else{
        selectedBtn1.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Bạn đã đúng ${score} câu trên tổng số ${questions.length} câu !`;
    nextButton.innerHTML = "Chơi lại";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
    }

nextButton.addEventListener("click",()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
    startQuiz();
}
});
startQuiz();