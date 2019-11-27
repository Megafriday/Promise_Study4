'use strict';

const asyncSetTimeout = (ms)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log("asyncSetTimeout関数終了");
			resolve();
		}, ms);
	});
}

// 処理終了　→　asyncSetTimeout関数終了
// asyncSetTimeout(3000);
// console.log("処理終了");

// asyncSetTimeout関数終了 → 処理終了
asyncSetTimeout(3000).then(()=>{
	console.log("処理終了");
});