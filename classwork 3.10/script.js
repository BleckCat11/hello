let arrayOfColors = [];
function correctNumber() {
  let allInputs = document.getElementsByName("color");
  for (let i of allInputs) {
    console.log (i.value)
    if (i.value > 255 || i.value < 0) {
      i.value = 0;
    
    }
  }
}
function save() {
  let allInputs = document.getElementsByName("color");
  let r = + allInputs[0].value;
  let g = + allInputs[1].value;
  let b = + allInputs[2].value;
  createColor(r, g, b);
  console.log(arrayOfColors);
}
function createColor(a, b, c) {
  let color = {
    r: a,
    g: b,
    b: c,
  };

  arrayOfColors.push(color);
}
function changeColor() {
  let lastinput = +document.getElementById("lastinput").value;
  if (lastinput <= arrayOfColors.length) {
    let color = arrayOfColors[lastinput - 1];
    let result = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    console.log(result);
    document.body.style.backgroundColor = result;
  } else {
    alert("Такого кольору немає");
  }
}

