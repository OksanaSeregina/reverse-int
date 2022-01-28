module.exports = function reverse (n) {
  let string = Math.abs(n).toString();
  let res = '';

  for (let i = 0; i < string.length; i++) {
    res = `${string[i]}${res}`;
  }

  return +res;
}
