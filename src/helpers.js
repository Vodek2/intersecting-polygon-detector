const isEqual = require('lodash/isEqual')

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

  // return isPart?intersection:isPart
}

function createSegments(polygon) {
  if (!isEqual(polygon[0], polygon[polygon.length - 1])) {
    throw new Error('Polygon start point and end point not matching')
  }
  const arrOfSegments = []

  for (let i = 0; i < polygon.length-1; i++) {
    const segment = [polygon[i], polygon[i + 1]]
    arrOfSegments.push(segment)
  }
  // arrOfSegments.push([polygon[polygon.length - 1], polygon[0]])
  return arrOfSegments
}

module.exports = {
  createSegments,
  areLinesIntersect
}