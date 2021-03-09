
exports.min = function min (array) {
  
  if (array === undefined) {return 0};
  if (array.length == 0){return 0};
  return Math.min.apply(null, array)
}

exports.max = function max (array) {
  if (array === undefined) {return 0};
  if (array.length == 0){return 0};
  return Math.max.apply(null, array)
}

exports.avg = function avg (array) {
  if (array === undefined) {return 0};
  if (array.length == 0){return 0};
  let avgg=0;
  for (let i=0;i<array.length;i++){avgg+=array[i]};
  return avgg/array.length
}
