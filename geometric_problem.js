// geometric_problem.js
let problemcount=-1;
let geometricScore = 0;
let currentGeometricProblem = generateGeometricProblem();
// JavaScript code for generating and checking geometric number sequences with an empty last term (at least three terms)
function generateGeometricProblem() {
    const firstTerm = Math.floor(Math.random() * 10) + 1;
    const isMultiplication = Math.random() < 0.5; // 50% chance of multiplication or division difference
    const commonDifference = Math.floor(Math.random() * 4) + 2;
    const numTerms = Math.floor(Math.random() * 3) + 3; // Ensure at least three terms

    let sequence = [firstTerm];
    for (let i = 1; i < numTerms - 1; i++) {
        if (isMultiplication) {
            sequence.push(sequence[i - 1] * commonDifference);
        } else {
            if (sequence[i - 1] % commonDifference === 0) {
                sequence.push(sequence[i - 1] / commonDifference);
            } else {
                // Ensure division results in integers
                sequence.push(sequence[i - 1] * commonDifference);
            }
        }
    }

    const problem = sequence.join(', ') + ', ____'; // Add an empty last term
    const answer = isMultiplication
        ? sequence[numTerms - 2] * commonDifference
        : sequence[numTerms - 2] / commonDifference; // Calculate the correct answer for the last term
    
    problemcount++;
    return { problem, answer };
}

// checking whethere your answer is correct or wroung.
function checkGeometricAnswer() {
    const userAnswer = parseFloat(document.getElementById('geometric-user-answer').value);

    if (userAnswer === currentGeometricProblem.answer) {
        document.getElementById('geometric-result').textContent = 'Correct!';
        geometricScore++;
    } else {
        document.getElementById('geometric-result').textContent = `Wrong! The correct answer is ${currentGeometricProblem.answer}`;
    }

    currentGeometricProblem = generateGeometricProblem();
    document.getElementById('geometric-problem-text').textContent = currentGeometricProblem.problem;
    document.getElementById('geometric-user-answer').value = '';
}

// getting Score purpose.
function getScore(){
    var box=document.createElement("div");
    box.innerHTML="You have attempted "+problemcount+ " problem(s) "+"and scored "+geometricScore+".";
    document.getElementById('score').innerHTML = box.textContent;
}

// Initialize the initial problem when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('geometric-problem-text').textContent = currentGeometricProblem.problem;
});
