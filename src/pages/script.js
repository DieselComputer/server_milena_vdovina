document.addEventListener('DOMContentLoaded', function() {
const header = document.getElementById('header');
const el1 = document.createElement('h1');

el1.textContent = 'Вдовина М. Р. (Группа 231)';
const el2 = document.createElement('h3');
el2.textContent = 'Задания:'

header.appendChild(el1);
header.appendChild(el2);
});