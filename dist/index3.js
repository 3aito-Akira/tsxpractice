import { readFile } from "fs/promises";
setTimeout(() => { console.log("タイマーを呼び出しました"); }, 100);
const startTime = performance.now();
let count = 0;
while (performance.now() - startTime <= 200) {
    count++;
}
console.log("count = " + count);
const promise = readFile("uhyo.txt", "utf8");
promise.then((data) => { console.log(data); });
promise.then((data) => { console.log("2回目のdata呼び出し" + data); });
//なぜここをコメントアウトしないと上の結果が表示されないのか？
/*
const promise1 = readFile("uhyo1.txt","utf8");
promise1.then((data1)=>{console.log(data1)});
promise1.catch((data1)=>{console.log("error発生")});
promise1.finally(()=>{console.log("とりあえずuhyo1.txtファイル読み込みに挑戦した")});
*/
console.log("読み込み開始");
console.log("同期作業終了");
