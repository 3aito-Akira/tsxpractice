//コールシグニチャー
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

//newシグニチャー
class User5 {
    name:string = "user5";
    age:number = 0;
}

type MyUserConstructor = new () => User5;
const MyUser:MyUserConstructor = User5;
const u = new MyUser();
console.log(u.name,u.age);

//this reference
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
        console.log("filterOlder this age" + this.#age);
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

type User2 = {
    name:string;
    age:number;
}

function createUser(name:string,age:number):User2{
    if(name === ""){
        throw new Error("名前無しのユーザーは作れません");
    }

    const user:User2 = {name,age};
    
    return user;
}

function getMessage(user:User2,message:string):string{
    return `${user.name} (${user.age}) 「${message}」`;
}

const user2Akira = createUser("akira",40);
console.log(getMessage(user2Akira,"nice to meet you"));

class User3 {
    name:string;
    age:number;

    constructor(name:string,age:number){
        if(name === ""){
            throw new Error("名前無しのユーザーは作れません");
        }
        this.name = name; this.age = age;
    }

    public getMessage1(message:string):string{
        return `${this.name} (${this.age}) 「${message}」`;
    }
    
}
//closure
const user3Akira = new User3("akira",40);
console.log(user3Akira.getMessage1("nice to meet you"));

function createUser1(name:string,age:number){
    return (message:string) => {return `${name} (${age}) 「${message}」`}
};

const getMessage2 = createUser1("akira",40);
console.log(getMessage2("nice to meet you"));







