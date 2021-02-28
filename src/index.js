const { createSegments, areLinesIntersect } = require('./helpers')

function isPolygonIntersect(polygon) {
  const segments = createSegments(polygon)

  let lineIntersect = false

  for (let i = 0; i < segments.length; i++) {
    for (let j = i+1; j < segments.length; j++) {
      lineIntersect = areLinesIntersect(segments[i], segments[j])
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

module.exports = isPolygonIntersect

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
