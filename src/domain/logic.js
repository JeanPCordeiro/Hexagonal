function performLogic(input) {
    const n = parseInt(input, 10);
    if (isNaN(n) || n < 0) {
        return 'Invalid input';
    }

    function factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    }

    return factorial(n);
}

module.exports = performLogic;

