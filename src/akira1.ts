const name:string = "akira1";
const age:number = 20;

let value1:number = 0;

export const increment1 = () =>{
    value1++;
    return value1;
};

export const getAkiraName1 = () => {
    return "akira1";
};

export {name,age};