const assert = require("assert");

function sortedSquares(arr) {
    let doubled = arr.map(item => item ** 2);
    doubled.sort((a,b) => a - b);
    return doubled;
}

assert.equal(JSON.stringify(sortedSquares([1,2,3,4])), JSON.stringify([1,4,9,16]))
assert.equal(JSON.stringify(sortedSquares([5,2,3,1])), JSON.stringify([1,4,9,25]))

