"use strict";
const cat = {
    species: "猫科",
    age: 17
};
const akira1 = {
    name: "akira",
    age: "40"
};
/*一方の型にしかないプロパティを利用するとエラーになる
function getName(user:User4):string{
    return user.name;
}
*/
function getAge(user) {
    return user.age;
}
const cat1 = {
    species: "cat",
    age: 17
};
const akira2 = {
    species: "human",
    name: "akira",
    age: 100
};
console.log(akira2);
function getName(human1) {
    return human1.name;
}
function getSpecies(animal) {
    return animal.species;
}
const mixedSpecies = Math.random() < 0.5 ? getName : getSpecies;
//エラーhuman1 & Animalでないといけない
//mixedSpecies(cat1);　
//型は(Animal & Human1) => string | number
const value = mixedSpecies(akira2);
console.log(value);
function getName1(num) {
    return num > 5 ? "> 5" : " <= 5";
}
function getSpecies1(animal) {
    return animal.length;
}
function useMaybeHuman(human) {
    const age = human?.age;
    console.log(age);
}
useMaybeHuman(undefined);
function useTime(getTime) {
    const timeOrUndefined = getTime?.().toString();
}
//リテラル型
const foo = "foo";
//エラー"bar"型には"bar"しか入らない
//const bar:"bar" = "akira";
//template literal
function getHelloStr() {
    const random = Math.random();
    if (random < 0.3) {
        return "Hello,world!";
    }
    else if (random < 0.6) {
        return "Hello,my world!";
    }
    else if (random < 0.9) {
        //Hello,${string}!の形と違うのでエラー
        //return "Hello,world";
    }
    else {
        //Hello,${string}!の形と違うのでエラー
        //return "Hell,world";
    }
    return "Hello,world1!";
    ;
}
function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
function numberWithSign(num, type) {
    if (type === "none") {
        return 0;
    }
    else {
        return num * signNumber(type);
    }
}
console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));
function getUserName(user) {
    if (user.tag == "human") {
        return user.name;
    }
    return "名無し";
}
const user6 = {
    tag: "animal",
    species: "cat"
};
console.log(getUserName(user6));
function setAge(human, age) {
    return { ...human, age };
}
;
const akira3 = {
    type: "human",
    name: "akira3",
    age: 26,
};
const akira4 = setAge(akira3, 40);
console.log(akira4);
let key = "name";
key = "age";
//"name"と"age"しか入らない
//key = "akira";
const mmConversionTable = {
    mm: 1,
    m: 1e3,
    km: 1e6,
};
function convertUnits(value, unit) {
    const mmValue = value * mmConversionTable[unit];
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6
    };
}
;
console.log(convertUnits(5600, "m"));
console.log(convertUnits(6400, "mm"));
const akira5 = {
    name: "akira",
    age: 26,
};
//lookup keyof generics
function get(obj, key) {
    return obj[key];
}
;
const akiraName = get(akira5, "name");
const akiraAge = get(akira5, "age");
console.log(akiraName + ":" + akiraAge);
function showNumber(object) {
    if (object.tag === "some") {
        console.log(object.value);
    }
}
;
function isSome(object) {
    return object.tag === "some";
}
;
function showNumber1(object) {
    if (isSome(object)) {
        console.log(object.value);
    }
}
;
const four = {
    tag: "some",
    value: 4,
};
showNumber(four);
function mapOption(object, callback) {
    switch (object.tag) {
        case "some":
            return {
                tag: "some",
                value: callback(object.value),
            };
        case "none":
            return {
                tag: "none",
            };
    }
    ;
}
function doubleOption(object) {
    return mapOption(object, x => x * 2);
}
;
const four1 = { tag: "some", value: 4 };
const nothing = { tag: "none" };
console.log(doubleOption(four1));
