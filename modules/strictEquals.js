const strictEquals = (a, b) => {
    const result = Object.is(a, b);

    if (Number.isNaN(a) && Number.isNaN(b)) {
        return !result;
    }

    // CHECK BOTH FALSYS
    if (!a && !b) {
        // DISCARD BOTH ARE TYPE BOOLEAN VALUE FALSE
        if (!(String(a).length > 1 && String(b).length > 1)) {
            return !result;
        }
    }

    return result;
};

module.exports = strictEquals;
