var rectangles = [
  {width: 10 , height: 2},
  {width: 2 , height: 20},
  {width: 4 , height: 3}
]

var area = rectangles.map(item =>{
  return item.height* item.width;
})

console.log(area)