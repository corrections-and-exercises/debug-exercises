const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const addBtn = document.getElementsByTagName('button');
const resultSpan = document.getElementById('#result');

const addNumbers = () => a * b;

addBtn.addEvntListener('click', (e) => {
    const result = addNumbers(secondNumber.value, firstNumber.value);
    resultSpan.textContent = result;
});
