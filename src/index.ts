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

type HasAge = {
    age:number;
}
class User6 {
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}

function getPrice(customer:HasAge){
    if(customer instanceof User6){
        if(customer.name === "akira"){
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 1800;
}

const customer1:HasAge = {age:15};
const customer2:HasAge = {age:40};
const akira2 = new User6("akira",40);

console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(akira2));
class User{
    name:string;
    #age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.#age = age;
    }

    isAdult():boolean{
        return this.#age > 20;
    }

    filterOlder(users:readonly User[]):User[]{
        return users.filter(u=>u.#age > this.#age);
        //return users.filter(function(u)=>{return u.age > this.#age});
    }
}

const akira = new User("akira",40);
const keiko = new User("keiko",38);
const bill = new User("bill",75);
const flora = new User("flora",17);
const older = akira.filterOlder([keiko,bill]);
console.log(older);

console.log(akira.isAdult === keiko.isAdult);
console.log(akira.isAdult.apply(bill,[]));
console.log(akira.isAdult.apply(keiko,[]));
console.log(akira.isAdult.apply(flora,[]));














