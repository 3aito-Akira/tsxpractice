import { readFile } from "fs/promises";
console.log("before promise");
readFile("foo.txt", "utf-8").catch(() => "").then((result) => { console.log(result); });
console.log("after promise");
const repeat10times = (str) => { return new Promise((resolve) => { setTimeout(() => resolve(str.repeat(10)), 500); }); };
repeat10times("apple").then((result) => { console.log(result + " 10times"); });
//1つ目のthenで作られたpromiseはrepeat10timesで作られるpromiseで置き換えられる
readFile("akira0.txt", "utf8")
    .then((result1) => repeat10times(result1))
    .then((result2) => { console.log(result2 + " then2"); });
/*
//非同期で実行した処理は実行されずに終わる
try {
    readFile("akira0.txt","utf8")
    .then((result)=>{throw new Error("Error!!!")})
    .then((result1)=>{console.log(result1)});
} catch (error) {
    console.log(error + "error occurred");
}
*/
readFile("akira3.txt", "utf8")
    .then((result1) => repeat10times(result1))
    .then((result2) => { console.log(result2 + " then2"); })
    .catch(() => { console.log("----akira3---"); })
    .then(() => { console.log("----akira3-- recovered"); });
console.log("ended");
/*
readFile("akira0.txt","utf8")
    .then((result)=>{throw new Error("Error!!!")})
    .then((result1)=>{console.log(result1)});
*/
