const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
        correct: "William Shakespeare"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: "2"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    
    document.getElementById("question").innerText = currentQuizData.question;
    document.getElementById("option1").innerText = currentQuizData.options[0];
    document.getElementById("option2").innerText = currentQuizData.options[1];
    document.getElementById("option3").innerText = currentQuizData.options[2];
    document.getElementById("option4").innerText = currentQuizData.options[3];
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}

function getSelected() {
    let selectedOption;
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        if (btn.classList.contains('selected')) {
            selectedOption = btn.innerText;
        }
    });

    return selectedOption;
}

document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.option-btn').forEach(button => {
            button.classList.remove('selected');
        });
        btn.classList.add('selected');
    });
});

document.getElementById('submit-btn').addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert("Please select an answer.");
    }
});

loadQuiz();
