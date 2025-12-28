const ar = [1, 2, 3];
const copyar = [...ar];
copyar[0] = 99;
console.log(ar);
console.log(copyar);