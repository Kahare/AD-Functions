// Write a recursive function in JavaScript that calculates the factorial of a given non-negative integer n.
function factorial(n) {

    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(9));

