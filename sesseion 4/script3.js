var num1=Number(prompt('enter the first number'));
var op=prompt('enter the operation + - * /');
var num2=Number(prompt('enter the first number'));

const p = document.getElementById('result');

function sum(a,b){
    displayResult(a+b);
    return a+b;
}

function subtraction(a,b){
    displayResult(a-b);
    return a-b;
}

function multi(a,b){
    displayResult(a*b);
    return a*b;
}

function division(a,b){
    displayResult(a/b);
    return a/b; 
}
function displayResult(result){
    p.innerHTML=`${num1} ${op} ${num2} = ${result}`;
}
switch(op){
    case "+":
        sum(num1,num2);
        break;
        case "-":
        subtraction(num1,num2);
        break;
        case "*":
        multi(num1,num2);
        break;
        case "/":
        division(num1,num2);
        break;
        default:
            alert(`inncorrect operation!!!`);
            break;
}

