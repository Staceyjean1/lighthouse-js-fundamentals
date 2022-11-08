function concat(arr1, arr2) {
  var x = arr1
  var cur = arr1.length
  for(var i = 0; i <arr2.length; i++) {
    x[cur] = arr2[i]
    cur++
  }
  return x
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));