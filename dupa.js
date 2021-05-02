function isPointWithinSegment(point, segment){
  const [xPoint, yPoint] = point
  const [
    [xSegmentStart, ySegmentStart],
    [xSegmentEnd, ySegmentEnd],
  ] = segment
  const isWithinXRange = xPoint >= xSegmentStart && xPoint <= xSegmentEnd
  if(!isWithinXRange){
    return false
  }
  return (yPoint >= ySegmentStart) && (yPoint <= ySegmentEnd)
}

function isPointPartOfBothSegments(point, segment1, segment2) {

  return isPointWithinSegment(point, segment1) && isPointWithinSegment(point, segment2)
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
  const possibleIntersection = [
    (B2 * C1 - B1 * C2) / denominator,
    (A1 * C2 - A2 * C1) / denominator,
  ]
  // return possibleIntersection
  // check if intersection is part of both segments
  return isPointPartOfBothSegments(possibleIntersection, segment1, segment2)
}

const segment1 = [[-1,0], [2,3]]
const segment2 = [[2,0], [2,3]]

const intersection = areLinesIntersect(segment1, segment2)

console.log(intersection)