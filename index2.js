'use strict';
const doSomething = ()=>Promise.resolve(100);
const failureCallback = (e)=>console.log(e);

doSomething()
	.then(v=>v+1)
	.then(v=>console.log(v))	// 101
	.catch(failureCallback);


(async ()=>{
	try {
		let result = await doSomething();
		result += 1;
		console.log(result);	// 101
	} catch (e) {
		failureCallback(e);
	}
})();
