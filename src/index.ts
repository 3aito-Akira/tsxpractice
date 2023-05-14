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

type User2<N> = {
    name:N;
}

function repeat<T>(element: T,length:number):T[]{
    const result: T[] = [];
    for(let i = 0; i < length;i++){
        result.push(element);
    }
    return result;
}

function map<T,U>(array:T[],callback:(value:T)=>U):U[]{
    const result: U[] = [];
    for(const elm of array){
        result.push(callback(elm));
    }
    return result;
}

const data = [1,1,2,3,5,8,13];
const result = map<number,string>((data),(x)=>String(x * 10));
console.log(result);

class User{
    name:string = "";
    age:number = 0;

    isAdult():boolean{
        return this.age > 20;
    }

    setAge(newAge:number){
        this.age = newAge;
    }
}

class User3{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    isAdult():boolean{
        return this.age > 20;
    }

    setAge(newAge:number){
        this.age = newAge;
    }
}

const akira1 = new User();
console.log(akira1.name);
console.log(akira1.isAdult());
console.log(akira1.age);
akira1.setAge(40);
console.log(akira1.isAdult());
console.log(akira1.age);

const akira3 = new User3("akira",40);
console.log(akira3.age);

class User4{
    #age:number = 0;
    getAge(){
        return this.#age;
    }
    setAge(age:number){
        if(age < 0 || age > 150){
            return;
        }
        this.#age = age;
    }
}

type Myfunction = {
    isUsed:boolean;
    (arg:number):void;
}

const double1: Myfunction = (arg:number) => {console.log(arg * 2)};
const triple:Myfunction = (arg:number) =>{console.log(arg * 3)};
double1.isUsed = true;
triple.isUsed = true;
console.log("double1")
double1(100);
console.log("triple");
triple(100);


class User5 {
    name:string = "user5";
    age:number = 0;
}

type MyUserConstructor = new () => User5;
const MyUser:MyUserConstructor = User5;
const u = new MyUser();
console.log(u.name,u.age);



