// Quiz grading
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("browser-quiz");
    const resultsBox = document.getElementById("quiz-results");
    const resetButton = document.getElementById("reset-btn");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let totalScore = 0;
        const totalQuestions = 5;
        let output = "<h2>Quiz Results</h2>";

        // Question 1: fill in the blank
        const q1 = document.getElementById("q1").value.trim().toLowerCase();
        const q1Correct = "html";
        if (q1 === q1Correct) {
            totalScore++;
            output += '<p class="correct">1. Correct (1/1) - Answer: HTML</p>';
        } else {
            output += '<p class="incorrect">1. Incorrect (0/1) - Correct answer: HTML</p>';
        }

        // Question 2
        const q2 = document.querySelector('input[name="q2"]:checked');
        if (q2 && q2.value === "Rendering Engine") {
            totalScore++;
            output += '<p class="correct">2. Correct (1/1) - Answer: Rendering Engine</p>';
        } else {
            output += '<p class="incorrect">2. Incorrect (0/1) - Correct answer: Rendering Engine</p>';
        }

        // Question 3
        const q3 = document.querySelector('input[name="q3"]:checked');
        if (q3 && q3.value === "JavaScript") {
            totalScore++;
            output += '<p class="correct">3. Correct (1/1) - Answer: JavaScript</p>';
        } else {
            output += '<p class="incorrect">3. Incorrect (0/1) - Correct answer: JavaScript</p>';
        }

        // Question 4
        const q4 = document.querySelector('input[name="q4"]:checked');
        if (q4 && q4.value === "Netscape") {
            totalScore++;
            output += '<p class="correct">4. Correct (1/1) - Answer: Netscape</p>';
        } else {
            output += '<p class="incorrect">4. Incorrect (0/1) - Correct answer: Netscape</p>';
        }

        // Question 5 multi-select
        const q5Checked = document.querySelectorAll('input[name="q5"]:checked');
        const selectedAnswers = Array.from(q5Checked).map(item => item.value).sort();
        const correctAnswers = ["CSS", "HTML", "JavaScript"].sort();

        if (JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers)) {
            totalScore++;
            output += '<p class="correct">5. Correct (1/1) - Answers: HTML, CSS, JavaScript</p>';
        } else {
            output += '<p class="incorrect">5. Incorrect (0/1) - Correct answers: HTML, CSS, JavaScript</p>';
        }

        // Pass/fail result
        const percent = (totalScore / totalQuestions) * 100;
        const passed = percent >= 70;

        output =
            `<p>Total Score: <strong>${totalScore}/${totalQuestions}</strong></p>` +
            `<p class="${passed ? "pass" : "fail"}">Result: ${passed ? "Pass" : "Fail"}</p>` +
            output;

        resultsBox.innerHTML = output;
    });

    // Reset/retake quiz
    resetButton.addEventListener("click", function () {
        quizForm.reset();
        resultsBox.innerHTML = "";
    });
});
