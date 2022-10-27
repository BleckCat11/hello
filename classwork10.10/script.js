let word = "";
const vowels = ["e", "y", "u", "i", "o", "a"];
document.getElementById("input1").addEventListener("keyup", changedWord, false);
let allButtons = document.getElementsByName("buttonsOfChooseOption");
for (let button of allButtons) {
  button.addEventListener(
    "click",
    function (e) {
      chooseOption(e.target.id);
    },
    false
  );
}

function correctWord() {
  let input1 = document.getElementById("input1").value;
  let findingSpace = input1.indexOf(" ");
  if (findingSpace != -1) {
    document.getElementById("input1").value = "";
  }
}
function changedWord() {
  word = document.getElementById("input1").value;
}

function chooseOption(choosenButton) {
  if (choosenButton == "wordLength") {
    getLength();
  }else if (choosenButton == "randomPartWord"){
    randomPartWord()
  }
  else if (choosenButton == "howManyLetters_o") {
    countLettersO();}

   else if (choosenButton == "JounWithDollar") {
    JounWithDollar();
  } else if (choosenButton == "wordIsEvenOrOdd") {
    isWordLengthEven();
  } else if (choosenButton == "vowelsAndConsonants") {
    vowelsAndConsonants();
  } else if (choosenButton == "reversWord") {
    reversWord();
  } else {
    sortLettersOfWord();
  }
}
function getLength() {
  let wordLength = word.length;
  presentResult(wordLength);
}
function countLettersO() {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "o") {
      counter++;
    }
  }
  presentResult(counter);
}
function isWordLengthEven() {
  let finalResult = "";
  if (word.length % 2) {
    finalResult = "odd";
  } else {
    finalResult = "even";
  }
  presentResult(finalResult);
}
function sortLettersOfWord() {
  let allLetters = [];
  for (let i = 0; i < word.length; i++) {
    allLetters.push(word[i]);
  }
  let sortAllLetters = allLetters.sort();
  presentResult(sortAllLetters);
}

function vowelsAndConsonants() {
  let counterVawels = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) != -1) {
      counterVawels++;
    }
  }
  presentResult(
    `Vawels: ${counterVawels} , consonants: ${word.length - counterVawels}`
  );
}

function presentResult(result) {
  document.getElementById("result").innerHTML = result;
}
function reversWord() {
  let result = word.split("").reverse().join("");
  presentResult(result);
}

function createArrayFrom0(max) {
  const arr = [];
  for (let i = 0; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function randomPartWord() {
  let word1 = "";
  let max = word.length;
  for (let i = 0; i < word.length; i ++) {
    let random = Math.floor(Math.random() * max);
    word1 = word1 + word[random]

  }

  presentResult(word1)
}

function JounWithDollar (){
  word.split("").join("$")
}

function createObjectFromWord(word) {
  const obj = {};
  for (const letter of word) {
    if (Object.keys(obj).indexOf(letter) == -1) {
      obj[letter] = 1;
    } else {
      obj[letter] = obj[letter] + 1;
    }
  }
  return obj;
}