var chairFeet = 1 * 1 * 1;
var tableFeet = 3 * 3 * 3;
var bedFeet = 5 * 5 * 5;

function woodCalculator(chair, table, bed) {
  chairFeet = chairFeet * chair;
  tableFeet = tableFeet * table;
  bedFeet = bedFeet * bed;
  return (
    chairFeet +
    " feet wood for chair " +
    "," +
    tableFeet +
    " feet wood for table" +
    "," +
    bedFeet +
    " feet wood for bed"
  );
}
var result = woodCalculator(7, 10, 20);
console.log(result);
