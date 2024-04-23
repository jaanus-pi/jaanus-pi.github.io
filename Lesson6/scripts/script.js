// One row comment

/*
    Multi Line Comment
    Test Line 2
*/

/*
    divTest1
    div_test_1
*/

// Variables ehk muutujad

var x = "1";
let y = "2";
const z = "3"; // Constant

/* 
    int - Integer ehk täisarv 32bit
    long - Integer ehk täisarv 64bit
    string - Text ehk sõna
    boolean - jah/ei, true/false
    float - number with decimal ehk arv ujuvkomaga 32bit
    double - number with decimal ehk arv ujuvkomaga 64bit
*/

let number1 = 1; // type INT
let word1 = "1"; // type STRING
let bool = true; // type BOOLEAN - true/false ehk 1bit
let number2 = 1.12; // type double

console.log("TEST"); // Print text into Console

let customerName = "hey";
console.log(customerName);
console.log(customerName);
console.log(customerName);
console.log(customerName);
console.log(customerName);
console.log(customerName);

customerName = "nice"
console.log(customerName);
console.log(customerName);
console.log(customerName);

let studentName = "Mari";
let studentMathGrade = 5;
let studentLangGrade = 4;
let studentPEGrade = 3;

console.log("Student " + studentName + " GPA " + ((studentMathGrade + studentLangGrade + studentPEGrade) / 3))

// Array / List - massiiv
/* 
    Mujal progekeeltes
    Array - fixed length
    List - dynamic length
*/
let students = ["Dima", "Juku", "Mari", "Jaanus"];
console.log(students);
students.push("Dima2");
console.log(students);
students.splice(2, 1);
console.log(students);
console.log(students[2]);

let jukuPos = students.indexOf("Juku");
console.log(jukuPos);


// JSON - JavaScript Object Notation
let studentObj = {
    "Name": "Toomas",
    "Age": "40",
    "City": "Tallinn",
    "isStudent": true
}

console.log(studentObj);
console.log(studentObj.Name + ", " + studentObj.Age);
console.log(studentObj.Age);

console.log("Your students are: " + students.join(", "));

let finalStudents = [
    {
        "Name": "Toomas",
        "Age": "40",
        "City": "Tallinn",
        "isStudent": true
    },
    {
        "Name": "Albert",
        "Age": "30",
        "City": "Tallinn",
        "isStudent": true
    }
];

finalStudents.push(
    {
        "Name": "Jan",
        "Age": 44,
        "City": "Rakvere",
        "isStudent": false
    }
)

console.log(finalStudents);
console.log(finalStudents[0].Name);

let juku = "Juku";

console.log(juku.toLowerCase());
console.log(juku.toUpperCase());

// IF sentence ehk if laused
/*
    boolean - true / false ehk 1 / 0

    Kas juku on sama mis Juku
        0 ehk false

    Kas EI ole !
    Kas on võrdne ==
        või suurem =>
        või väiksem =<
    Kas on suurem >
    Kas on väiksem <

    Kas opilane on Juku JA kas opilane elab tartus?
    Kas opilane on Juku VOI kas opilane elab tartus?

    OR
    00 - 0
    01 - 1
    10 - 1
    11 - 1

    AND
    00 - 0
    01 - 0
    10 - 0
    11 - 1
*/

if (juku == "Juku") { // TRUE
    console.log("Jah jukud on võrdsed.");
} else { // FALSE
    console.log("Ei leidnud sellist Jukut");
}

if (studentObj.Name == "Juku" || studentObj.City == "Tallinn") {
    console.log("Jah");
} else {
    console.log("Ei");
}

let cars = ["BMW", "Audi", "Toyota"];
console.log(cars);

x = 0;
console.log("X: " + x);
x = x + 1;
console.log("X " + x);
x += 1;
console.log("X: " + x);
x++;
console.log("X: " + x);

console.log("--------------------------");
// FOR / While tsükkel
// i => iteration, j / k / l
// i < 10, kui kaua see iteratsioon kestab, niikaua kuni vastus on TRUE
// i++ suurendavb iteratsiooni 1 võrra
for (let i = 0; i < 10; i++) {
    console.log("I: " + i);
}

for(let i = 0; i < cars.length; i++) {
    console.log("Car name: " + cars[i]);
}

let a = 0;
while(a < 10) {
    console.log("A: " + a);
    a++
}

let b = 0;
while(true) {
    console.log("B: " + b);
    b++;
    if(b > 10) {
        break;
    }
}

// KODUS
/*
    Teha JSON kus on auto andmed: Mark, aasta, hind, värv, kas ostetud. Min 5 erinevat autot.
    Teha for ning tuua välja kõik ühel real kasutades console.log()
    Lisa kui on aega
        Kuvada ainult need mis ei ole ostetud
*/

console.log(`Name: ${finalStudents[0].Name}, Age: ${finalStudents[0].Age}`)

console.log("Vanus: " + finalStudents[0].Name ? "0 on Toomas" : "0 ei ole Toomas")

/*
    if loogika ? "IF TRUE" : "IF FALSE"
*/