let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 10;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
