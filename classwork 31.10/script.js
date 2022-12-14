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
  maxMultiplicationOfThreeNumbers();
  sumOfNumbersAtOddPlaces();
  sqrtRounded();
  nearestSimpleNumber();
  numberInHighestDigitPow();
  reverseNumber();
  mostRepeatedDigit();
  uniqueDigits();
  getDivisors();
  closestDividendTo3();
  strangeTaskAboutEvenNumber();
  isNumberSimple();
  strangeTaskAboutOddNumber();
  factorial();
  sumOfAllInputs();
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
  let id = "task4";
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
  let id = "task5";
  let maxNumbers = [0, 0, 0];
  let stringNumber = String(number);
  for (let number of stringNumber) {
    for (let i = 0; i < maxNumbers.length; i++) {
      if (number > maxNumbers[i]) {
        maxNumbers[i] = +number;
        maxNumbers = maxNumbers.sort();
        break;
      }
    }
  }
  let result = maxNumbers.reduce((sum, acc) => sum * acc, 1);
  enterResult(id, result);
}

function sumOfNumbersAtOddPlaces() {
  let id = "task6";
  let result = 0;
  let stringNumber = String(number);
  for (let i = 0; i < stringNumber.length; i = i + 2) {
    result = result + +stringNumber[i];
  }
  enterResult(id, result);
}

function sqrtRounded() {
  let id = "task7";
  let Halfresult = Math.sqrt(number);
  let result = Halfresult.toFixed(2);

  enterResult(id, result);
}

function nearestSimpleNumber() {
  let id = "task8";
}

function numberInHighestDigitPow() {
  let id = "task9";
  let stringNumber = String(number);
  let maxNumber = 0;
  for (let i of stringNumber) {
    if (i > maxNumber) {
      maxNumber = i;
    }
  }
  let result = Math.pow(number, maxNumber);
  enterResult(id, result);
}

function reverseNumber() {
  let id = "task10";
  let result = [];
  let stringNumber = String(number);
  //without reverse function !!!
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    result.push(stringNumber[i]);
  }
  let Iresult = result.join("");
  enterResult(id, Iresult);
}

function mostRepeatedDigit() {
  let id = "task11";
  let stringNumber = String(number);
  let result = {};
  let mostRepeatedNumber = 0;
  for (let number of stringNumber) {
    result[number] = result[number] + 1 || 1;
  }
  console.log(result)
  enterResult(id, mostRepeatedNumber);
}

function uniqueDigits() {
  let id = "task12";
  let arreyOfSpecialNumbers = [];
  let stringNumber = String(number);
  for (let i of stringNumber) {
    let lookingForSpecialNumber = arreyOfSpecialNumbers.indexOf(i);
    if (lookingForSpecialNumber == -1) {
      arreyOfSpecialNumbers.push(i);
    }
  }
  enterResult(id, arreyOfSpecialNumbers.join(""));
}

function getDivisors() {
  let id = "task13";
  let counter = [];
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      counter.push(i);
    }
  }
  // counter.push(number)
  enterResult(id, counter);
}

//Зробити, щоб знаходило по прикладу: якщо 8 - то найближче, що ділиться на 3 - 9, якщо 7 - то 6.
function closestDividendTo3() {
  let stringNumber = String(number);
  let id = "task14";
  if (number <= 3) {
    enterResult(id, 3);
  } else {
    for (let i = number; i >= 0; i--) {
      if (i % 3 == 0) {
        enterResult(id, i);
        return;
      }
    }
  }
}

function strangeTaskAboutEvenNumber() {
  let stringNumber = String(number);
  let id = "task15";
  if (number.length % 2 == 0) {
    let firstPart = stringNumber.slice(0, number.length / 2);
    let lastPart = stringNumber.slice(number.length / 2, number.length);
    let result = +firstPart / +lastPart;
    enterResult(id, result);
  } else {
    enterResult(id, " ");
    return;
  }
}

function strangeTaskAboutOddNumber() {
  let stringNumber = String(number);
  let id = "task16";
  if (number.length % 2 == 1) {
    let midleNumber = (number.length - 1) / 2;
    let finalMidelNumber = stringNumber.slice(midleNumber, midleNumber + 1);
    let firstPart = stringNumber.slice(0, (number.length - 1) / 2);
    let lastPart = stringNumber.slice((number.length + 1) / 2, number.length);
    let result = Math.pow(firstPart * lastPart, finalMidelNumber);
    enterResult(id, result);
  } else {
    return;
  }
}

function isNumberSimple() {
  let id = "task17";
  let counter = [];
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      counter.push(i);
    }
  }
  counter.push(number);
  if (counter.length > 2) {
    enterResult(id, "складене");
  } else {
    enterResult(id, "просте");
  }
}

function factorial() {
  let counter = 1;
  let id = "task18";
  if (number <= 10) {
    for (let i = number; i != 0; i--) {
      counter = counter * i;
    }
  }
  enterResult(id, counter);
}

function sumOfAllInputs() {
  let id = "task20";
  let result = 0;
  let allInputs = document.getElementsByClassName("result");
  let allInputsArray = Array.from(allInputs);
  allInputsArray.pop();
  for (let i of allInputsArray) {
    if (isNaN(+i.innerHTML) == false) {
      result = result + +i.innerHTML;
    } else {
      if (i.innerHTML.indexOf(",") != -1) {
        let itIsAlreadyArray = i.innerHTML.split(",");
        for (let j = 0; j < itIsAlreadyArray.length; j++) {
          result = result + +itIsAlreadyArray[j];
        }
      }
    }
  }
  enterResult(id, result);
}
