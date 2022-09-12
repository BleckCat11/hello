function1()
function function1() {
  let divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener(
      //Правильно mouseover - використовуй гугл, а також використовуй різні перевірки, щоб зрозуміти, чому не працює, код - наприклад,
      //постав замість mauseover "click" - і перевір, чи проблема у цьому рядочку
      "mauseover",
      function () {
        //потрібно використовувати e.target , а не divs[i]
        //також формат кольору має бути rgb(123, 234, 45) - після rgb не має бути відступу
        divs[i].style.backgroundColor = 'rgb ( '+ 123 +' ,' +234+ ',' +45+') '
      },
      false
    );
  }
}

//Про це завдання поговоримо разом, однак підхід такий -
// на прикладі function2_top: тобі потрібно отримати, який на момент натисканні кнопки top у діва (const currentTop = document.getElementById("div4").style.top). 
//Потім від цього значення відняти 10px і присвоїти в стилі діву.

function function2_buttom (){
//чи є такий стиль, як buttom? будь ласка, гугли, перевіряй (навіть сам VS Code не видає buttom, коли ставиш крапку після style)
//правильно - bottom
// також після "=" нема числа
document.getElementById("div4").style.buttom =  + "px"

}
function function2_top (){
 
    document.getElementById("div4").style.top = 10 + "px"
   
}
function function2_right (){
    document.getElementById("div4").style.right = 10 + "px" 
}
function function2_left (){
    document.getElementById("div4").style.left = 10 + "px"
}

//підхід такий самий як в 2 задачі - спочатку отримати стиль діва, потім задати новий
//Функція не викликається
function function3(){
    let div = document.getElementById("div6")
    div.addEventListener("click"
    ,function (e){
        
        document.getElementById("div4").style.height = + 10 + "px"
    },false
    )
    //перевіряй правопис, правильно - dblclick (https://learn.javascript.ru/introduction-browser-events)
    div.addEventListener("dobleclick",
    function (e){
        document.getElementById("div4").style.height = - 10 + "px"
    },false
    
    )

}

//нема false третім параметром. Функція не викликається
function function4 (){
    
    document.body.addEventListener("click", function (){
        alert("Click was done")
    }
    
    
    )
}

