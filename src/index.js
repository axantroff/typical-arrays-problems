
exports.min = function min (array) {
  if (array === undefined) return 0
  if(array.length > 0) {
  //   return Math.max(...array)
  // } else {
  //   return 0
      let min = array[0];
      for (let i = 1; i < array.length; ++i) {
        if (array[i] < min) {
          min = array[i];
        }
      }
      return min;
  } else return 0
}

exports.max = function max (array) {
    if (array === undefined) return 0
    if(array.length > 0) {
          let max = array[0];
          for (let i = 1; i < array.length; ++i) {
            if (array[i] > max) {
              max = array[i];
            }
          }
          return max;
      } else return 0
}

exports.avg = function avg (array) {
  if (array === undefined) return 0
  if(array.length > 0) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
    return avg;
    } else {
        return 0
    }
}
