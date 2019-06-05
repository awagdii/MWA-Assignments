Array.prototype.removeNum = function (number) {
    return this.filter((value) => value > number);
}

console.log("Start")
//Making it async using setTimeOut
// setTimeout(() => console.log([1, 2, 3, 4, 5, 6].removeNum(1)), 100);

//Making it async using Promises
// new Promise((resolve, reject) => {
//     resolve();
// }).then(() => console.log([1, 2, 3, 4, 5, 6].removeNum(1)));

//Making it async using async await

var myLogFunction = function () {
    return new Promise((resolve, reject) => {
        resolve();
    }).then(() => console.log([1, 2, 3, 4, 5, 6].removeNum(1)));
}

async function myAsync() {
    await myLogFunction();
}

myAsync();
console.log("Finish")

console.log('hi')