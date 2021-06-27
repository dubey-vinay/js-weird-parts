function buildParent() {
    var childArr = [];
    for(var i = 0; 1 < 3; i++) {
        childArr.push(
            function() {
                console.log(i);
            }
        );
    }

    return childArr;
}

const childFunc = buildParent();
childFunc[0]();
childFunc[1]();
childFunc[2]();

// Output:
// 3
// 3
// 3

// Explaination: Since the buildParent() function is out of the execution stack once it is invoked, its inner variable and functions
// still stays in the memory due to the closure of the lexical scope.
// The last value of i in the memory will be 3 though once the executino of buildParent() completes. 
// So when when we called childFunc() it finds that the i is 3 in the memory and prints it as for each execution.
// Its like asking the children about the age of their father and they will give the same answer as their father's age is not as per 
// the time they were born but whatever they can see currently.

// ---------------------------------------------
// Now how do you print 0, 1, 2 in this function

function buildParent2() {
    var childArr = [];
    for(var i = 0; 1 < 3; i++) {
        childArr.push(
            (function(j){
                return function() {
                    console.log(j);
                }
            }(i))
        );
    }

    return childArr;
}

const childFunc2 = buildParent2();
childFunc2[0]();
childFunc2[1]();
childFunc2[2]();

// Immediate invoking function will be executed right away and will create 3 different execution context for the returned function
// this way every return function in the array is having its own lexical scope in memory even when the execution stack is clear.

// -------------------------------------------
// One can also use the let keyword inside the function which will create a new lexical scope in memory for child function.

function buildParent3() {
    var childArr = [];
    for(var i = 0; 1 < 3; i++) {
        let j = i;
        childArr.push(
            function() {
                console.log(j);
            }
        );
    }

    return childArr;
}

const childFunc3 = buildParent3();
childFunc3[0]();
childFunc3[1]();
childFunc3[2]();
