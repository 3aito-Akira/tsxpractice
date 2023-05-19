const name = "akira";
const age = 38;
let value = 0;
export const increment = () => {
    value++;
    return value;
};
export const getAkiraName = () => {
    return "akira";
};
export { name, age, value };
