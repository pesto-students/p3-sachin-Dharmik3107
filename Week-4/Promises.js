function getNumber() {
  return Math.floor(Math.random() * 10);
}
let storedNumber = getNumber();
let dividedNumber = storedNumber % 5;
// console.log(getNumber())
console.log(storedNumber);
// console.log(dividedNumber)
let checkNumber = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (dividedNumber != 0) {
      resolve(storedNumber);
    } else {
      reject(Error);
    }
  }, 1000);
});
checkNumber.then(
  function (storedNumber) {
    console.log("It is Resolved");
  },
  function (Error) {
    console.log("It is Rejected");
  }
);
