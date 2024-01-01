// just syntactical sugar .to  uses callbacks/promises under  the hood


//  Normal syntax
function manishAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there!");
    });
    return p;
    
}

function main(){
    manishAsyncFunction().then(function(value){
        console.log(value);
    });
}


main();


//how to catch await

function manishAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there!");
        },3000);
        
    });
    return p;
    
}

async  function main(){
    // manishAsyncFunction().then(function(value){
    //     console.log(value);
    // });



    let value = await manishAsyncFunction();
    manishAsyncFunction().then(function(value){
            console.log(value);
        });
    
    console.log("hi there1");
    console.log(value);

    
}


main();


//Async/awaitsyntax

function manishAsyncFunction(){
    let p = new Promise(function(reslove){
        // do some async logic herer
        reslove("hi there!")
    });
    return p;
}

async function main(){
    const value = await manishAsyncFunction();
    console.log(value);
}
main();