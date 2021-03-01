const {
  areLinesIntersect,
  createSegments,
  isPolygonValid,
} = require('./helpers')

function isPolygonIntersect(polygon) {
  isPolygonValid(polygon)
  const segments = createSegments(polygon)

  let lineIntersect = false

  for (let i = 0; i < segments.length; i++) {
    for (let j = i + 1; j < segments.length; j++) {
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
