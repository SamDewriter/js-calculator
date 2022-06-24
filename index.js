let firstNumber = prompt('Enter the first number: ');
let secondNumber = prompt('Enter the second number: ');
let operand = prompt('Enter the operation: ');

if(operand === '+') {
    result = parseInt(firstNumber) + parseInt(secondNumber);
    alert(result);

} else if (operand === '-') {
    result = parseInt(firstNumber) - parseInt(secondNumber);
    alert(result);

} else if (operand === '*') {
    result = parseInt(firstNumber) * parseInt(secondNumber);
    alert(result);

} else if (operand === '/') {
    result = parseInt(firstNumber) / parseInt(secondNumber);
    alert(result);

} else {
    alert('The calculator cannot perform this operation')
}

// switch(operand) {
//     case "+":
//         result = parseInt(firstNumber) + parseInt(secondNumber);
//         alert(result);
//         break;
//     case "-":
//         result = parseInt(firstNumber) - parseInt(secondNumber);
//         alert(result);
//         break;
//     case "*":
//         result = parseInt(firstNumber) * parseInt(secondNumber);
//         alert(result);
//         break;
//     case "/":
//         result = parseInt(firstNumber) / parseInt(secondNumber);
//         alert(result);
//         break;
//     default:
//         alert("The calculator is basic!")
// }