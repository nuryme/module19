//-----------------------------   Loop  -----------------------------------

//---------------------  for of loop
/*
const numbers = [1, 2, 3, 4, 5, 6, 7];
for(const single_num of numbers) {           //numbers er element gulake ekta ekta kore print kore
    console.log(single_num);
}
const fruits = ["apple", "banana", "orange", "pepper"];
for(const fruit of fruits) {
    console.log(fruit);
    console.log("I wanna eat");
}       */

//---------------------  while loop
/*
let count = 1;
while(count<5) {
    console.log(count);
    count++;
}
let num = 1;   //***  oboshshoi oboshshoi let/var use korte hobe. const use kora jabe na. cause condition e value change hocche continuously. const  use korle  value change kora jay na
let sum = 0;  //ekta ekta kore jog kore rakhar jonno patro/container. container e kichu rakhar age container khali thake. tai sum er prathomic value 0
while(num<10) {
    sum = sum + num;
    num++;
    console.log("Sum: ", sum);
}
let num2 = 1; 
while(num2<10) {
    if(num2 % 2 == 0) {
        console.log("Even number: ", num2);
    }
    // console.log(num2);
    num2++;
}
//break;
let num = 54;
while(num>25) {
    console.log(num);
    if(num<50) {
        break;
    }
    num--;
}       */
//continue:
/*
let num = 0;
while(num<15) {
    num++;
    if(num % 5 !== 0) {
        continue;
    }
    console.log(num);
}       */

//---------------------  for loop
//structure
//for(first part; second part; third part) { loop statement}
//for(variable declaration; loop condition; loop variable change)
/*
for(let num = 1; num < 10; num++) {
    console.log(num);
}
//odd
for(let num2 = 1; num2 < 10; num2++) {
    if(num2 % 2 == 1) {
        console.log("Odd number: ", num2);
    }
    // console.log(num2);
}
//even
for(let i = 0; i<10; i=i+2) {
    console.log(i);
}
//odd
for(let i = 1; i<10; i = i+2) {
    console.log(i);
}
//sum
let sum1 = 0;
for(let i = 11; i<=20; i++){
    sum1 += i;
    console.log("sum is:", sum1);
}
console.log("The sum of numbers from 11 to 20 is :", sum1);
//i++ = incremental
//decremental
for(i=10; i>=0; i--) {
    console.log(i);
}
for(let i=1; i<=10; i++) {
    if(i % 2 == 1){
        console.log(i);
    }
}
for(let i=1; i<=10; i++) {
    if(i % 2 != 0){
        console.log(i);
    }
}
//divisible numbers from 1 to 30 by 5;
for(let i=1; i < 30; i++) {
    if(i % 5 == 0) {
        console.log(i);
    }
}
for(let i=1; i < 30; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        console.log(i);
    }
}
for(let i=1; i < 30; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}
//sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for(let i = 1; i < 20; i++) {
    if(i % 3 == 0) {
        sum += i;
        console.log("total: ", sum);
    }
}
//break: I am done with this loop. loop end.
console.log("the sum: ", sum)
for(let i = 1; i < 200; i++) {
    console.log(i);
    if(i > 10) {
        break;
    }
}
for(let i = 1; i < 200; i++) {
    console.log(i);
    if(i >= 10) {
        break;
    }
}
//continue: skip rest of the codes of this iteration.
for(let i = 1; i < 10; i++) {
    if(i % 2 == 1) {
        continue;
    }
    console.log(i);
}       */

//-----------------------------   do while loop
