let balls = 3
let counter = 0
let counter3 = 0
let counter2 = 0
const words = ['дерево', 'мама', 'лампа']
const words2 = ["виробляє повітря", " завжди тебе любить но не тато", " коли щось пишеш завжди включаєш її"]

//в інпут виводить рояснення
function game(x = 0) {
  alert("у вас є " + balls + " бали");
  let b = document.getElementsByClassName("12")
  for (let i = 0; i < b.length; i++) {
    b[i].disabled = false
  }
  if (balls > 0) {
    document.getElementById("5").value = words2[x]
  } else {
    alert("У вас закінчилися бали. Кожну годину ви отримуєте 1 бал. Повертайтеся! ")
    for (let i = 0; i < b.length; i++) {
      b[i].disabled = true
      document.getElementById("5").value = "У вас закінчилися бали. Кожну годину ви отримуєте 1 бал. Повертайтеся! "
    }
  }
  let button = document.getElementById("id1")
  button.className = "w"

}
//перевірка слова вписуваного користувачем
function check() {
  if (balls <= 0) {
    let b = document.getElementsByClassName("123")
    for (let i = 0; i < b.length; i++) {
      b[i].disabled = true
      document.getElementById("5").value = "у вас не має балів"
    }
  }
  //поточне пояснення
  let currentDescription = document.getElementById("5").value
  //порядковий номер поточного пояснення в массиві пояснень
  let descriptionNumber = words2.indexOf(currentDescription);
  //порівнюємо введене слово чи правильно
  if (document.getElementById("userWord").value == words[descriptionNumber]) {
    balls = balls + 3
    alert("вгадали!!!")
    alert("+ 3 бали")
    if (descriptionNumber == words.length - 1) {
      document.getElementById("5").value = "ви вгадали всі слова  ви використали  " + counter + "  підказок" + "      ви пропустили  " + counter2 + "  слів" + "      у вас є  " + balls + " балів"
      let b = document.getElementsByClassName("123")
      for (let i = 0; i < b.length; i++) {
        b[i].disabled = true

      }
    } else {
      game(descriptionNumber + 1)
    }
    document.getElementById("userWord").value = ""
  } else {
    alert("неправильно")
    if (counter3 < 5) {
      counter3++
    } else {
      if (balls > 0) {
        balls = balls - 1
        alert("забагато спроб - 1 бал")
        alert("у вас є   " + balls + "  балів")
      } else {
        let b = document.getElementsByClassName("123")
        for (let i = 0; i < b.length; i++) {
          b[i].disabled = true
          document.getElementById("5").value = "ви програли   У вас закінчилися бали. Кожну годину ви отримуєте 1 бал. Повертайтеся! "
        }
      }
    }
  }
}

function helping() {
  if (balls == 1) {
    n()
  }
  if (balls >= 1) {
    balls = balls - 1
  } else {
    alert("у вас не достатьно балів")
    return;
  }
  alert("- 1 бал")
  alert("у вас є   " + balls + "  балів")
  let currentDescription = document.getElementById("5").value
  let descriptionNumber = words2.indexOf(currentDescription);
  counter++
  alert("букв у слові   " + words[descriptionNumber].length)
}

function helping2() {
  if (balls == 2) {
    n()
  }
  if (balls >= 2) {
    balls = balls - 2
  } else {
    alert("у вас не достатьно балів")
    return;
  }
  alert("- 2 бал")
  alert("у вас є   " + balls + "  балів")
  let currentDescription = document.getElementById("5").value
  let descriptionNumber = words2.indexOf(currentDescription);
  let word = words[descriptionNumber]
  let result = word[0]
  for (let i = 0; i < word.length - 1; i++) {
    result = result + "*"
  }
  alert(result)
  counter++
}

function helping3() {
  if (balls == 2) {
    n()
  }
  if (balls >= 2) {
    balls = balls - 2
  } else {
    alert("у вас не достатьно балів")
    return;
  }
  alert("- 2 бал")
  alert("у вас є   " + balls + "  балів")
  let currentDescription = document.getElementById("5").value
  let descriptionNumber = words2.indexOf(currentDescription);
  let word = words[descriptionNumber]
  let result = ""
  counter++
  for (let i = 0; i < word.length - 1; i++) {
    result = result + "*"
  }
  result = result + word[word.length - 1]
  alert(result)
}

function losing() {
  if (balls >= 2) {
    balls = balls - 2;
  } else {
    alert("у вас не достатьно балів");
    return;
  }
  alert("- 2 бал");
  alert("у вас є   " + balls + "  балів");
  let currentDescription = document.getElementById("5").value;
  let descriptionNumber = words2.indexOf(currentDescription);
  counter2++;
  alert("правильне слово  " + words[descriptionNumber]);
  if (descriptionNumber == words.length - 1) {
    
  n()
  document.getElementById("5").value =
  "ви вгадали всі слова  ви використали  " +
  counter +
  "  підказок " +
  "      ви пропустили  " +
  counter2 +
  "  слів";
} else {
    game(descriptionNumber + 1);
  }
}

function n() {
  let b = document.getElementsByClassName("123");
  for (let i = 1; i < b.length; i++) {
    b[i].disabled = true;
    document.getElementById("5").value = "немає балів";
  }
}

function casino() {
  alert("- 2 бали");
  balls = balls - 2;
  alert("у вас є" + balls + "бал");
  let max = 10;
  let random = Math.floor(Math.random() * max);
  let r = +prompt();
  if (r == random) {
    alert("вгадали");
    balls = balls + 10;
    alert("у вас є   " + balls + "  балів");
  } else {
    alert("He вгадали");
  }
  let d = document.getElementById("aaa");
  d.disabled = true;
}

function d() {
  let b = document.getElementsByClassName("123");
  for (let i = 0; i < b.length; i++) {
    b[i].disabled = false;
  }
  let q = document.getElementsByClassName("12");
  for (let i = 0; i < q.length; i++) {
    q[i].disabled = true;
  }
  let person = document.getElementById("d");
  let selectedIndex = person.selectedIndex;
  let personOptions = person.options;
  let descriptions = ["Джон має 5 балів", "Сем має 3 балів", "Ліза має 1 бал"];
  let chosenOption = personOptions[selectedIndex];
  let chosenText = chosenOption.text;
  alert(chosenText);
  if (chosenText == descriptions[0]) {
    balls = balls + 2;
  } else if (chosenText == descriptions[1]) {
    balls = balls;
  }
  if (chosenText == descriptions[2]) {
    balls = balls - 2;h
  }
}
