let number = document.getElementById("enteredNumber").value.length
  ? document.getElementById("enteredNumber").value
  : 0;

document
  .getElementById("enteredNumber")
  .addEventListener("keyup", callFunctions, false);

//Фкнція виклику усіх функцій після зміни числа
function callFunctions() {
  updateNumber();
  sumOfAllNumbers();
  sortAsc();
  sortDesc();
  maxNumber();
//   maxMultiplicationOfThreeNumbers();
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
  document.getElementById(id).innerHTML = result;
}

function sumOfAllNumbers() {
  let id = "task1";
  let result = 0;
  let stringNumber = String(number);
  for (let i of stringNumber) {
    result = result + Number(i);
  }
  enterResult(id, result);
}

function sortAsc() {
  let id = "task2";
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
   let id = "task4"
  let stringNumber = String(number);
  let max = 0;
  for (let i of stringNumber) {
    if (i > max) {
      max = i;
    }
  }
  enterResult(id, max);
}

function maxMultiplicationOfThreeNumbers() {
   let id = "task5"
   let max1 = 0
   let max2 = 0
   let max3 = 0
   let stringNumber = String(number);
   for (let i of stringNumber) {
if (i > max1){
    max1 = i
}

}
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
