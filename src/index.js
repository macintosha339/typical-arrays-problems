
exports.min = function min (array) {
  if (Array.isArray(array) && array.length != 0) {
    let minV = array[0];
    for (let i = 1; i < array.length; i++) {
      if (minV > array[i]) minV = array[i];
    }
    return minV;
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length != 0) {
    let maxN = array[0];
    for (let i = 1; i < array.length; i++) {
      if (maxN < array[i]) maxN = array[i];
    }
    return maxN;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length != 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  return 0;
}
