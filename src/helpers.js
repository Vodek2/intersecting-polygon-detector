function isPointWithinSegment(point, segment) {
  const [xPoint, yPoint] = point
  const [[xSegmentStart, ySegmentStart], [xSegmentEnd, ySegmentEnd]] = segment
  const maxX = Math.max(xSegmentStart, xSegmentEnd)
  const maxY = Math.max(ySegmentStart, ySegmentEnd)
  const minX = Math.min(xSegmentStart, xSegmentEnd)
  const minY = Math.min(ySegmentStart, ySegmentEnd)
  const isWithinXRange = xPoint >= minX && xPoint <=maxX
  const isWithinYRange = yPoint >= minY && yPoint <= maxY

  return isWithinXRange && isWithinYRange

}

function isPointPartOfBothSegments(point, segment1, segment2) {
  const pointInSegment1 =  isPointWithinSegment(point, segment1)
  const pointInSegment2 =  isPointWithinSegment(point, segment2)
  return  pointInSegment1 && pointInSegment2
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
  const numeratorX = B2 * C1 - B1 * C2
  const numeratorY = A1 * C2 - A2 * C1
  const XNumerator = numeratorX === 0 || numeratorX === -0 ? 0 : numeratorX
  const YNumerator = numeratorY === 0 || numeratorY === -0 ? 0 : numeratorY
  const X = XNumerator/denominator === 0 ? 0 : XNumerator/denominator
  const Y = YNumerator/denominator === 0 ? 0 : YNumerator/denominator

  // possible intersection for 2 lines which includes segments
  const possibleIntersection =
    denominator !== 0 ? [X , Y] : [0, 0]
  // check if intersection is part of both segments
  const ret = isPointPartOfBothSegments(
    possibleIntersection,
    segment1,
    segment2
  )
  return ret
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
function getAllSegmentsButIndexAndNeighbors(currentIndex, arrayOfSegments) {
  if (currentIndex >= arrayOfSegments.length || currentIndex < 0) {
    throw new Error('Invalid current index')
  }

  let nextIndex = currentIndex + 1
  let previousIndex = currentIndex - 1
  if (currentIndex === arrayOfSegments.length - 1) {
    nextIndex = 0
  }
  if (currentIndex === 0) {
    previousIndex = arrayOfSegments.length - 1
  }
  const segments = arrayOfSegments.filter((segment, index) => {
    return (
      index !== currentIndex && index !== nextIndex && index !== previousIndex
    )
  })
  return segments
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
  getAllSegmentsButIndexAndNeighbors,
}
