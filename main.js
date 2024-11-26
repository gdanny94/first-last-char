function array(string) {
    //   //split string into array. 
    //   const newArry = string.split(',')
    //   //use slice to return new string. 
    //   const trimedStr = string.slice(1,-1) // slice removes first and last char.
    //   //join remaining chars
    //   const result = trimedStr.join(' ');
      
    return string.split(',').slice(1,-1).join(' ') || null
      
      
      
      }
      
      
    
    
    console.log(array('1,2,3,4,5')) // 2 3 4
    console.log(array('1')) // null