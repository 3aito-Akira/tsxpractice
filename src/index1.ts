//ユニオン型
type Animal = {
    species:string;
    age:number;
}

type Human = {
    name:string;
    age:string;
}

type User4 = Animal | Human;

const cat:User4 = {
    species:"猫科",
    age:17
}

const akira1:User4 = {
    name:"akira",
    age:"40"
}

/*一方の型にしかないプロパティを利用するとエラーになる
function getName(user:User4):string{
    return user.name;
}
*/

function getAge(user:User4):string|number{
    return user.age;
}

//インターセクション型
type Human1 = Animal & {
    name:string;
}

const cat1:Animal = {
    species:"cat",
    age:17
}

const akira2:Human1 = {
    species:"human",
    name:"akira",
    age:100
}

console.log(akira2);

function getName(human1:Human1):string{
    return human1.name;
}

function getSpecies(animal:Animal):string{
    return animal.species;
}

const mixedSpecies = Math.random() < 0.5 ? getName:getSpecies;

//エラーhuman1 & Animalでないといけない
//mixedSpecies(cat1);　

//型は(Animal & Human1) => string | number
const value = mixedSpecies(akira2);
console.log(value);
