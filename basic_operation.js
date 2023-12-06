// basic_operations.js
let problemcount = -1;
let basicScore = 0;
let currentBasicProblem = generateBasicMathProblem();

//generating basic math problem here.
function generateBasicMathProblem() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const problem = `${num1} ${operation} ${num2}`;
    const answer = eval(problem);

    problemcount++; 
    return { problem, answer };
}

//checking answer whether your answere is correct or wroung.
function checkBasicAnswer() {
    const userAnswer = parseFloat(document.getElementById('basic-user-answer').value);

    if (userAnswer === currentBasicProblem.answer) {
        document.getElementById('basic-result').textContent = 'Correct!';
        basicScore++;
    } else {
        document.getElementById('basic-result').textContent = `Wrong! The correct answer is ${currentBasicProblem.answer}`;
    }

    currentBasicProblem = generateBasicMathProblem();
    document.getElementById('basic-problem-text').textContent = currentBasicProblem.problem;
    document.getElementById('basic-user-answer').value = '';

}

//for displaying score.
function getScore(){
    var box=document.createElement("div");
    box.innerHTML="You have attempted "+problemcount+ " problem(s) "+"and scored "+basicScore+".";
    document.getElementById('score').innerHTML = box.textContent;
}

// Initialize the initial problems for basic operations
document.getElementById('basic-problem-text').textContent = currentBasicProblem.problem;
