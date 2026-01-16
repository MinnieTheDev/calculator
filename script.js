function add(a,b) {
	return a + b
};

function subtract(a,b) {
	return a - b
};

function divide(a,b) {
	return a/b;
};

function multiply(a,b) {
  return a * b;
};

let num1, operator, num2;

function operate(num1, num2, op) {
    return op(num1, num2);
}