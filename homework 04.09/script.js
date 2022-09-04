function f1() {
  let input = +document.getElementById("input1").value;
  let counter = 0;
  while (counter < input) {
    let newButton = document.createElement("button");
    newButton.innerHTML = "new button";
    let div1 = document.getElementById("div1");
    div1.appendChild(newButton);
    counter++;
  }
}

function f2_2(){
    let newdiv = document.createElement("div");
    newdiv.innerHTML = "hello";
    let div2 = document.getElementById("div2");
    div2.appendChild(newdiv);
}
function f2_1 (){
    let newdiv = document.createElement("div");
    newdiv.innerHTML = "bye";
    let div2 = document.getElementById("div2");
    div2.appendChild(newdiv);
}

function f3 (){
    let input = document.getElementById("input2").value
    let inputLength = input.length
    if (inputLength >= 10 && inputLength <= 20){
        let newdiv = document.createElement("div");
        newdiv.innerHTML = "newdiv";
        let div2 = document.getElementById("div3");
        div2.appendChild(newdiv);
    }
}

function f4 (){
    setInterval(function() {
        console.log(document.getElementById("input4").value)
      }, 1000)
}


function f5 (){
let buttons = document.getElementsByTagName("button").value
 for (let i =0; i < buttons.length; i ++){

 }
console.log()
 
}





