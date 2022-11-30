// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(x){
    if (x === undefined){
        return "Hello, World!";
    } else if(x === true){
        return "Hello, World!";
    }else if(x === false){
        return "Hello, World!";
    }
    return "Hello, " + x + "!";
}