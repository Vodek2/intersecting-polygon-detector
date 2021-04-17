# Intersection polygon detector

This package validate 2D polygon array for self intersecting lines.  
Returns `true` if polygon has intersecting lines and `false` if does not.  
Does not have any dependencies.  
Use case example -> coordinates array from geoJSON object, validation before saving to DB e.g. mongodb will fail on geoJSON query if polygon has self intersecting line.

## Valid polygon example

![Valid polygon](assets/validPolygon.png)

## Self intersecting polygon example

![Valid polygon](assets/selfIntersectingPolygon.png)

## How to use this package

### installation

```bash
npm install intersecting-polygon-detector
```

### use

```js
const isPolygonIntersecting = require('intersecting-polygon-detector');
// or
import *  as isPolygonIntersecting from 'intersecting-polygon-detector';

const   validPolygon = [
    [1, 1.5],
    [2, 3],
    [1, -1],
    [-1, -1],
    [-1, 1],
    [-1, 3],
    [1, 1.5],
  ];

  const intersectingPolygon = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [1, 1],
  ];

  isPolygonIntersecting(validPolygon)  // returns false

  isPolygonIntersecting(intersectingPolygon) // returns true

  ```

#### practical use example

```js
import *  as isPolygonIntersecting from 'intersecting-polygon-detector';

function saveUsersPolygon(polygon){
  if(sPolygonIntersecting(polygon)){
    throw new Error('Polygon is self intersecting!')
  }

  // carry on with saving to DB

}

```

## additional behaviour

* validates the polygon if it is an array
* validates if array has minimum length of 4
* validates if each point contains only 2 coordinates and thay are of type numbers
* validates if the polygon is closing properly (start point equals end point)
