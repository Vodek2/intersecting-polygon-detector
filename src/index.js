const {
  areLinesIntersect,
  createSegments,
  getAllSegmentsButIndexAndNeighbors,
  isPolygonValid,
} = require('./helpers')

function isPolygonIntersect(polygon) {
  isPolygonValid(polygon)
  const segments = createSegments(polygon)

  let lineIntersect = false

  outer:for (let i = 0; i < segments.length; i++) {
    const current = segments[i]
    const otherSegments = getAllSegmentsButIndexAndNeighbors(i, segments)
    for (let j = 0; j < otherSegments.length; j++) {
      lineIntersect = areLinesIntersect(current, otherSegments[j])
      if (lineIntersect) {
        break outer
      }
    }
  }
  return lineIntersect
}

module.exports = isPolygonIntersect
