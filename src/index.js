
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!Array.isArray(matrix) || matrix.length === 0){
    return [];
  }

  let result =[];
  matrix.forEach((element, index) => {
    if(index%2){result.push(element.reverse());
    }else{
      result.push(element);
    }
  });
  result =result.reduce(function(a, b) {
    return a.concat(b);});
  

 
  return result;
}
