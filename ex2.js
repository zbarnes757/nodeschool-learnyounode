var input = process.argv;
var total = 0;
for (var i in input) {
  if (i > 1) {
    total += +input[i];
  }
}

console.log(total);

// official answer
// var result = 0
// for (var i = 2; i < process.argv.length; i++)
//  result += Number(process.argv[i])
//  console.log(result)
