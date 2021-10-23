class Calculator {
    addmultiple(...a){
        let sum=0;
        for (let index = 0; index < a.length; index++) {
            sum += a[index];
            
        }
        return sum;
    }
    add(a, b) {
        return a + b;
    }
    subjtract(a, b) {
        return a - b;

    }
    multiply(a,b){
        return a*b;
    }
    devide(a, b) {
        if (b === 0) {
            console.log("divident cannot be zero");
            return;
        }
        return a / b;
    }

}
class calculatorTest{
   

    constructor(){
        
    }

    testAdd(){
        const c=new Calculator();
        console.log( c.add(10,20));
    }

    testSubtract(){
        const c=new Calculator();
        console.log( c.subjtract(10,20));
    }

    testDevide(){
        const c=new Calculator();
        console.log( c.devide(10,20));
    }

    testMultiply(){
        const c=new Calculator();
        console.log( c.multiply(10,20));
    }
}

const tester= new calculatorTest();
tester.testAdd();
tester.testMultiply();
tester.testSubtract();
tester.testDevide();
test
console.log("this is goining to change and letst check mster has reflected the changes"); 
 console.log("git check peek commmand");

