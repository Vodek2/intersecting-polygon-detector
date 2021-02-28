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
  // console.log('---------------\n',segment1,'\n',segment2, '\n----------------------\n')
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

function isPolygonIntersect(polygon) {
  const segments = createSegments(polygon)

  let lineIntersect = false

  for (let i = 0; i < segments.length; i++) {
    // console.log('Outer loop index', i)
    for (let j = 0; j < segments.length; j++) {
      // console.log('Inner loop index', j)
      lineIntersect = areLinesIntersect(segments[i], segments[j + 1] || segments[j-1])
      if (lineIntersect) {
        break
      }
    }
    if (lineIntersect) {
      break
    }
  }
  return lineIntersect
}

const polygon1 = [
  [1, 1],
  [2, 3],
  [1, -1],
  [-1, -1],
  [-1, 1],
  [-1, 3],
  [1, 1],
]
const polygon2 = [
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
  [1, 1],
]

console.time('p')
console.log(isPolygonIntersect(polygon1))
console.log(isPolygonIntersect(polygon2))

console.timeEnd('p')
