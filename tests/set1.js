const set1 = [
    {
        a: 1,
        b: 1,
        result: true,
    },
    {
        a: NaN,
        b: NaN,
        result: false,
    },
    {
        a: 0,
        b: -0,
        result: true,
    },
    {
        a: 0,
        b: -0,
        result: true,
    },
    {
        a: 1,
        b: '1',
        result: false,
    },
    {
        a: true,
        b: false,
        result: false,
    },
    {
        a: false,
        b: false,
        result: true,
    },
    {
        a: 'Water',
        b: 'oil',
        result: false,
    },
];

module.exports = set1;
