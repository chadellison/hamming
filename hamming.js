function Hamming() {}

Hamming.prototype.compute = function(strand1, strand2) {
  distanceApart = 0
  for (var i = 0; i < strand1.length; i += 1) {
    if (strand1.length !== strand2.length) {
      throw 'DNA strands must be of equal length.'
    } else if (strand1[i] !== strand2[i]) {
      distanceApart += 1
    }
  }
  return distanceApart
}
module.exports = Hamming;
