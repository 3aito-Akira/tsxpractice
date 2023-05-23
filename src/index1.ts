//ユニオン型
type Animal = {
    species:string;
    age:number;
}

type Human = {
    name:string;
    age:string;
}

type User4 = Animal | Human;

const cat:User4 = {
    species:"猫科",
    age:17
}

const akira1:User4 = {
    name:"akira",
    age:"40"
}

/*一方の型にしかないプロパティを利用するとエラーになる
function getName(user:User4):string{
    return user.name;
}
*/

function getAge(user:User4):string|number{
    return user.age;
}

//インターセクション型
type Human1 = Animal & {
    name:string;
}

const cat1:Animal = {
    species:"cat",
    age:17
}

const akira2:Human1 = {
    species:"human",
    name:"akira",
    age:100
}

console.log(akira2);

function getName(human1:Human1):string{
    return human1.name;
}

function getSpecies(animal:Animal):string{
    return animal.species;
}

const mixedSpecies = Math.random() < 0.5 ? getName:getSpecies;

//エラーHuman1 & Animalでないといけない
//mixedSpecies(cat1);　

//型は(Animal & Human1) => string | number
const value = mixedSpecies(akira2);
console.log(value);

function getName1(num:number):string{
    return num > 5 ? "> 5" : " <= 5";
}

function getSpecies1(animal:string):number{
    return animal.length;
}

//never型になる
/*
const magic = Math.random() < 0.5 ? getName1: getSpecies1;
const value1 = magic("akira");
const value2 = magic(15);
*/

//optional chaining
type Human2 = {
    name:string;
    age:number;
};

function useMaybeHuman(human: Human2 | undefined){
    const age = human?.age;
    console.log(age);
}

useMaybeHuman(undefined);

type getTimeFunc = () => Date;

function useTime(getTime:getTimeFunc | undefined){
    const timeOrUndefined = getTime?.().toString();
}
//リテラル型
const foo:"foo" = "foo";
//エラー"bar"型には"bar"しか入らない
//const bar:"bar" = "akira";

//template literal
function getHelloStr():`Hello,${string}!`{
    const random = Math.random();
    if(random < 0.3){
        return "Hello,world!";
    }
    else if(random < 0.6){
        return "Hello,my world!";
    }
    else if(random < 0.9){
        //Hello,${string}!の形と違うのでエラー
        //return "Hello,world";
    }
    else{
        //Hello,${string}!の形と違うのでエラー
        //return "Hell,world";
    }
    return "Hello,world1!";;
}

//型の絞り込み
type SignType = "plus" | "minus";
function signNumber(type:SignType){
    return type === "plus"? 1:-1;
}

function numberWithSign(num:number,type:SignType | "none"){
    if(type === "none"){
        return 0;
    }
    else{
        return num * signNumber(type);
    }
}

console.log(numberWithSign(5,"plus"));
console.log(numberWithSign(5,"minus"));
console.log(numberWithSign(5,"none"));

//タグ付きユニオン
type Animal1 = {
    tag:"animal";
    species:string;
}

type Human3 = {
    tag:"human";
    name:string;
}

type User6 = Animal1 | Human3;

function getUserName(user:User6){
    if(user.tag == "human"){
        return user.name;
    }
    return "名無し";
}

const user6: User6 = {
    tag:"animal",
    species:"cat"
};

console.log(getUserName(user6));

//lookup型
type Human4 = {
    type:"human";
    name:string;
    age:number;
};

function setAge(human:Human4,age:Human4["age"]){
    return{...human,age};
};

const akira3:Human4 = {
    type:"human",
    name:"akira3",
    age:26,
};

const akira4 = setAge(akira3,40);
console.log(akira4);

//keyof型
type Human5 = {
    name:string;
    age:number;
};

//"name" | "age"
type HumanKeys = keyof Human5;
let key:HumanKeys = "name";
key = "age";
//"name"と"age"しか入らない
//key = "akira";

const mmConversionTable = {
    mm:1,
    m:1e3,
    km:1e6,
};

function convertUnits(value:number,unit:keyof typeof mmConversionTable){
    const mmValue = value * mmConversionTable[unit];
    return {
        mm:mmValue,
        m:mmValue/1e3,
        km:mmValue/1e6
    }
};

console.log(convertUnits(5600,"m"));
console.log(convertUnits(6400,"mm"));

const akira5 : Human5 = {
    name:"akira",
    age:26,
};

//lookup keyof generics
function get<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key];
};

const akiraName = get(akira5,"name");
const akiraAge = get(akira5,"age");
console.log(akiraName + ":" + akiraAge);

type Option<T> = {
    tag:"some";
    value:T;
} | {
    tag:"none";
};

function showNumber(object:Option<number>):void {
    if(object.tag === "some"){
        console.log(object.value);
    }
};

//
function isSome<T>(object:Option<T>):object is {tag:"some";value:T}{
    return object.tag === "some";
};

function showNumber1(object:Option<number>) {
    if(isSome(object)){
        console.log(object.value);
    }
};

const four:Option<number> = {
    tag:"some",
    value:4,
};

showNumber(four);

function mapOption<T,U>(object:Option<T>,callback:(value:T)=>U):Option<U>{
    switch(object.tag){
        case "some":
            return {
                tag:"some",
                value:callback(object.value),
            };
        case "none":
            return {
                tag:"none",
            };
    };
    
}

function doubleOption(object:Option<number>){
    return mapOption(object, x => x * 2);
};

const four1: Option<number> = {tag:"some",value:4};
const nothing: Option<number> = {tag:"none"};

console.log(doubleOption(four1));









