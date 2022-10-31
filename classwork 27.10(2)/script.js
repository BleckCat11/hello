function function1() {
    let i = 0
    let lettersT = []
  let word = document.getElementById("input1").value;
  while (i < word.length + 1) {
    let t = word.indexOf("t", lettersT[lettersT.length - 1]);
    if (t != -1){
        lettersT.push(t + 1)
    
    }
    i++
  }
  console.log (lettersT)
}
function
