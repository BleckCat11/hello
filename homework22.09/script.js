function5();
function function5() {
  let arr = [1, 2, 3];
  let div = document.getElementById("div6");
  let button = document.getElementById("button");
  div.addEventListener(
    "mouseover",
    function () {
      let arr1 = arr.length + 1;
      arr.push(arr1);
    },
    false
  );
  button.addEventListener("click", function () {
    alert(arr);
  });
}

function6();
function function6() {
  let button = document.getElementById("button1");
  let inputValue = document.getElementById("input1").value;
  button.addEventListener("cllick", function () {
    if (inputValue.length > 5) {
     let result =   inputValue.length.slice(5, inputValue.length)
     document.getElementById("input1").value = result
    }
    
  });
}
function7()
function function7 (){
// у мене не вийшло 7 8 9 10 11 12  я не розумію як вирізати
}
function8()
function function8 (){

}

disappear()
function disappear() {
  const btn = document.getElementById('byebye');
  btn.addEventListener('click', function() {
    btn.remove();
  });
}

function hello() {
  alert("Hello")
}

function bye() {
  alert("Bye")
}


const arr = [111, 212, 32, 424, 5];

// alert(f.substring(0, f.indexOf(' ', 2)))
// const sortedArray = arr.sort((a, b) => a - b)