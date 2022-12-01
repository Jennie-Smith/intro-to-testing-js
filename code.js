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

function isFive(input){
    if (input === 5){
        return true;
    }
    return Boolean(input);
}

function isEven(x){
    if (x === true || x === false || x === undefined){
        return false;
    } else if (x % 2 == 0){
        return true;
    } else{
        return false;
    }
}

function isVowel(input){
    if (input === "a" || input === "A" || input === "e" || input === "E" || input === "o" || input === "O" || input === "u" ||input === "U" ||input === "i" ||input === "I"){
        return true;
    }else{
        return false;
    }
}

function add(x, y){
    let z = parseFloat(x);
    let a = parseFloat(y);
    if (z === undefined || a === undefined){
        console.log(z + a);
        return z + a;
    } else {
        return z + a;
    }
}