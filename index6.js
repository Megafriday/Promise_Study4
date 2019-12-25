'use strict';

// https://qiita.com/7tsuno/items/6d5a27ffe9143b35defe
// Qiita ラーメン屋で理解する async/await

function promiseMen() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`メンが茹で上がりました。`);
			resolve("麺");
		}, 3000);
	});
}

function promiseSoup() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`スープが出来ました`);
			resolve("汁");
		}, 3000);
	});
}

function promiseGu() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`チャーシュー切れた`);
			resolve("豚");
		}, 3000);
	});
}

function docking(men, soup, gu) {
	return new Promise((resolve, reject) => {
		resolve(men + soup + gu);
	});
}

// async/await でのやり方
(async () => {

	const promiseM = promiseMen();
	const promiseS = promiseSoup();
	const promiseG = promiseGu();

	const men = await promiseM;
	const soup = await promiseS;
	const gu = await promiseG;
	const ramen = await docking(men, soup, gu);
	console.log(ramen);
})();

console.log("------------------------------------------------");

// Promise.all でのやり方
const promiseM = promiseMen();
const promiseS = promiseSoup();
const promiseG = promiseGu();
const promiseArray = [promiseM, promiseS, promiseG];

Promise.all(promiseArray)
	.then(results => docking(results[0], results[1], results[2]))
	.then(ramen => console.log(ramen));
