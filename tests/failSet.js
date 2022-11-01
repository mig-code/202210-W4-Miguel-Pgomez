const failSet = [
    {
        a: 1,
        b: 1,
        result: true,
    },
    {
        a: NaN,
        b: NaN,
        result: true,
    },
    {
        a: 0,
        b: -0,
        result: false,
    },
];

module.exports = failSet;
