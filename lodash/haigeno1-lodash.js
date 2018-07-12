var haigeno1 = {
  chunk: function(arr, size=1) {
    var res = []
    for (var i = 0; i < arr.length; i += size){
      res.push(arr.slice(i,i + size))
    }
    return res
  },
  compact: function(arr){
    var res = []
    for (var i = 0; i < arr.length; i++){
      if(arr[i]){
        res.push(arr[i])
      }
    }
    return res
  },
  difference: function(array,...values){
    var res = []
    var newArray = []
    for (var i = 0; i < arguments.length; i++){
      newArray = newArray.concat(arguments[i])
    }
    for (var j = 0; j < array.length; j++){
      if (array[j] in newArray){
        res.push(array[j])
      }
    }
    return res
  },
  

}