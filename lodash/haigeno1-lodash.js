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

  concat:function(array,...values){
    var res = array.slice()
    for (var item of values) {
        if (Array.isArray(item)) res.push(...item)
        else res.push(item)
    }
    return res
  },

  join:function(){

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
    return array.filter(j => !values2.includes(prep(j)))
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
    var res = []
    for (var i = n; i < array.length; i++){
      res.push(array[i])
    }
    return res
  },

  dropRight:function(array,n=1){
    var res = []
    for (var i = 0; i < array.length - n; i++){
      res.push(array[i])
    }
    return res
  },

  dropWhile:function(array, predicate=_.identity) {
    if (typeof predicate === "function"){
      for (var i = 0; i < array.length; i++){
        if (!predicate(array[i])){
          break
        }
      }
    } else if(Array.isArray(predicate)){
      for (var i = 0; i < array.length; i++){
          if (!(array[i] === predicate[0])) {
            break
        }
      }
    } else if (typeof predicate === "string"){
      for (var i = 0; i < array.length; i++){
        if (array[predicate[0]] !== predicate[1]){
          break
        }
      }
    } else if (typeof predicate === "object"){
      for (var i = 0; i < array.length; i++){
        if (!isEqual(array[i], predicate)){
          break
        }
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

  fill:function(array,value,start=0,end=array.length){
    return array.reduce(function(result, item, index, ary) {
      if (index >= start && index < end){
        result.push(value)
      }
      return result
    }, [])    
  },

  flatten:function(array){
    var res = [],t = 0
    for(var i = 0; i < array.length; i++){
      if (!Array.isArray(array[i])){
        res[t++] = array[i]
      } else {
        for (var j = 0; j < array[i].length; j++){
          res[t++] = array[i][j]
        }
      }
    }
    return res    
  },

  flattenDeep:function(array){
    var res = [],t = 0
    for(var i = 0; i < array.length; i++){
      flatten(array[i])
    }
    return res    
  },

  flattenDepth:function(array, depth=1){
    var tmp = array
    while(deepth--){
      var tmp = flatten(tmp)
    }
    return tmp
  },

  cloneDeep:function(){

  },

  map2:function (array,mapper){
    var res = []
    for (var i = 0; i < array.length; i++){
      res.push(mapper(array[i]))
    }
    return res
  },

  map:function(array, mapper) {
    return array.reduce(function(result, item, index, ary) {
      result.push(mapper(item, index, ary))
      return result
    }, [])
  },

  reduce:function(array,reducer,initialValue){
    var res = initialValue
    for (var i = 0; i < array.length; i++){
      res = reducer(res,array[i])
    }
    return res
  },

  filter:function(array,test){
    return array.reduce((result, item, index, ary) => {
      if (test(item, index, ary)) {
        result.push(item)
      }
      return result
    }, [])
  },

  forEach:function(array,action){
    for (var i = 0; i < array.length; i++){
      action(array[i])
    }
  },

  slice:function(array, start=0, end=array.length){
    var res = []
    for (var i = start; i < end; i++){
      res.push(array[i])
    }
    return res
  },

  add:function(){

  },

  indexOf:function(array, value, fromIndex = 0){
    while (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = fromIndex; i < array.length; i++){
      if (array[i] === value){
        return i
      }
    }
    return -1
  },

  lastIndexOf:function(array, value, fromIndex=array.length-1) {
    while (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = array.length - fromIndex; i >= 0; i--){
      if (array[i] === value){
        return i
      }
    }
    return -1    
  },

  split:function(string='', separator, limit){

  },


}








