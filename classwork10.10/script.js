let word;
document.getElementById("input1").addEventListener("keyup", changedWord, false);
let allButtons = document.getElementsByName("buttonsOfChooseOption");
for (let button of allButtons) {
  button.addEventListener(
    "click",
    function (e) {
      console.log(e.target.id);
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
  } else if (choosenButton == "howManyLetters_o") {
    countLettersO()
  }
  else if (choosenButton == "wordIsEvenOrOdd"){
    isWordLengthEven()
  }
  else{
    sortLettersOfWord()
  }
}
function getLength() {
  document.getElementById("result").innerHTML = word.length;
}
function countLettersO() {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "o") {
      counter++;
    }
  }
  document.getElementById("result").innerHTML = counter;
}
function isWordLengthEven() {
if (word.length % 2 == true){
  document.getElementById("result").innerHTML = "odd";
}else {
  document.getElementById("result").innerHTML = "even";
}
}
function sortLettersOfWord() {
  let allLetters = []
  for (let i = 0; i < word.length; i++) {
    allLetters.push(word[i])
  } 
  let sortAllLetters = allLetters.sort()
  document.getElementById("result").innerHTML = sortAllLetters
}
