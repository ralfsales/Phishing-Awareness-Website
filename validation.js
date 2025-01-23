// Real-time Phishing Alert
setTimeout(function() {
    document.getElementById('alertBox').classList.add('show');
}, 5000); // Show alert after 5 seconds

// Function to submit quiz and calculate result
function submitQuiz() {
    // Correct answers
    const correctAnswers = {
        q1: "1",
        q2: "1",
        q3: "1"
    };

    // Get user's answers
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value
    };

    // Check answers and count correct ones
    let correctCount = 0;
    let resultMessage = "";

    for (const question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            correctCount++;
            resultMessage += `<p>Question ${question.slice(1)}: Correct ✅</p>`;
        } else {
            resultMessage += `<p>Question ${question.slice(1)}: Incorrect ❌. The correct answer is "${getCorrectAnswerText(question)}".</p>`;
        }
    }

    // Display the result
    document.getElementById("quizResult").innerHTML = `
        <h3>Your Score: ${correctCount} / ${Object.keys(correctAnswers).length}</h3>
        ${resultMessage}
    `;
}

// Function to get the correct answer text for a question
function getCorrectAnswerText(question) {
    const correctAnswerTexts = {
        q1: "Contains a suspicious link",
        q2: "The URL starts with 'https' and shows a padlock",
        q3: "Report it to the relevant authorities or company"
    };
    return correctAnswerTexts[question];
}

// Function to get the submition
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    console.log("Form Data Submitted:", formData);

    // Example: Send the data to an API
    fetch("https://example.com/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully!");
    })
    .catch(error => {
        alert("An error occurred while sending the message.");
    });
});