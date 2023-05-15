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
const value = mixedSpecies(akira2);
console.log(value);
