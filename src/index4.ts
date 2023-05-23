import { readFile } from "fs/promises";

const promise2 = new Promise<number>((resolve,reject)=>{setTimeout(()=>{resolve(100);reject(100)},1000)});
promise2.then((num)=>{console.log(`結果は${num}`)});
promise2.catch((num)=>{console.log(`結果は${num}`)});

const promise3 = new Promise<string>((resolve,reject)=>{setTimeout(()=>{resolve("success");reject("fail")},1000)});
promise3.then((mes)=>{console.log(`結果は${mes}`)});
promise3.catch((mes)=>{console.log(`結果は${mes}`)});
