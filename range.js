function range(start, end, step) {
  var array = [];
  for (var i = start; i <= end; i += step) {
    if (range === undefined || step === undefined || end === undefined || start > end || step <= 0) {
      return [];
    }
    array.push(i);
  }
  return array;
}
