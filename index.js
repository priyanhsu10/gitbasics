console.log("this is first git pactice package");

const add = (a, b) => a + b;
console.log(add(1, 2));
const subjtract = (a, b) => a - b;
console.log(subjtract(10, 5));
const multiply = (a, b) => a * b;
console.log(multiply(10, 30))
const devide = (a, b) => {
    if (b === 0) {
        console.log("divident cannot be zero");
        return;

    }
    return a/b;

}
console.log(devide(1,0))
