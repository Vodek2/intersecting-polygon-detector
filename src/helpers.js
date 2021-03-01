function isPointPartOfSegment(point, segment1, segment2) {
  const x =
    (point[0] > segment1[0][0] && point[0] < segment1[1][0]) ||
    (point[0] > segment2[0][0] && point[0] < segment2[1][0])
  const y =
    (point[1] > segment1[0][1] && point[1] < segment1[1][1]) ||
    (point[1] > segment2[0][1] && point[1] < segment2[1][1])

  return x && y
}

function areLinesIntersect(segment1, segment2) {
  const A1 = segment1[1][1] - segment1[0][1]
  const B1 = segment1[0][0] - segment1[1][0]
  const C1 = A1 * segment1[0][0] + B1 * segment1[0][1]

  const A2 = segment2[1][1] - segment2[0][1]
  const B2 = segment2[0][0] - segment2[1][0]
  const C2 = A2 * segment2[0][0] + B2 * segment2[0][1]

  const denominator = A1 * B2 - A2 * B1

  const intersection = [
    (B2 * C1 - B1 * C2) / denominator,
    (A1 * C2 - A2 * C1) / denominator,
  ]

  return isPointPartOfSegment(intersection, segment1, segment2)
}

function hasOnlyNumbers(arr) {
  return arr.every((el) => typeof el === 'number')
}

function isPolygonValid(polygon) {
  //should be array
  if (!Array.isArray(polygon)) {
    throw new Error('Polygon should be an array')
  }
  // should have length of minimum 4
  if (polygon.length < 4) {
    throw new Error("Polygon array length can't be less than 4")
  }
  // valid polygon has only arrays of two points x,y
  if (!polygon.every((point) => point.length === 2)) {
    throw new Error('Polygon should has only points of 2 elements each')
  }
  // each point should has 2 numbers
  const everyElementHas2numbers = polygon.every((el) => hasOnlyNumbers(el))
  if (!everyElementHas2numbers) {
    throw new Error('Each point of polygon should have only numbers')
  }
  // last point should match first one
  const equal =
    polygon[0][0] === polygon[polygon.length - 1][0] &&
    polygon[0][1] === polygon[polygon.length - 1][1]
  if (!equal) {
    throw new Error('Polygon start point and end point not matching')
  }
  return false
}

function createSegments(polygon) {
  const arrOfSegments = []

  for (let i = 0; i < polygon.length - 1; i++) {
    const segment = [polygon[i], polygon[i + 1]]
    arrOfSegments.push(segment)
  }
  return arrOfSegments
}

module.exports = {
  createSegments,
  areLinesIntersect,
  isPolygonValid,
}
