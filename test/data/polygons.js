module.exports = {
  validPolygon: [
    [1, 1.5],
    [2, 3],
    [1, -1],
    [-1, -1],
    [-1, 1],
    [-1, 3],
    [1, 1.5],
  ],
  intersectingPolygon: [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [1, 1],
  ],
  invalidPolygonNotClosing: [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
    [1, 2],
  ],
  invalidPolygonNotJustNumbers: [
    [1, '1'],
    [1, -1],
    [null, -1],
    [-1, 1],
    [1, 2],
  ],
  invalidPolygonNotLongEnough: [
    [1, 1],
    [1, -1],
    [1, 1],
  ],
  invalidPolygonPointsInvalid: [
    [1, 1],
    [3],
    [1, -1],
    [-1, -1, 31],
    [-1, 1],
    [-1, 3],
    [1, 1],
  ],
  invalidPolygonNotArray: {}
}
