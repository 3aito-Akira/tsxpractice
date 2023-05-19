const name:string = "akira";
const age:number = 38;

let value:number = 0;

export const increment = () =>{
    value++;
    return value;
};

export const getAkiraName = () => {
    return "akira";
};

export {name,age,value};