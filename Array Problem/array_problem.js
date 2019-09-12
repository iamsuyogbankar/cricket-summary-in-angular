var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
var userInput = prompt('Enter no');

if(numbers.includes(parseInt(userInput)) == true){
  
  var key = numbers.indexOf(parseInt(userInput));  
  var newArr = numbers.slice(key, numbers.length); 
  var ekorArr = numbers.splice(key, newArr.length);    
  var finalArr = [...newArr,...numbers];   
  console.log('finalarr',finalArr)
  var indexInput = prompt('Enter no to find index');  
  var indexArr = finalArr.indexOf(parseInt(indexInput));
  if(indexArr < 0)
    {
      console.log('not found')
    }else{
      console.log(`Element found at ${indexArr}`);
    }
  
}else{
  console.log('no not found');
}