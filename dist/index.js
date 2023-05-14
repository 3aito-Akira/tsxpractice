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
var _User4_age;
const calBMI = ({ height, weight }) => { return weight / height ** 2; };
const akira = { height: 1.84, weight: 72 };
console.log(calBMI(akira));
const sum = (...args) => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};
const obj = "akira";
console.log("akiraは" + obj.length);
const object = {
    num: 100,
    arr: [1, 2, 3, 4]
};
const { arr: [foo, foo1] } = object;
console.log("foo" + foo);
console.log("foo1" + foo1);
const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums));
const getName = (u) => u.name;
const users1 = [{ name: "akira", age: 26 }, { name: "keiko", age: 15 }];
const names = users1.map(getName);
console.log(names);
console.log(users1.filter((u) => u.age >= 20));
const xRepeat = (num) => "x".repeat(num);
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = nums1.filter((x) => x % 3 == 0);
console.log(array2);
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
class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
    isAdult() {
        return this.age > 20;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
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
const akira1 = new User();
console.log(akira1.name);
console.log(akira1.isAdult());
console.log(akira1.age);
akira1.setAge(40);
console.log(akira1.isAdult());
console.log(akira1.age);
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
