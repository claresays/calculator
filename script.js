const numdisplay = document.querySelector("#num-display");
const answer = document.getElementById('answer');

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(oper) {
    switch(oper) {
        case oper == '+':
            disnum.value += '+';
            //return add(a,b);
            break;
        case oper == '-':
            disnum.value += '-';
            //return subtract(a,b);
            break;
        case oper == 'X':
            disnum.value += 'X';
            //return multiply(a,b);
            break;
        case oper == '%':
            disnum.value += '%';
            //return divide(a,b);
            break;
    }
}

function displayNumber(value) {
    const disnum = document.getElementById('num-display');
    switch(value) {
        case 1: 
            disnum.value += '1';
            break;
        case 2: 
            disnum.value += '2';
            break;
        case 3: 
            disnum.value += '3';
            break;
        case 4: 
            disnum.value += '4';
            break;
        case 5: 
            disnum.value += '5';
            break;
        case 6: 
            disnum.value += '6';
            break;
        case 7: 
            disnum.value += '7';
            break;
        case 8: 
            disnum.value += '8';
            break;
        case 9: 
            disnum.value += '9';
            break;
        case 0: 
            disnum.value += '0';
            break;
    }
}

function clearButton() {
    numdisplay.value = "";
    answer.value = "";
}

function getOperator(oper) {
    const disnum = document.getElementById('num-display');
    switch(oper) {
        case '+':
            disnum.value += '+';
            break;
        case '-':
            disnum.value += '-';
            break;
        case 'X':
            disnum.value += 'X';
            break;
        case '%':
            disnum.value += '%';
            break;
    }
}

function compute() {
   const disnum = document.getElementById('num-display');
   const answer = document.getElementById('answer');
   ans = Math.floor(+eval(disnum.value));
   answer.value = '=' + ans;
}