const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const addBtn = document.getElementsByTagName('button')[0];
const resultSpan = document.getElementById('result');

const addNumbers = (a, b) => a + b;

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const result = addNumbers(+secondNumber.value, +firstNumber.value);
    resultSpan.textContent = result;
});
