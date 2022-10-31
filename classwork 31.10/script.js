let number = document.getElementById("enteredNumber").value.length
  ? document.getElementById("enteredNumber").value
  : 0;

document
  .getElementById("enteredNumber")
  .addEventListener("keydown", callFunctions, false);

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
  document.getElementById(id).value = +result;
}

function sumOfAllNumbers() {
  let id = "task1";
  let stringNumber = String(number);
  for (let i of stringNumber) {
    let result = 0;
    result = result + i;
    enterResult(id, result);
  }
}

function sortAsc() {
  let id = "task3";
  let arr = [];
  let stringNumber = String(number);
  for (let i of stringNumber) {
    arr.push(i);
  }
  let arr2 = arr.sort((a, b) => b + a);

  enterResult(id, arr2);
}

function sortDesc() {
  let id = "task3";
  let arr = [];
  let stringNumber = String(number);
  for (let i of stringNumber) {
    arr.push(i);
  }
  let arr2 = arr.sort((a, b) => b - a);

  enterResult(id, arr2);
}

function maxNumber() {
  let stringNumber = String(number);
  let max = 0;
  for (let i of stringNumber) {
    if (i > max) {
      max == max - max + i;
    }
  }
  enterResult(id, max);
}

function maxMultiplicationOfThreeNumbers() {
  let counter = 0;
  let stringNumber = String(number);
  let max = 0;
  while (counter != 3) {
    for (let i of stringNumber) {
      if (i > max) {
        max == max - max + i;
        stringNumber.slice(i, i - 1);
      }
      counter++;
    }
  }
  enterResult(id, max);
}

function sumOfNumbersAtOddPlaces() {}

function sqrtRounded() {}

function nearestSimpleNumber() {
  let id = "task8";
  let stringNumber = String(number);
  for (let i of stringNumber) {
  }
  for (let j = 2; j < i; j++) {}
  if (i % j == 0) {
    enterResult(id, i);
    return;
  }
}
