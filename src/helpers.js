function isPointPartOfSegment(point, segment1, segment2) {
  const [xPoint, yPoint] = point
  const [
    [xSegment1Start, ySegment1Start],
    [xSegment1End, ySegment1End],
  ] = segment1
  const [
    [xSegment2Start, ySegment2Start],
    [xSegment2End, ySegment2End],
  ] = segment2

  const x =
    (xPoint > xSegment1Start && xPoint < xSegment1End) ||
    (xPoint > xSegment2Start && xPoint < xSegment2End)
  const y =
    (yPoint > ySegment1Start && yPoint < ySegment1End) ||
    (yPoint > ySegment2Start && yPoint < ySegment2End)

  return x && y
}

function areLinesIntersect(segment1, segment2) {
  const [
    [xSegment1Start, ySegment1Start],
    [xSegment1End, ySegment1End],
  ] = segment1
  const [
    [xSegment2Start, ySegment2Start],
    [xSegment2End, ySegment2End],
  ] = segment2

  const A1 = ySegment1End - ySegment1Start
  const B1 = xSegment1Start - xSegment1End
  const C1 = A1 * xSegment1Start + B1 * ySegment1Start

  const A2 = ySegment2End - ySegment2Start
  const B2 = xSegment2Start - xSegment2End
  const C2 = A2 * xSegment2Start + B2 * ySegment2Start

  const denominator = A1 * B2 - A2 * B1
  // possible intersection for 2 lines which includes segments
  const intersection = [
    (B2 * C1 - B1 * C2) / denominator,
    (A1 * C2 - A2 * C1) / denominator,
  ]
  // check if intersection is part of both segments
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
  const everyElementHas2numbers = polygon.every(hasOnlyNumbers)
  if (!everyElementHas2numbers) {
    throw new Error('Each point of polygon should have only numbers')
  }
  // last point should match first one
  const [xStart, yStart] = polygon[0]
  const [xEnd, yEnd] = polygon[polygon.length - 1]
  const equal = xStart === xEnd && yStart === yEnd
  if (!equal) {
    throw new Error('Polygon start point and end point not matching')
  }
  return false
}

// group polygon coordinate points into segments [[[x.y],[x,y]],.....]
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
