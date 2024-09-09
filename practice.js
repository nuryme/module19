//-----------------------------   for loop  --------------------------------
// problem1
/*
let message = "I will invest at least 6 hrs every single day for next 60 days";
let print = 1;
while(print<=60) {
    console.log(message);
    print++;
}       */
// 2. 
/*
for(let i = 61; i <= 100; i++) {
    if(i%2== 1) {
        console.log(i);
    }
}       */
// 3. 
/*
for(let i = 78; i <= 98; i++) {
    if(i%2== 0) {
        console.log(i);
    }
}       */
// 4. 
/*
let sum = 0;
for(let i =91; i <= 129; i++) {
    if(i%2== 1) {
        sum += i;
        console.log("Sum: ", sum);
    }
}
console.log("Total is: ", sum);     */
// 5. 
/*
let sum = 0;
for(let i = 51; i <= 85; i++) {
    if(i % 2 == 0) {
        sum += i;
        console.log("Sum: ", sum);
    }
}
console.log("total: ", sum);       */
// 6.
/*
let num = 9;
for(let i = 1; i<=10; i++) {
    console.log(num, "x", i, "=", num*i);
}       */
// 7.
/*
for(let i=81; i>=65; i--) {
    console.log(i);
}   */

//-------------------------   while loop  ---------------------------
// 1.
/*
let i = 1;
while(i<=60) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}   */
// 2.
/*
let i = 61;
while(i<=100) {
    if(i % 2 ==1) {
        console.log(i);
    }
    i++;
}   */
// 3.
/*
let i = 78;
while(i<=98) {
    if(i % 2== 0) {
        console.log(i);
    }
    i++;
}   */
// 4.
/*
let i = 81;
let sum = 0;
while(i <= 131) {
    if(i%2==1) {
        sum += i;
    }
    console.log("Sum: ", sum);
    i++;
}
console.log("total: ", sum)     */
// 5.
/*
let i = 206;
let sum = 0;
while(i<=311) {
    if(i % 2 == 0) {
        sum += i;
        console.log("Sum: ", sum);
    }
    i++
}
console.log("Total: ", sum);    */
// 6.
/*
let num = 5;
let i = 1;
while(i <=10) {
    console.log(num, "x", i, "=", num*i);
    i++;
}   */
// 7.
/*
let i = 21;
while(i >= 15) {
    console.log(i);
    i--;
}   */

//-------------------------   break  ---------------------------
// 1.
/*
for(let i=1; i <= 200; i++) {
    console.log(i);
    if(i >= 100) {
        break;
    }
}   */
// 2.
/*
let i =  1;
let sum = 0;
while(sum += i) {
    if(sum >= 100) {
        break;
    }
    console.log("Sum: ", sum);
    i++;
}   */
// 3.
for(let i =1; i<=100; i++) {
    console.log(i);
    if(Math.sqrt(i)%1==0) {
        break;
    }
}

//-------------------------   continue  ---------------------------
// 1.
/*
for(let i =1; i<=40; i++) {
    if(i%2==1) {
        continue;
    }
    console.log(i)
}   */
// 2.
//Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
for(let i = 55; i <=85; i++) {
    if(i%5 == 0) {
        continue;
    }
    console.log(i)
}