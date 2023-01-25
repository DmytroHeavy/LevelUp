 
const seatString = 'Введіть рядок слів';
const seat = prompt(seatString);
let arr = [seat];
let seats = arr.Split(' ');
// let arr = ["u\Z%Cm@kc|", "6kmpNvMqQK", "THbw%}\_2L", "}QVMQbik@'", "g}7P5+:?>f"];

arr = arr.map(str => "letters: " + (str.match(/[a-z]/gi) || []).length);

console.log(arr);
// string[] seats = arr.Split(' ')






const questionFirsthline = 'Введіть перший рядок';
const firthline = prompt(questionFirsthline);
firthline.length;
const questionsSecondline = 'Введіть другий рядок';
const secondline = prompt(questionsSecondline);
secondline.length;
const questionsThridline = 'Введіть третій рядок';
const thirdline = prompt(questionsThridline);
thirdline.length;
const questionsFourthline = 'Введіть четвертий рядок';
const fourthline = prompt(questionsFourthline);
fourthline.length;
const questionsFifthline = "Введіть п'ятий рядок";
const fifthline = prompt(questionsFifthline);
fifthline.length;
Math.min(firthline.length, secondline.length, thirdline.length, fourthline.length, fifthline.length);
alert(Math.min);






// let arr = ["u\Z%Cm@kc|", "6kmpNvMqQK", "THbw%}\_2L", "}QVMQbik@'", "g}7P5+:?>f"];

// const answer = arr.map(function (item) {
// return item[.length]
// });

//  console.log(answer);