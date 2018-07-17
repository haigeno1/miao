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
    var newValues = [].concat(...values)
    for (var j = 0; j < array.length; j++){
      if (!newValues.includes(array[j])){
        res.push(array[j])
      }
    }
    return res
  },

  differenceBy: function(array,values,iteratee=_.identity){
    var prep = _.iteratee(iteratee)
    var values2 = values.map(i => prep(i))
    return array.filter(j => values2.includes(prep(j)))
  },

  differenceWith: function(array, values, comparator){
    return array.filter(arr => values.every(value => !comparator(arr, value)))
  },

  isEqual: function(a, b){
    if (a === b){
      return true
    }
    if(a == null || b == null || typeof(a) != "object" || typeof(b) != "object" ) {
      return false
    }
    var keysA = Objects.keys(a),keysB = Objects.keys(b)
    if (keysA.length !== keysB.length){
      return false
    } 
    for (var key of keysA){
      if (!keysB.includes(key) || !isEqual(a[key],b[key]) ){
        return false
      }
    }
  return true 
  },

  identity:function(...values){
    return values[0]
  },

  drop:function(array,n=1) {
    var n = n || 1
    var res = []
    for (var i = n; i < array.length; i++){
      res.push(array[i])
    }
    return res
  },

  dropRight:function(array,n=1){
    var n = n || 1
    var res = []
    for (var i = 0; i < array.length - n; i++){
      res.push(array[i])
    }
    return res
  },

  dropWhile:function(array, predicate=_.identity) {
    for (var i = 0; i < array.length; i++){
      if (!predicate(array[i])){
        break
      }
    }
    var res = []
    for (var j = i; j < array.length; j++){
      res.push(array[j])
    }
    return res
  },

  fill:function(array,value,start=0,end=array.length){
    for (var i = start; i < end; i++){
      array[i] = value
    }
    return array
  },

  flatten:function(array){
    var res = [],t = 0
    for(var i = 0; i < array.length; i++){
      if (!isArray[i]){
        res[t++] = array[i]
      } else {
        for (var j = 0; j < res[i].length; j++){
          res[t++] = res[i][j]
        }
      }
    }
    return res
  }




}








