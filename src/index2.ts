import {name,age} from "./akira.js";
import { getAkiraName } from "./akira.js";
import { increment } from "./akira.js";
import { increment1 } from "./akira1.js";
import { value } from "./akira.js";
import "./foo.js";
import "./bar.js";
import akiraAge from "./akiraAge.js";
import { Animal1_1, lilly } from "./animal1.js";

console.log(name,age);
console.log("getAkiraName() = " + getAkiraName());

increment();
console.log("index2 value  = " + value );

console.log("index2 value1 = " + increment1());

console.log(`akiraAge is ${akiraAge}`);

const bill: Animal1_1 = {
    species:"dog",
    age:2,
};

console.log(bill,lilly);