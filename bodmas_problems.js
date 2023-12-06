// bodmas_problem.js
let problemcount=-1;
let complexBodmasScore = 0;
let currentComplexBodmasProblem = generateComplexBodmasMathProblem();

// JavaScript code for generating and checking complex BODMAS problems
function generateComplexBodmasMathProblem() {
    const operations = ['+', '-', '*', '/', '**'];
    const brackets = ['(', ')'];
    let expression = '';

    const maxNumbers = 4; // You can adjust this to control the number of input numbers
    const numNumbers = Math.floor(Math.random() * maxNumbers) + 2;
    for (let i = 0; i < numNumbers; i++) {
        const num = Math.floor(Math.random() * 10) + 1;
        expression += num;
        if (i < numNumbers - 1) {
            expression += ` ${operations[Math.floor(Math.random() * operations.length)]} `;
        }
    }

    expression = brackets[0] + expression + brackets[1];
    const answer = eval(expression);
    problemcount++;
    return { problem: expression, answer };
}

//ckecking section whethere your answere is correct or wroung.
function checkComplexBodmasAnswer() {
    const userAnswer = parseFloat(document.getElementById('complex-bodmas-user-answer').value);

    if (userAnswer === currentComplexBodmasProblem.answer) {
        document.getElementById('complex-bodmas-result').textContent = 'Correct!';
        complexBodmasScore++;
    } else {
        document.getElementById('complex-bodmas-result').textContent = `Wrong! The correct answer is ${currentComplexBodmasProblem.answer}`;
    }

    currentComplexBodmasProblem = generateComplexBodmasMathProblem();
    document.getElementById('complex-bodmas-problem-text').textContent = currentComplexBodmasProblem.problem;
    document.getElementById('complex-bodmas-user-answer').value = '';
}

function getScore(){
    var box=document.createElement("div");
    box.innerHTML="You have attempted "+problemcount+ " problem(s) "+"and scored "+complexBodmasScore+".";
    document.getElementById('score').innerHTML = box.textContent;
}

// Initialize the initial problem when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('complex-bodmas-problem-text').textContent = currentComplexBodmasProblem.problem;
});
