const matematika = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
};

const firstInput = document.getElementById('first_number');
const action = document.getElementById('action');
const secondInput = document.getElementById('second_number');
const button = document.querySelector('.button');
const result = document.querySelector('.result');

button.addEventListener('click', (e) => {
    e.preventDefault()
    result.innerHTML = `${firstInput.value} ${action.value} ${secondInput.value} = ${matematika[action.value]((Number(firstInput.value)), (Number(secondInput.value)))}`;
})

result.innerHTML = ''