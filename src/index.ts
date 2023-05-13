import { stdin, stdout } from "process";
import { createInterface } from "readline";

/*
const rl = createInterface({input:stdin,output:stdout});
const mes ={
    good:"good",
    bad:"bad"
};

rl.question("数値入力",
    (line) => {
        const num = Number(line); 
        console.log(mes[num >=0 ? "good":"bad"]); 
        rl.close();
    }
);
*/

type User ={
    name : string;
    age : number;
    premiumUser: boolean;
};

const data:string = `
akira saito,40,0
John Smith,17,0
Mary Sue,14,1
`;

const users:User[] = [];
const lines = data.split("\n");
let i:number = 0;

console.log(lines);

for(const line of lines){
    if(line === ""){
        continue;
    }
    const[name,ageString,premiumUserString] = line.split(",");

    const age = Number(ageString);
    const premiumUser = (premiumUserString === "1");

    users.push({name,age,premiumUser});
    console.log("i = " + i);
    i++;
}

for(const user of users){
    if(user.premiumUser){
        console.log(`${user.name} (${user.age})はプレミアムユーザーです`);
    }
    else{
        console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
    }
};

function range(min:number,max:number):number[]{
    const result: number[] = [];

    for(let i = min; i < max; i++){
        result.push(i);
    }

    return result;
};

console.log(range(5,10));

type Human ={height:number;weight:number};
const calBMI =({height,weight}:Human):number =>{return weight / height ** 2};
const akira:Human={height:1.84,weight:72};
console.log(calBMI(akira));

const sum = (...args:number[]):number => {
    let result = 0;
    for(const num of args){
        result += num;
    }

    return result;
};

type HasLength = {length:number};
const obj:HasLength = "akira";
console.log("akiraは" + obj.length);

const object = {
    num:100,
    arr:[1,2,3,4]
};
const {arr:[foo,foo1]} = object;
console.log("foo" + foo);
console.log("foo1" + foo1);

const nums = [1,2,3,4,5];
console.log(sum(...nums));

type User1 = {
    name:string;
    age:number
};

const getName = (u:User1):string=>u.name;
const users1:User1[] =[{name:"akira",age:26},{name:"keiko",age:15}];
const names = users1.map(getName);
console.log(names);

console.log(users1.filter((u:User1)=>u.age >= 20));

const xRepeat = (num:number):string => "x".repeat(num);

const nums1 = [1,2,3,4,5,6,7,8,9];
const array2 = nums1.filter((x) => x % 3 == 0);
console.log(array2);

type func1 = {
    isUsed?:boolean;
    (arg:number):void;
};

const double:func1=(arg:number)=>{console.log(arg*2)};
double(100);

type HasName ={
    name:string;
};

type HasNameAndAge ={
    name:string;
    age:number;
};

const fromAge = (age:number):HasNameAndAge =>({name:"John Smith",age,});
const f:(age:number)=>HasName = fromAge;
const object2:HasName = f(100);
console.log(object2);

