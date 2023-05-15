"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _User4_age, _User_age;
const getName = (u) => u.name;
const users1 = [{ name: "akira", age: 26 }, { name: "keiko", age: 15 }];
const names = users1.map(getName);
console.log(names);
console.log(users1.filter((u) => u.age >= 20));
const xRepeat = (num) => "x".repeat(num);
const double = (arg) => { console.log(arg * 2); };
double(100);
const fromAge = (age) => ({ name: "John Smith", age, });
const f = fromAge;
const object2 = f(100);
console.log(object2);
function repeat(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
function map(array, callback) {
    const result = [];
    for (const elm of array) {
        result.push(callback(elm));
    }
    return result;
}
const data = [1, 1, 2, 3, 5, 8, 13];
const result = map((data), (x) => String(x * 10));
console.log(result);
class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age > 20;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
const akira3 = new User3("akira", 40);
console.log(akira3.age);
class User4 {
    constructor() {
        _User4_age.set(this, 0);
    }
    getAge() {
        return __classPrivateFieldGet(this, _User4_age, "f");
    }
    setAge(age) {
        if (age < 0 || age > 150) {
            return;
        }
        __classPrivateFieldSet(this, _User4_age, age, "f");
    }
}
_User4_age = new WeakMap();
const double1 = (arg) => { console.log(arg * 2); };
const triple = (arg) => { console.log(arg * 3); };
double1.isUsed = true;
triple.isUsed = true;
console.log("double1");
double1(100);
console.log("triple");
triple(100);
class User5 {
    constructor() {
        this.name = "user5";
        this.age = 0;
    }
}
const MyUser = User5;
const u = new MyUser();
console.log(u.name, u.age);
class User6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function getPrice(customer) {
    if (customer instanceof User6) {
        if (customer.name === "akira") {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 1800;
}
const customer1 = { age: 15 };
const customer2 = { age: 40 };
const akira2 = new User6("akira", 40);
console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(akira2));
class User {
    constructor(name, age) {
        _User_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User_age, age, "f");
    }
    isAdult() {
        return __classPrivateFieldGet(this, _User_age, "f") > 20;
    }
    filterOlder(users) {
        console.log("filterOlder this age" + __classPrivateFieldGet(this, _User_age, "f"));
        return users.filter(u => __classPrivateFieldGet(u, _User_age, "f") > __classPrivateFieldGet(this, _User_age, "f"));
        //return users.filter(function(u)=>{return u.age > this.#age});
    }
}
_User_age = new WeakMap();
const akira = new User("akira", 40);
const keiko = new User("keiko", 38);
const bill = new User("bill", 75);
const flora = new User("flora", 17);
const older = akira.filterOlder([keiko, bill]);
console.log(older);
console.log(akira.isAdult === keiko.isAdult);
console.log(akira.isAdult.apply(bill, []));
console.log(akira.isAdult.apply(keiko, []));
console.log(akira.isAdult.apply(flora, []));
console.log("エラー発生前");
function throwError() {
    const error = new Error("エラーを発生させた");
    throw error;
}
throwError();
console.log("エラー発生後");
