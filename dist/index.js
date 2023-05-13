const data = `
akira saito,40,0
John Smith,17,0
Mary Sue,14,1
`;
const users = [];
const lines = data.split("\n");
let i = 0;
console.log(lines);
for (const line of lines) {
    if (line === "") {
        continue;
    }
    const [name, ageString, premiumUserString] = line.split(",");
    const age = Number(ageString);
    const premiumUser = (premiumUserString === "1");
    users.push({ name, age, premiumUser });
    console.log("i = " + i);
    i++;
}
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザーです`);
    }
    else {
        console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
    }
}
;
function range(min, max) {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }
    return result;
}
;
console.log(range(5, 10));
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
export {};
