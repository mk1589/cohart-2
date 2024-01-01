// //Ugly code

// const fs = require('fs')

// // my own asynchronous function
// function manisReadFile(cd){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cd(data);

//     });
// }

// // callback function to call

// function onDone(data){
//     console.log(data)
// }

// manishReadFile(onDone)



// //Pretty code

// function manisReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt","utf-8",function(err,data){
//             resolve(data);
    
//         });
//     })
    
// }

// // callback function to call

// function onDone(data){
//     console.log(data);
// }

// manishReadFile().then(onDone);


function manishReadFile(){
    console.log("inside manishfile")
    var p = new Promise(function(resolve){
        console.log("inside Promise")
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("befor resolve")
            resolve(data);
    
        });
    })
    return p;
    
}



function onDone(data){
    console.log(data);
}

var a = manishReadFile();
console.log(a);  //this line will be part of promise and we log befor the promiseresolve (a.then(onDone);)
                 //that's why we get peomise<painding>
a.then(onDone);




// //promise class
// // => pending, resolved, rejected
// var d = new Promise(function(onDone){
//     //onDone();
//     //onDone("foo");
//     setTimeout(function(){
//         onDone("foo");
//     }, 1000)

// })

// //console.log(d)
// function callback(){
//     console.log(d);
// }


// console.log(d);
// d.then(callback)



let p = new Promise(function(resolve){
    resolve("hi theere");
})
p.then(function(){       //.then gets called whenever the async function reolves
    console.log(p)
})



//Dummy async function that almost immediately resolves

function manishAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}


// Actually logging the data with what the function above Resolved with
const value = manishAsyncFunction();
value.then(function(data){
    console.log(data);
})



function manishAsyncFunction(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
    return p;
}

///// promise chaining

promisifedTimeout(1000).then(function(){
    console.log("first is done");
    promisifedTimeout(2000).then(function(){
        console.log("second one  done")
    });
})