let number = document.getElementById("enteredNumber").value.length ? document.getElementById("enteredNumber").value : 0;

document.getElementById("enteredNumber").addEventListener(
    "change",
    callFunctions(),
    false,
)

//Фкнція виклику усіх функцій після зміни числа
function callFunctions() {
    updateNumber();
    sumOfAllNumbers();
    sortAsc();
    sortDesc();
    maxNumber();
    maxMultiplicationOfThreeNumbers();
    sumOfNumbersAtOddPlaces();
    sqrtRounded();
    nearestSimpleNumber();
}

//Функція для оновлення введеного числа користувачем
function updateNumber() {
    number = document.getElementById("enteredNumber").value.length ? document.getElementById("enteredNumber").value : 0;
}

// Функція для виведення результату у дів. Приймає в себе ід.
function enterResult(id) {

}

function sumOfAllNumbers() {

}

function sortAsc() {
    
}

function sortDesc() {
    
}

function maxNumber() {
    
}

function maxMultiplicationOfThreeNumbers() {
    
}

function sumOfNumbersAtOddPlaces() {
    
}

function sqrtRounded() {
    
}

function nearestSimpleNumber() {
    
}