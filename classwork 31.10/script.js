let number = document.getElementById("enteredNumber").value.length
  ? document.getElementById("enteredNumber").value
  : 0;

document
  .getElementById("enteredNumber")
  .addEventListener("keydown", callFunctions(), false);

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
  number = document.getElementById("enteredNumber").value.length
    ? document.getElementById("enteredNumber").value
    : 0;
}

// Функція для виведення результату у дів. Приймає в себе ід.
function enterResult(id, result) {
  id.value = result;
  console.log ("result")
}

function sumOfAllNumbers() {
    alert ("fhafkjdhf")
  let id = document.getElementById("task1");
  let stringNumber = String(number);
  for (let i of stringNumber) {
console.log (i)
    let result = 0;
    result = result + i
    enterResult(id, result)
  }
}

function sortAsc() {
}

function sortDesc() {}

function maxNumber() {}

function maxMultiplicationOfThreeNumbers() {}

function sumOfNumbersAtOddPlaces() {}

function sqrtRounded() {}

function nearestSimpleNumber() {}
