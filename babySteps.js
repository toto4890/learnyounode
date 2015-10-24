var input = process.argv;
var sum = 0;
var toNumber;
for (var i = 2; i < input.length; i++){
   toNumber = Number(input[i]);
   sum += toNumber;
}
console.log(sum);