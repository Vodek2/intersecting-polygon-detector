const {
  getAllSegmentsButIndexAndNeighbors,
  areLinesIntersect
} = require('../src/helpers')

describe('test getAllSegmentsButIndexAndNeighbors', ()=>{
  const testArray = [1,2,3,4,5,6,7,8,9]

  it('should return [3,4,5,6,7,8] for index 0', ()=>{
    expect(getAllSegmentsButIndexAndNeighbors(0,testArray)).toEqual([3,4,5,6,7,8])
  })
  it('should return [1,5,6,7,8,9] for index 2', ()=>{
    expect(getAllSegmentsButIndexAndNeighbors(2,testArray)).toEqual([1,5,6,7,8,9])
  })
  it('should throw error for invalid index (negative)', ()=>{
    expect(()=>getAllSegmentsButIndexAndNeighbors(-2,testArray)).toThrowError(/current index/)
  })
  it('should throw error for invalid index (to big)', ()=>{
    expect(()=>getAllSegmentsButIndexAndNeighbors(9,testArray)).toThrowError(/current index/)
  })

})

describe('test areLinesIntersect', ()=>{
  const intersectingSegments = [
    [[1,-1],[-1,1]],
    [[-1,-1], [1,1]],
  ]
  test('should return true for intersecting polygon', ()=>{
    const[segment1,segment2] = intersectingSegments
    expect(areLinesIntersect(segment1, segment2)).toBeTruthy()
  })


})