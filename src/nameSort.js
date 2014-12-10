function People (names) {
    this.names = names;
}

People.prototype.getNames = function() {
  newArr = [];
  this.names.forEach(function(name) {
    newArr.push(name.charAt(0).toUpperCase() + name.substring(1, name.length));
  });
  return newArr;
};

People.prototype.sort = function() {
  return this.names.sort();
};