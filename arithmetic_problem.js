// arithmetic_problem.js
let problemcount=-2;
let arithmeticScore = 0;
let currentArithmeticProblem=generateArithmeticProblem();

// generating and checking arithmetic number sequences problems
function generateArithmeticProblem() {
    const firstTerm = Math.floor(Math.random() * 10) + 1;
    const isPositive = Math.random() < 0.5; // 50% chance of positive or negative common difference
    const commonDifference = Math.floor(Math.random() * 4) + 2;
    const numTerms = Math.floor(Math.random() * 3) + 3; // Ensure at least three terms

    let sequence = [firstTerm];
    for (let i = 1; i < numTerms - 1; i++) {
        if (isPositive) {
            sequence.push(sequence[i - 1] + commonDifference);
        } else {
            sequence.push(sequence[i - 1] - commonDifference);
        }
    }

    const problem = sequence.join(', ') + ', ____'; // Add an empty last term
    const answer = sequence[numTerms - 2] + (isPositive ? commonDifference : -commonDifference); // Calculate the correct answer for the last term

    problemcount++;
    return { problem, answer };
}

// checking answere whethere user answer is correct or wroung.
function checkArithmeticAnswer() {
    const userAnswer = parseFloat(document.getElementById('arithmetic-user-answer').value);

    if (userAnswer === currentArithmeticProblem.answer) {
        document.getElementById('arithmetic-result').textContent = 'Correct!';
        arithmeticScore++;
    } else {
        document.getElementById('arithmetic-result').textContent = `Wrong! The correct answer is ${currentArithmeticProblem.answer}`;
    }

    currentArithmeticProblem = generateArithmeticProblem();
    document.getElementById('arithmetic-problem-text').textContent = currentArithmeticProblem.problem;
    document.getElementById('arithmetic-user-answer').value = '';
}

// getting score purpose.
function getScore(){
    var box=document.createElement("div");
    box.innerHTML="You have attempted "+problemcount+ " problem(s) "+"and scored "+arithmeticScore+".";
    document.getElementById('score').innerHTML = box.textContent;
}

// Initialize the initial problem when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    currentArithmeticProblem = generateArithmeticProblem();
    document.getElementById('arithmetic-problem-text').textContent = currentArithmeticProblem.problem;
});
