
exports.min = function min(array) {

  return array && array.length !== 0 ? Math.min(...array) : 0
}

exports.max = function max(array) {
  return array && array.length !== 0 ? Math.max(...array) : 0
}

exports.avg = function avg(array) {
  if (array && array.length !== 0) {
    let total = array.reduce((total, num) => {
      return total += num
    }, 0)
    return total / array.length;
  }
  return 0
}