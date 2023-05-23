import { readFile } from "fs/promises";
const sleepReject = (duration) => { return new Promise((result, reject) => { setTimeout(reject, duration); }); };
const promise = readFile("akira0.txt", "utf8")
    .then(() => sleepReject(500))
    .then((result) => { console.log(result); }, () => { console.log("-------failed"); });
const promise1 = readFile("akira0.txt", "utf8")
    .then(() => sleepReject(500))
    .then((result) => { console.log(result); })
    .catch((error) => { console.log("-------failed vol2"); });
import("fs/promises")
    .then(({ readFile }) => readFile("akira3.txt", "utf8"))
    .then((result) => { console.log(result); })
    .catch((error) => { console.log("error occurred", error); });
