'use strict';

// // Promiseを使わない場合
// console.log("start");
// setTimeout(() => {
//     console.log("3second");
//     setTimeout(() => {
//         console.log("6second");
//         setTimeout(() => {
//             console.log("9second");
//         }, 3000);
//     }, 3000);
// }, 3000);

// Promiseを使って書いた場合
function wait3seconds() {
    return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}

console.log("start");
Promise.resolve()
.then(() => wait3seconds() )
.then(() => console.log("3seconds") )
.then(() => wait3seconds() )
.then(() => console.log("6seconds") )
.then(() => wait3seconds() )
.then(() => console.log("9seconds") );

