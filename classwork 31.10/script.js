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
  // mostRepeatedDigit();
  uniqueDigits();
  getDivisors()
  closestDividendTo3()
  strangeTaskAboutEvenNumber()
  isNumberSimple()
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

// function mostRepeatedDigit() {
//   let stringNumber = String(number);
//   let allNumber = {
//   }
//   for (let i of stringNumber) {
// let istr = String(i)
// let allNumberAndI = allNumber.indexOf(i)
// if (allNumberAndI == -1){
//   allNumber.i = i
// }
// else{
//   allNumber.i ++
// }
//   }
// }

function uniqueDigits() {
  let id = "task12";
  let arreyOfSpecialNumbers = [];
  let stringNumber = String(number);
  for (let i of stringNumber) {
    let lookingForSpecialNumber = arreyOfSpecialNumbers.indexOf(i)
    if (lookingForSpecialNumber == -1) {
      arreyOfSpecialNumbers.push(i)
    }
  }
  enterResult(id, arreyOfSpecialNumbers.join(""));
}

function getDivisors() {
  let id = "task13"
  let counter = []
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      counter.push(i)
    }
  }
  // counter.push(number)
  enterResult(id, counter)
}

//Зробити, щоб знаходило по прикладу: якщо 8 - то найближче, що ділиться на 3 - 9, якщо 7 - то 6.
function closestDividendTo3() {
  let stringNumber = String(number);
  let id = "task14"
  if (number <= 3) {
    enterResult(id, 3)
  } else {
    for (let i = number; i >= 0; i--) {
      if (i % 3 == 0) {
        enterResult(id, i)
        console.log(i)
        return
      }
    }
  }
}



function strangeTaskAboutEvenNumber() {
  let stringNumber = String(number);
  let id = "task15"
  // if (number % 2 == 0) {
    if (number.length % 2 == 0) {
      let firstPart = stringNumber.slice(0, number.length / 2)
      let lastPart = stringNumber.slice(number.length / 2, number.length)
      let result = +firstPart / +lastPart
      enterResult(id, result)
    } else {
      return
    }
  // } else {
  //   return
  // }
}

function strangeTaskAboutOddNumber() {

}

function isNumberSimple() {
  let id = "task17"
  let counter = []
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      counter.push(i)
    }
  }
  counter.push(number)
  if (counter.length > 2) {
    enterResult(id, "складене")
  } else {
    enterResult(id, "просте")
  }

}

function factorial() {

}

function sumOfAllInputs() {
  
}