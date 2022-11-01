const strictEquals = require('./modules/strictEquals');

const set1 = require('./tests/set1');
// const failSet = require('./test/failSet');

function runTest(testSet) {
    testSet.forEach((item) => {
        if (!Object.is(item.result, strictEquals(item.a, item.b))) {
            throw new Error('Test failed');
        }
    });
}

runTest(set1);

// IF you want to test the failSet, uncomment the next line and the failSet require
// runTest(failSet);
