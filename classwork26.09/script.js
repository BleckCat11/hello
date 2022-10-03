function1 ()
function function1 (){

    let aboutJohn = {
        
    }
    aboutJohn.name = "John"
    aboutJohn.surname = "Smith"

    aboutJohn.name = "Pith"
    // delete aboutJohn.name
    for (let key in aboutJohn) {
        console.log(aboutJohn[key])
        }    
}
