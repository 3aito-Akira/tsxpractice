import { name, age } from "./akira.js";
import { getAkiraName } from "./akira.js";
import { increment } from "./akira.js";
import { increment1 } from "./akira1.js";
import { value } from "./akira.js";
import "./foo.js";
import "./bar.js";
import akiraAge from "./akiraAge.js";
import { lilly } from "./animal1.js";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
console.log(name, age);
console.log("getAkiraName() = " + getAkiraName());
increment();
console.log("index2 value  = " + value);
console.log("index2 value1 = " + increment1());
console.log(`akiraAge is ${akiraAge}`);
const bill = {
    species: "dog",
    age: 2,
};
console.log(bill, lilly);
const c = "B";
//fs module
try {
    const data = readFileSync("uhyo.txt", 'utf-8');
    console.log(data);
    let count = 0;
    let currentIndex = 0;
    while (true) {
        const nextIndex = data.indexOf("uhyo", currentIndex);
        console.log("nextIndex = " + nextIndex);
        if (nextIndex >= 0) {
            count++;
            currentIndex = nextIndex + 1;
        }
        else {
            break;
        }
    }
    console.log("count = " + count);
}
catch (e) {
    //エラー処理
    console.log(e);
}
const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");
const data1 = readFileSync(dataFile, { encoding: "utf8" });
console.log(" filePath " + filePath + " fileDir " + fileDir
    + " dataFile " + dataFile + " data1 = " + data1);
