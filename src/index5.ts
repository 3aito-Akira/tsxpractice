import { readFile } from "fs/promises";

const promise = Promise.resolve(1000);
promise.then((result)=>{console.log(`result = ${result}`)});

const promise0 = readFile("akira0.txt","utf-8");
const promise1 = readFile("akira1.txt","utf-8");
const promise2 = readFile("akira2.txt","utf-8");

const promiseAll = Promise.all([promise0,promise1,promise2]);

promiseAll.then(
    (results)=>
        {
            console.log("akira0.txt: ",results[0]);
            console.log("akira1.txt: ",results[1]);
            console.log("akira2.txt: ",results[2]);
        }
);

const sleepReject = (duration:number) => 
{return new Promise<never>((result,reject)=>{setTimeout(reject,duration)});};

const promise3 = Promise.race([readFile("akira0.txt","utf-8"),sleepReject(1000)]);
promise3.then((result)=>{console.log("成功",result)},(error:unknown)=>{console.log("失敗",error)});

const promise4 = Promise.allSettled([readFile("akira0.txt","utf-8"),sleepReject(1000)]);
promise4.then((result)=>{console.log(result)});

const promise5 = readFile("foo.txt","utf8");
const promise5_1 = promise5.catch(()=>{console.log("promise5 failed")});
console.log("promise5_1 " +promise5_1);
promise5_1.then((result)=>{console.log(result)});

//promise6_1はpromise6に等しいのか？
const promise6 = readFile("akira0.txt","utf8");
console.log("promise6 " +promise6);
const promise6_1 = promise6.catch(()=>{console.log("promise6 failed")});
if(promise6 === promise6_1){
    console.log("promise6 === promise6_1");
}
else{
    console.log("promise6 !=== promise6_1");
}

console.log("promise6_1 " +promise6_1);
promise6_1.then((result)=>{console.log(result + " promise6 succeeded")});



