function feetToMile(feet) {
  var mile = feet / 5280;

  return mile;
}

var result = feetToMile(100);
console.log(result + " mile");
