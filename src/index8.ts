async function get3():Promise<number> {
    console.log("get3 is called");
    return 3;
}

console.log("before get3 is called");
const promise = get3();
promise.then(num => console.log(`num is ${num}`));
promise.catch(() => console.log("error occurred"));
console.log("after get3 is called");

const sleep = (duration:number) => 
{return new Promise<void>((resolve)=>{setTimeout(resolve,duration)})};

async function get4() {
    //返り値を使っていない
    await sleep(1000);
    return 4;
}

get4()
.then((num) => {console.log(`num is ${num}`)})
.catch(() => {console.log("error occurred")});

async function addAll() {
    //返り値を使っている
    const num1 = await get3();
    const num2 = await get3();
    const num3 = await get3();
    return num1 + num2 + num3;
}

addAll()
.then(result => console.log(`addAll result is ${result}`))
.catch(()=>{console.log("addAll() failed")});

async function conveyContent() {
    //try and catchするとcatchの部分でも成功することで成功のpromiseが返り値となる
    try {
        const {readFile,writeFile} = await import("fs/promises");
        //const akira0Content = await readFile("akira0.txt","utf8");
        //try and catchしないとasyncで失敗のpromiseが返り値となる
        const akira0Content = await readFile("akira4.txt","utf8");
        await writeFile("akira1.txt",akira0Content + akira0Content);
        console.log("akira1 was overwritten");
    } catch (error) {
        console.log("akira1 was not overwritten");
    }
}

conveyContent()
.then(()=>{console.log("conveyContent succeeded")})
.catch(()=>{console.log("conveyContent failed")});


