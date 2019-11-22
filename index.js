'use strict';
const promise = new Promise((resolve, reject)=>{
	resolve("解決した");
});

promise.then((value)=>{
	console.log(value);
});

console.log("--------------------------------------------------------");

const reject_promise = new Promise((resolve, reject)=>{
	reject("エラー発生");
});

reject_promise.then((value)=>{
	console.log(value);
}).catch((e)=>{
	console.log("エラー内容：" + e);
});