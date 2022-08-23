function colorinput() {
  let inputs = document.querySelectorAll("input")

  for (let input of inputs) {
    if (input.value > 0) {
      input.className = "green";
    } else if (input.value == 0) {
     input.className = "grey";
    } else {
      input.className = "red";
    }
  }
}
