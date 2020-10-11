// await は、Promiseにつけて同期させる。
async function promiseFunc() {
	await new Promise(resolve => setTimeout(() => {
		console.log("３秒経過");
		resolve();
	}, 3000)); // 3秒待つ
	console.log("func()内のコメント");
}

promiseFunc();
