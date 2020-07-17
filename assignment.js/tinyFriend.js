function tinyFriend(names) {
  var smallest = names[0].length;
  for (var i = 0; i < names.length; i++) {
    var currentName = names[i].length;
    if (currentName < smallest) {
      smallest = currentName;
    }
  }
  return smallest;
}
var namesList = ["rafik", "jobbarr", "salammmm", "borkottt", "mas"];

console.log(tinyFriend(namesList));
