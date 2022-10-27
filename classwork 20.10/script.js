const inputs = document.getElementsByName("button");
const students = [];

for (const input of inputs) {
    input.addEventListener("click", function() {
        const inputsWithData = document.getElementsByName("student");
        const name = inputsWithData[0].value;
        const surname = inputsWithData[1].value;
        const age = inputsWithData[2].value;
        createStudent(name, surname, age);
        showStudents();
    })
}

function createStudent(name, surname, age) {
    let adult = age >= 18;
    let gender = null;
    const student = {
        name: name.length > 0 ? name : 'No name',
        surname,
        age,
        adult,
        gender: gender ?? "W",
    }
    students.push(student);
}

function showStudents() {
    console.log(students)
}








function findingDistentstFromTwoPoints (){
    let coordinateX = +document.getElementById("coordinateX").value
    let coordinateY = +document.getElementById("coordinateY").value
    createPoint(coordinateX, coordinateY)
}



function createPoint (x, y){
let result = Math.sqrt((x * x) + (y * y))
alert (result)
}

