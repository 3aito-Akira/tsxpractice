"use strict";
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
