const assert = require("assert");

function minimumChange(arr) {
    let minimum = null;
    let coins = Array.from(arr);
    coins.sort((a,b) => a-b);
    let sum = 0;
    for (let i=0; i < coins.length; i++) {
        sum += coins[i];
        if (sum < coins[i+1]) {
            break;
        }
    }

    minimum = sum + 1;
    return minimum;
}

assert.equal(minimumChange([5, 7, 1, 1, 2, 3, 22]), 20)
assert.equal(minimumChange([1, 1, 1, 1, 1]), 6)
