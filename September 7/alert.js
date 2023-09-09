alert("Hello JavaScript!");

let firstName = "Jo";
let lastName ="Aquino";

console.log(firstName + " " + lastName);

let greeting ="Hello, " + firstName+" "+lastName+"!";
alert(greeting);

let num = 5;

if (num >= 0){
    console.log(num + " " + "is positive");
}
else {
   console.log(num + " " + "is negative");
}

//for (initialization; condition; iteration){code to be executed};

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    console.log(sum);
}

let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}

let ask;
do {
    ask = prompt("Enter a number: ");
}while (isNaN(ask));//the NaN here is asking for a number. It basically means Not a Number so isNaN = isNotaNumber
console.log("You entered: " + ask);

function greet() {
    console.log("This is a function sample");
}
greet();