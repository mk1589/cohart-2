// function calculateArithmetic(a, b, arithmeticFinalFunction){
//     const ans = arithmeticFinalFunction(a,b)
//     return ans;
// }

// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// const value  = calculateArithmetic(1,2 ,sum)
// console.log(value);





function sum(num1, num2, fnTocall) {
    let result = num1 + num2;
    //return result;
    //displayResult(result)
    //displayResultPassive(result)
    fnTocall(result)
    
}

function displayResult(data){
    console.log("Result of the sum is : " + data)
}

function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}

 
// You are only allowed to call onnne function after this 
// How will you displayResult of a sum

const ans = sum(1,2,displayResult);



function greet(){
    console.log("hello world");
}

function greetAlient(){
    console.log("hello alient")
}

setTimeout(greetAlient, 3*3000)

setInterval(greetAlient, 3*3000)