'use strict';

const doA = function(resolve, reject) {
    //Aくんの作業(1秒で終わる)
    console.log(new Date().toLocaleString() + " Aくん板の買い物開始");
    setTimeout(function() {
        console.log(new Date().toLocaleString() + " Aくん板の買い物完了");
        resolve();
    }, 1000);
};
const doB = function(resolve, reject) {
    //Bくんの作業(5秒で終わる)
    console.log(new Date().toLocaleString() + " Bくん釘の買い物開始");
    setTimeout(function() {
        console.log(new Date().toLocaleString() + " Bくん釘の買い物完了");
        resolve();
    }, 5000);
};
const doC = function(resolve, reject) {
    //Cくんの作業(3秒で終わる)
    console.log(new Date().toLocaleString() + " Cくん板の切断開始");
    setTimeout(function() {
        console.log(new Date().toLocaleString() + " Cくん板の切断完了");
        resolve();
    }, 3000);
};
const doD = function(resolve, reject) {
    //Dくんの作業(3秒で終わる)
    console.log(new Date().toLocaleString() + " Dくん組み立て開始");
    setTimeout(function() {
        console.log(new Date().toLocaleString() + " Dくん組み立て完了");
        resolve();
    }, 3000);
};

// Aくん、Bくんはすぐ買い物に行く
const promiseA = new Promise(doA);
const promiseB = new Promise(doB);
// Aくんの買い物後、Cくんが作業する
promiseA.then(function(){
    const promiseC = new Promise(doC);
    // BくんとCくんの作業が終わり次第Dくんが作業する
    Promise.all([promiseB, promiseC]).then(function() {
        const promiseD = new Promise(doD);
    });
});

