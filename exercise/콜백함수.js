function 가장작은값의두배(a, b) {
  let result = b(...a) * 2;
  return result;
}

가장작은값의두배([10, 20, 11, 21, 19, 17], Math.min);

let arr = [10, 20, 11, 21, 19, 17];

arr.map((v) => v * 2);

function 두배(v) {
  return v * 2;
}
arr.map(두배);