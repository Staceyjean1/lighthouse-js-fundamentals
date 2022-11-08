function lastIndexOf(arr, num) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == num) {
      return i
    }
  }
  return -1
}
// function lastIndexOf(arr, num) {
//   var index = -1
//   for (var i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == num) {
//       index = i
//       break
//     }
//   }
//   return index
// }
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));