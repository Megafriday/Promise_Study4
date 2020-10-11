function promiseHello() {
	return new Promise((resolve, reject) => {
		resolve("Hello ");
	});
}

promiseHello()
	.then(str => str + "world")		    // Promise.prototype.then() の戻り値は、Promise<any>, 今回はPromise<String>
	.then(data => console.log(data))	// Hello World と出力。 戻り値は、Promise<undefined>
	.then(data => console.log(data));	// undefined と出力。　戻り値は、Promise<undefined>

