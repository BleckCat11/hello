function word() {
  let inputs = document.getElementsByClassName("inputs");
  for (let i = 0; i < inputs.length; i++) {
    
    document.getElementsByClassName("inputs")[i].value = i + 1;
  }
}

// function word() {
//   let array = [];
//   for (let i = 0; i < 3; i++) {
//     let words = prompt();
//     array.push(words);

//   }
//   alert(array.sort().reverse().join("   "));

// }
