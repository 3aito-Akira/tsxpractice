"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_age;
const double1 = (arg) => { console.log(arg * 2); };
const triple = (arg) => { console.log(arg * 3); };
double1.isUsed = true;
triple.isUsed = true;
console.log("double1");
double1(100);
console.log("triple");
triple(100);
//newシグニチャー
class User5 {
    constructor() {
        this.name = "user5";
        this.age = 0;
    }
}
const MyUser = User5;
const u = new MyUser();
console.log(u.name, u.age);
//this reference
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
function createUser(name, age) {
    if (name === "") {
        throw new Error("名前無しのユーザーは作れません");
    }
    const user = { name, age };
    return user;
}
function getMessage(user, message) {
    return `${user.name} (${user.age}) 「${message}」`;
}
const user2Akira = createUser("akira", 40);
console.log(getMessage(user2Akira, "nice to meet you"));
class User3 {
    constructor(name, age) {
        if (name === "") {
            throw new Error("名前無しのユーザーは作れません");
        }
        this.name = name;
        this.age = age;
    }
    getMessage1(message) {
        return `${this.name} (${this.age}) 「${message}」`;
    }
}
//closure
const user3Akira = new User3("akira", 40);
console.log(user3Akira.getMessage1("nice to meet you"));
function createUser1(name, age) {
    return (message) => { return `${name} (${age}) 「${message}」`; };
}
;
const getMessage2 = createUser1("akira", 40);
console.log(getMessage2("nice to meet you"));
