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
    var res = []
    for (var item of arguments) {
        if (Array.isArray(item)) res.push(...item)
        else res.push(item)
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
    var keysA = Object.keys(a),keysB = Object.keys(b)
    if (keysA.length !== keysB.length){
      return false
    } 
    for (var key of keysA){
      if (!keysB.haigeno1.includes(key) || !haigeno1.isEqual(a[key],b[key]) ){
        return false
      }
    }
    return true 
  },

  isEmpty:function(){
  },

  isBoolean:function(val){
    return typeof(val) === "Boolean"
  },

  isNumber:function(val){
    return haigeno1.getType(val) === 'Number'
  },

  isString:function(val){
    return typeof(val) === "string"
  },

  isFunction:function(){
    return typeof(val) === "function"
  },

  isNaN:function(val){
    return val !== val
  },

  isNull:function(val){
    return val === null
  },

  isNill:function(val){
    return val === null || val === undefined
  },

  isObject:function(value){
    return value !== null && typeof value === 'object' || typeof value === 'function'
  },

  isUndefined:function(val){
    return typeof val === undefined
  },

  isArguments:function(value){
    return Object.prototype.toString.call(value) === "[object Arguments]"
  },

  isArray:function(x){
    return Array.isArray(x)
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
          if (array[i][predicate[0]] !== predicate[1]) {
            break
        }
      }
    } else if (typeof predicate === "string"){
      for (var i = 0; i < array.length; i++){
        if (!array[i][predicate]){
          break
        }
      }
    } else if (typeof predicate === "object"){
      for (var i = 0; i < array.length; i++){
        if (!haigeno1.isEqual(array[i], predicate)){
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

  fill2:function(array,value,start=0,end=array.length){
    return array.reduce(function(result, item, index, ary) {
      if (index >= start && index < end){
        result.push(value)
      } else{
        result.push(array[index])
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
    var res = []
    var flattenDeepTmp = function(arr){
      for (var item of arr){
        if (Array.isArray(item)){
          flattenDeepTmp(item)
        } else {
          res.push(item)
        }
      }
    }
    flattenDeepTmp(array)
    return res
  },

  flattenDepth:function(array, depth=1){
    var tmp = array
    while(depth--){
      var tmp = haigeno1.flatten(tmp)
    }
    return tmp
  },

  head:function(array){
    return array[0]
  },

  initial:function(array){
    var res = array.slice()
    res.pop()
    return res
  },

  fromPairs:function(pairs){
    var res = {}
    for (var item of pairs){
      res[item[0]] = item[1]
    }
    return res
  },

  toPairs:function(object){
    var res = []
    for (var key in object){
      res.push([key,object[key]])
    }
    return res
  },

  cloneDeep:function(){

  },

  map:function (array,mapper){
    if (typeof mapper == "string") {
      mapper = haigeno1.property(mapper)
    }
    var res = []
    for (var i = 0; i < array.length; i++){
      res.push(mapper(array[i]))
    }
    return res
  },

  map2:function(array, mapper) {
    return Array.reduce(function(result, item, index, ary) {
      result.push(mapper(item, index, ary))
      return result
    }, [])
  },

  reduce:function(collection,reducer=haigeno1.identity,accumulator){
    var keys = Object.keys(collection)
    var values = Object.values(collection)
    if (accumulator === undefined){
      accumulator = values.shift()
      keys.shift()
    } 
    for (var i = 0; i < keys.length; i++){
      accumulator = reducer(accumulator,values[i],keys[i],collection)
    }
    return accumulator
  },

  filter:function(array,test){
    return array.reduce((result, item, index, ary) => {
      if (test(item, index, ary)) {
        result.push(item)
      }
      return result
    }, [])
  },

  forEach:function(collection, iteratee=_.identity){
    if (Array.isArray(collection)){
      for (var i = 0; i < array.length; i++){
        action(array[i])
      }
      return collection
    } else if (typeof collection === "object"){
      for (var i in collection){
        iteratee(i,collection[i])
      }
      return collection
    }
  },

  slice:function(array, start=0, end=array.length){
    var res = []
    for (var i = start; i < end; i++){
      res.push(array[i])
    }
    return res
  },

  includes:function(collection, value, fromIndex=0){
    if (typeof collection === "string"){
      return indexOf(value) !== -1
    } else if (Array.isArray(collection) ){
        fromIndex += collection.length
        for (var i = fromIdex; i < collection.length; i++){
          if (collection[i] === value){
            return true
          } 
        return false
        }
    } else if (typeof collection === "object"){
        for (var val of collection){
          if (val === value){
            return true
          }
        }
      return false      
    }
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
    if (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = fromIndex; i >= 0; i--){
      if (array[i] === value){
        return i
      }
    }
    return -1    
  },

  split:function(string='', separator, limit){

  },

  sumBy:function(array,iteratee=_.identity){
    var res = 0
    for (var i of array){
      res += iteratee(i)
    }
    return res
  },

  sum:function(array){
    return haigeno1.sumBy(array,haigeno1.identity)
  },

  property:function(path){
    return function(obj){
      return obj[path]
    }
  },

  matchesProperty:function(path, srcValue){
    return function(obj){
      return haigeno1.get(obj,path) === srcValue
    }
  },

  matches:function(source){
    return function(obj){
      for (var key in source){
        if(obj[key] !== source[key]){
          return false
        }
      }
      return true
    }
  },

  isMatch:function(object,source){
    for (var key in source){
      if (object[key] !== source[key]){
        return false
      } 
    }
    return true
  },

  isMatchWith:function(object, source, customizer){
    for (var key in source){
      if (customizer(object[key]) !== customizer(source[key])){
        return false
      } 
    }
    return true    
  },

  negate:function(predicate){
    return function(...args){
      return !predicate(...args)
    }
  },

  size:function(collection){
    if (typeof collection === "string" || Array.isArray(collection)){
      return collection.length
    } else if (typeof collection === "object"){
      return Object.keys(collection).length
    }
  },

  keys:function(object){
    var res = []
    for (var key in object){
      res.push(key)
    }
    return res
  },

  keyBy:function(array,key){
    var res = {}
    for(var item of array){
      res[item[key]] = item
    }
    return res
  },

  groupBy:function(array,propName){
    var res = {}
    for (var item of array){
      if (res[item[propName]] in res){
        res[item[propName]].push(item)
      } else {
        res[item[propName]] = [item]
      }
    }
  },

  groupBy1:function(ary,predicate){
    return ary.reduce((res,item,index,array)=>{

    },{})
  },

  bind:function(f,...fixedArgs){
    return function(...args){
      return f(...fixArgs,...args)
    }
  },

  once:function(func){
    var c = 0
    var lastRes
    return function(...arg){
      c++
      if (c === 1){
        lastRes = func(...arg)
      } 
      return lastRes
    }
  },

  ary:function(func,n = func.length){
    return function(...args){
      if (arguments.length > n) {
        n = n
      } 
      return func()
    }
  },

  unary:function(func){
    return function(x){
      return func(x)
    }
  },

  flip:function(func){
    return function(...args){
      return func(...args.reverse())
    }
  },

  spread:function(func,start = 0){
    return function(ary){
      return func.apply(null,ary)
    }
  },

  every:function(collection, predicate=_.identity){
    predicate = _.iteratee(predicate)
    for (var val of collection){
      if(!predicate(val)){
        return false
      }
    }
    return true
  },

  some:function(collection, predicate=_.identity){
    predicate = _.iteratee(predicate)
    for (var val of collection){
      if (predicate(val)){
        return true
      }
    }
    return false
  },

  iteratee:function(func=_.identity){
    var type = haigeno1.getType(func)
    if (type === 'Function') {
        return func
    } else if (type === 'String') {
        return property(func)
    } else if (type === 'Object') {
        return matches(func)
    } else if (type === 'Array') {
        return matchesProperty(func)
    }
  },
    

  method:function(path,...args){
    return function(obj){
      return haigeno1.get(obj,path)(...args)
    }
  },

  get:function(object, path, defaultValue){
    var path = haigeno1.toPath(path)
    for (var val of path){
      object = object[val]
      if (object === undefined){
        return defaultValue
      }
    }
    return object
  },  

  toPath:function(value){
    if (Array.isArray(value)){
      return value
    }
    return value.toString().split("[").join(".").split("]").join("").split(".")
  },

  getType:function(val){
    return Object.prototype.toString
      .call(val)
      .slice(8, -1)
  },

  find:function(collection, predicate=_.identity, fromIndex=0){
    predicate = _.iteratee(predicate)
    for (var i = fromIndex ; i < collection.length; i++){
      if (predicate(collection[i])){
        return collection[i]
      }
    }
  },

  findIndex:function(array, predicate=_.identity, fromIndex=0){
    predicate = _.iteratee(predicate)
    for (var i = fromIndex ; i < collection.length; i++){
      if (predicate(collection[i])){
        return i
      }
    }
    return -1
  },

}








