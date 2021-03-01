const isPolygonIntersect = require('../src')
const {
  validPolygon,
  intersectingPolygon,
  invalidPolygonNotClosing,
  invalidPolygonNotArray,
  invalidPolygonNotLongEnough,
  invalidPolygonPointsInvalid,
  invalidPolygonNotJustNumbers,
} = require('./data/polygons')

describe('test isPolygonIntersect method', () => {
  it('should return false for valid polygon', () => {
    expect(isPolygonIntersect(validPolygon)).toBeFalsy()
  })
  it('should return true for polygon with intersecting lines', () => {
    expect(isPolygonIntersect(intersectingPolygon)).toBeTruthy()
  })
  it('should throw an error if polygon is not an array', () => {
    expect(() => isPolygonIntersect(invalidPolygonNotArray)).toThrowError(
      /Polygon should be an array/
    )
  })
  it('should throw an error if polygon length is less than 4', () => {
    expect(() => isPolygonIntersect(invalidPolygonNotLongEnough)).toThrowError(
      /Polygon array length can\'t be less than 4/
    )
  })
  it('should throw an error if polygon has points with not only 2 elements', () => {
    expect(() => isPolygonIntersect(invalidPolygonPointsInvalid)).toThrowError(
      /Polygon should has only points of 2 elements each/
    )
  })
  it('should throw an error if polygon has points with not just numbers', () => {
    expect(() => isPolygonIntersect(invalidPolygonNotJustNumbers)).toThrowError(
      /Each point of polygon should have only numbers/
    )
  })

  it('should throw an error if polygon is not closing', () => {
    expect(() => isPolygonIntersect(invalidPolygonNotClosing)).toThrowError(
      /Polygon start point and end point not matching/
    )
  })
})
