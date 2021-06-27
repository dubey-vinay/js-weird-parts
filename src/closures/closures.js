function getMsgFunc(msg) {
    return function(name) {
        console.log(`${msg} ${name}`);
    }
}

const sayHello = getMsgFunc('Hello');
sayHello('Vinay');

// Output: Hello Vinay

// Definition: A closure is a bundle of function and its lexical scope varibles and functions.

// Even after getMsgFunc() is being poped out of execution context, sayHello function is able to access it lexical scoped parent variable.

// Explaination: Even after Js engine pops out the function out of execution context, it is still going to keep the lexical varibale and 
// all it references(varibales and functions) in its memory. So at any point this is required those function and variables can be
// accessed by the closure function