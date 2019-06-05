Array.prototype.pluck = function (input) {
    if (input) {
        setImmediate(() => console.log(this.reduce(
            (previousValue, currentValue) => (previousValue > currentValue) ? previousValue : currentValue)))
    } else {
        setImmediate(() => console.log(this.reduce(
            (previousValue, currentValue) => (previousValue > currentValue) ? currentValue : previousValue)))
    }
}

console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].pluck(true);
[1, 2, 3, 4, 5, 6, 7, 8].pluck(false);
console.log('end');
