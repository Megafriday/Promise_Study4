// await は、Promiseにつけて同期させる。
async function promiseFunc() {
	await new Promise(resolve => {   // await 付けた時、外した時で確かめる
		setTimeout(() => {
			console.log("３秒経過");
			resolve();
		}, 3000); // 3秒待つ
	});
	console.log("promiseFunc()内のコメント");
}
promiseFunc();
