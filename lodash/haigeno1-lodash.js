var haigeno1 = (function(){
  var chunk,difference,differenceBy,differenceWith,drop,dropRight,dropRightWhile,dropWhile,fill,findIndex,findLastIndex,flatten,flattenDeep,flattenDepth,fromPairs,head,indexOf,initial,intersection,intersectionBy,intersectionWith,join,last,lastIndexOf,nth,pull,pullAll,pullAllBy,pullAllWith,reverse,sortedIndex,sortedIndexBy,sortedIndexOf,sortedLastIndex,sortedLastIndexBy,sortedLastIndexOf,sortedUniq,sortedUniqBy,tail,take,takeRight,takeRightWhile,takeWhile,union,unionBy,unionWith,uniq,uniqBy,uniqWith,unzip,unzipWith,without,xor,xorBy,xorWith,zip,zipObject,zipObjectDeep,zipWith,countBy,every,filter,find,findLast,flatMap,flatMapDeep,flatMapDepth,forEach,forEachRight,groupBy,includes,invokeMap,keyBy,map,orderBy,partition,reduce,reduceRight,reject,sample,sampleSize,shuffle,size,some,sortBy,defer,delay,castArray,conformsTo,eq,gt,gte,isArguments,isArray,isArrayBuffer,isArrayLike,isArrayLikeObject,isBoolean,isDate,isElement,isEmpty,isEqual,isEqualWith,isError,isFinite,isFunction,isInteger,isLength,isMap,isMatch,isMatchWith,isNaN,isNative,isNil,isNull,isNumber,isObject,isObjectLike,isPlainObject,isRegExp,isSafeInteger,isSet,isString,isSymbol,isTypedArray,isUndefined,isWeakMap,isWeakSet,lt,lte,toArray,toFinite,toInteger,toLength,toNumber,assign,toSafeInteger,add,ceil,divide,floor,max,maxBy,mean,meanBy,min,minBy,multiply,round,subtract,sum,sumBy,clamp,inRange,random,assignIn,at,defaults,defaultsDeep,findKey,findLastKey,forIn,forInRight,forOwn,forOwnRight,functions,functionsIn,get,has,hasIn,invert,invertBy,invoke,keys,keysIn,mapKeys,mapValues,merge,mergeWith,omit,omitBy,pick,pickBy,result,set,setWith,toPairs,toPairsIn,transform,unset,update,updateWith,values,valuesIn,camelCase,capitalize,deburr,endsWith,escape,escapeRegExp,kebabCase,lowerCase,lowerFirst,pad,padEnd,padStart,parseInt,repeat,replace,snakeCase,split,startCase,startsWith,toLower,toUpper,trim,trimEnd,trimStart,truncate,unescape,upperCase,upperFirst,words,bindAll,defaultTo,range,rangeRight,mixin,times,toPath,uniqueId,cloneDeep,identity,concat,pullAt,matches,property,ary,unary,negate,once,spread,flip,conforms,constant,flow,method,methodOf,nthArg,propertyOf,arrayToLinkedList,parseJson,dellTo3355,isPrime,fibb,getType;
  return { 
    chunk :chunk,
    differenceBy :differenceBy,
    difference :difference,
    differenceWith :differenceWith,
    drop :drop,
    dropRight :dropRight,
    dropRightWhile :dropRightWhile,
    dropWhile :dropWhile,
    fill :fill,
    findIndex :findIndex,
    findLastIndex :findLastIndex,
    flatten :flatten,
    flattenDeep :flattenDeep,
    flattenDepth :flattenDepth,
    fromPairs :fromPairs,
    head :head,
    indexOf :indexOf,
    initial :initial,
    intersection :intersection,
    intersectionBy :intersectionBy,
    intersectionWith :intersectionWith,
    join :join,
    last :last,
    lastIndexOf :lastIndexOf,
    nth :nth,
    pull :pull,
    pullAll :pullAll,
    pullAllBy :pullAllBy,
    pullAllWith :pullAllWith,
    reverse :reverse,
    sortedIndex :sortedIndex,
    sortedIndexBy :sortedIndexBy,
    sortedIndexOf :sortedIndexOf,
    sortedLastIndex :sortedLastIndex,
    sortedLastIndexBy :sortedLastIndexBy,
    sortedLastIndexOf :sortedLastIndexOf,
    sortedUniq :sortedUniq,
    sortedUniqBy :sortedUniqBy,
    tail :tail,
    take :take,
    takeRight :takeRight,
    takeRightWhile :takeRightWhile,
    takeWhile :takeWhile,
    union :union,
    unionBy :unionBy,
    unionWith :unionWith,
    uniq :uniq,
    uniqBy :uniqBy,
    uniqWith :uniqWith,
    unzip :unzip,
    unzipWith :unzipWith,
    without :without,
    xor :xor,
    xorBy :xorBy,
    xorWith :xorWith,
    zip :zip,
    zipObject :zipObject,
    zipObjectDeep :zipObjectDeep,
    zipWith :zipWith,
    countBy :countBy,
    every :every,
    filter :filter,
    find :find,
    findLast :findLast,
    flatMap :flatMap,
    flatMapDeep :flatMapDeep,
    flatMapDepth :flatMapDepth,
    forEach :forEach,
    forEachRight :forEachRight,
    groupBy :groupBy,
    includes :includes,
    invokeMap :invokeMap,
    keyBy :keyBy,
    map :map,
    orderBy :orderBy,
    partition :partition,
    reduce :reduce,
    reduceRight :reduceRight,
    reject :reject,
    sample :sample,
    sampleSize :sampleSize,
    shuffle :shuffle,
    size :size,
    some :some,
    sortBy :sortBy,
    defer :defer,
    delay :delay,
    castArray :castArray,
    conformsTo :conformsTo,
    eq :eq,
    gt :gt,
    gte :gte,
    isArguments :isArguments,
    isArray :isArray,
    isArrayBuffer :isArrayBuffer,
    isArrayLike :isArrayLike,
    isArrayLikeObject :isArrayLikeObject,
    isBoolean :isBoolean,
    isDate :isDate,
    isElement :isElement,
    isEmpty :isEmpty,
    isEqual :isEqual,
    isEqualWith :isEqualWith,
    isError :isError,
    isFinite :isFinite,
    isFunction :isFunction,
    isInteger :isInteger,
    isLength :isLength,
    isMap :isMap,
    isMatch :isMatch,
    isMatchWith :isMatchWith,
    isNaN :isNaN,
    isNative :isNative,
    isNil :isNil,
    isNull :isNull,
    isNumber :isNumber,
    isObject :isObject,
    isObjectLike :isObjectLike,
    isPlainObject :isPlainObject,
    isRegExp :isRegExp,
    isSafeInteger :isSafeInteger,
    isSet :isSet,
    isString :isString,
    isSymbol :isSymbol,
    isTypedArray :isTypedArray,
    isUndefined :isUndefined,
    isWeakMap :isWeakMap,
    isWeakSet :isWeakSet,
    lt :lt,
    lte :lte,
    toArray :toArray,
    toFinite :toFinite,
    toInteger :toInteger,
    toLength :toLength,
    toNumber :toNumber,
    assign :assign,
    toSafeInteger :toSafeInteger,
    add :add,
    ceil :ceil,
    divide :divide,
    floor :floor,
    max :max,
    maxBy :maxBy,
    mean :mean,
    meanBy :meanBy,
    min :min,
    minBy :minBy,
    multiply :multiply,
    round :round,
    subtract :subtract,
    sum :sum,
    sumBy :sumBy,
    clamp :clamp,
    inRange :inRange,
    random :random,
    assignIn :assignIn,
    at :at,
    defaults :defaults,
    defaultsDeep :defaultsDeep,
    findKey :findKey,
    findLastKey :findLastKey,
    forIn :forIn,
    forInRight :forInRight,
    forOwn :forOwn,
    forOwnRight :forOwnRight,
    functions :functions,
    functionsIn :functionsIn,
    get :get,
    has :has,
    hasIn :hasIn,
    invert :invert,
    invertBy :invertBy,
    invoke :invoke,
    keys :keys,
    keysIn :keysIn,
    mapKeys :mapKeys,
    mapValues :mapValues,
    merge :merge,
    mergeWith :mergeWith,
    omit :omit,
    omitBy :omitBy,
    pick :pick,
    pickBy :pickBy,
    result :result,
    set :set,
    setWith :setWith,
    toPairs :toPairs,
    toPairsIn :toPairsIn,
    transform :transform,
    unset :unset,
    update :update,
    updateWith :updateWith,
    values :values,
    valuesIn :valuesIn,
    camelCase :camelCase,
    capitalize :capitalize,
    deburr :deburr,
    endsWith :endsWith,
    escape :escape,
    escapeRegExp :escapeRegExp,
    kebabCase :kebabCase,
    lowerCase :lowerCase,
    lowerFirst :lowerFirst,
    pad :pad,
    padEnd :padEnd,
    padStart :padStart,
    parseInt :parseInt,
    repeat :repeat,
    replace :replace,
    snakeCase :snakeCase,
    split :split,
    startCase :startCase,
    startsWith :startsWith,
    toLower :toLower,
    toUpper :toUpper,
    trim :trim,
    trimEnd :trimEnd,
    trimStart :trimStart,
    truncate :truncate,
    unescape :unescape,
    upperCase :upperCase,
    upperFirst :upperFirst,
    words :words,
    bindAll :bindAll,
    defaultTo :defaultTo,
    range :range,
    rangeRight :rangeRight,
    mixin :mixin,
    times :times,
    toPath :toPath,
    uniqueId :uniqueId,
    cloneDeep :cloneDeep,
    identity :identity,
    concat :concat,
    pullAt :pullAt,
    matches :matches,
    property :property,
    ary :ary,
    unary :unary,
    negate :negate,
    once :once,
    spread :spread,
    flip :flip,
    conforms :conforms,
    constant :constant,
    flow :flow,
    method :method,
    methodOf :methodOf,
    nthArg :nthArg,
    propertyOf :propertyOf,
    arrayToLinkedList :arrayToLinkedList,
    parseJson :parseJson,
    dellTo3355 :dellTo3355,
    isPrime :isPrime,
    fibb :fibb,
    getType: getType,
  }


  function chunk(arr, size=1) {
    var res = []
    for (var i = 0; i < arr.length; i += size){
      res.push(arr.slice(i,i + size))
    }
    return res
  }

  function compact(arr){
    var res = []
    for (var i = 0; i < arr.length; i++){
      if(arr[i]){
        res.push(arr[i])
      }
    }
    return res
  }

  function concat(array,...values){
    var res = []
    for (var item of arguments) {
        if (Array.isArray(item)) res.push(...item)
        else res.push(item)
    }
    return res
  }

  function difference(array,...values){
    var res = []
    var newValues = [].concat(...values)
    for (var j = 0; j < array.length; j++){
      if (!newValues.includes(array[j])){
        res.push(array[j])
      }
    }
    return res
  }

  function differenceBy(array,...values){
    if (typeof values[values.length-1] === "string" || typeof values[values.length-1] === "function"){
      var prep = iteratee(values.pop())
    } else {
      var prep = identity
    }
    values = [].concat(...values)
    return array.filter(j => !values.map(i => prep(i)).includes(prep(j)))
  }

  function differenceWith(array, ...values){
    if (typeof values[values.length-1] === "string" || typeof values[values.length-1] === "function"){
      var comparator = iteratee(values.pop())
    }     
    values = [].concat(...values)
    return array.filter(arr => !values.some(value => comparator(arr, value)))
  }

  function isEqual(a, b){
    if (a === b){
      return true
    }
    if (a !== a && b !== b) return true;
    if(a == null || b == null || typeof(a) != "object" || typeof(b) != "object" ) {
      return false
    }
    var keysA = Object.keys(a),keysB = Object.keys(b)
    if (keysA.length !== keysB.length){
      return false
    } 
    for (var key of keysA){
      if (!keysB.includes(key) || !isEqual(a[key],b[key]) ){
        return false
      }
    }
    return true 
  }

  function isEmpty(){
  }

  function isBoolean(val){
    return typeof(val) === "Boolean"
  }

  function isNumber(val){
    return getType(val) === 'Number'
  }

  function isString(val){
    return typeof(val) === "string"
  }

  function isFunction(){
    return typeof(val) === "function"
  }

  function isNaN(val){
    return val !== val
  }

  function isNull(val){
    return val === null
  }

  function isNill(val){
    return val === null || val === undefined
  }

  function isObject(value){
    return value !== null && typeof value === 'object' || typeof value === 'function'
  }

  function isUndefined(val){
    return typeof val === undefined
  }

  function isArguments(value){
    return Object.prototype.toString.call(value) === "[object Arguments]"
  }

  function isArray(x){
    return Array.isArray(x)
  }

  function identity(...values){
    return values[0]
  }

  function drop(array,n=1) {
    var res = []
    for (var i = n; i < array.length; i++){
      res.push(array[i])
    }
    return res
  }

  function dropRight(array,n=1){
    var res = []
    for (var i = 0; i < array.length - n; i++){
      res.push(array[i])
    }
    return res
  }

  function dropWhile(array, predicate=_.identity) {
    predicate = iteratee(predicate)
    for (var i = 0; i < array.length; i++){
      if (!predicate(array[i])){
        return array.slice(i)
      }
    }
    return []
  }

  function dropRightWhile(array, predicate=_.identity){
    predicate = iteratee(predicate)
    for (var i = array.length-1; i >= 0; i--){
      if (!predicate(array[i])){
        return array.slice(0,i+1)
      }
    }
    return []
  }

  function fill(array,value,start=0,end=array.length){
    for (var i = start; i < end; i++){
      array[i] = value
    }
    return array
  }

  function fill2(array,value,start=0,end=array.length){
    return array.reduce(function(result, item, index, ary) {
      if (index >= start && index < end){
        result.push(value)
      } else{
        result.push(array[index])
      }
      return result
    },[])    
  }

  function flatten(array){
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
  }

  function flattenDeep(array){
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
  }

  function flattenDepth(array, depth=1){
    var tmp = array
    while(depth--){
      var tmp = haigeno1.flatten(tmp)
    }
    return tmp
  }

  function head(array){
    return array[0]
  }

  function initial(array){
    var res = array.slice()
    res.pop()
    return res
  }

  function fromPairs(pairs){
    var res = {}
    for (var item of pairs){
      res[item[0]] = item[1]
    }
    return res
  }

  function toPairs(object){
    var res = []
    for (var key in object){
      res.push([key,object[key]])
    }
    return res
  }

  function cloneDeep(){

  }

  function map (array,mapper){
    if (typeof mapper == "string") {
      mapper = haigeno1.property(mapper)
    }
    var res = []
    for (var i = 0; i < array.length; i++){
      res.push(mapper(array[i]))
    }
    return res
  }

  function map2(array, mapper) {
    return Array.reduce(function(result, item, index, ary) {
      result.push(mapper(item, index, ary))
      return result
    },[])
  }

  function reduce(collection,reducer=haigeno1.identity,accumulator){
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
  }

  function filter(array,test){
    return array.reduce((result, item, index, ary) => {
      if (test(item, index, ary)) {
        result.push(item)
      }
      return result
    },[])
  }

  function forEach(collection, iteratee=_.identity){
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
  }

  function slice(array, start=0, end=array.length){
    var res = []
    for (var i = start; i < end; i++){
      res.push(array[i])
    }
    return res
  }

  function includes(collection, value, fromIndex=0){
    if (typeof collection === "string"){
      return collection.indexOf(value) !== -1
    } else if (Array.isArray(collection) ){
        if (fromIndex < 0) {
          fromIndex += collection.length
        }
        for (var i = fromIndex; i < collection.length; i++){
          if (isEqual(collection[i],value)){
            return true
          } 
        return false
        }
    } else if (typeof collection === "object"){
        for (var i in collection){
          if (isEqual(collection[i],value)){
            return true
          }
        }
      return false      
    }
  }

  // intersectionBy(...arrays){
  //   //if (!Array.isArray(arguments[-1]) {

  //  // }
  // }



  function indexOf(array, value, fromIndex = 0){
    while (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = fromIndex; i < array.length; i++){
      if (array[i] === value){
        return i
      }
    }
    return -1
  }

  function lastIndexOf(array, value, fromIndex=array.length-1) {
    if (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = fromIndex; i >= 0; i--){
      if (array[i] === value){
        return i
      }
    }
    return -1    
  }

  function split(string='', separator, limit){

  }

  function sumBy(array,iteratee=_.identity){
    var res = 0
    for (var i of array){
      res += iteratee(i)
    }
    return res
  }

  function sum(array){
    return haigeno1.sumBy(array,haigeno1.identity)
  }

  function property(path){
    return function(obj){
      return obj[path]
    }
  }

  function matchesProperty(path, srcValue){
    if (Array.isArray(path)){
        path = path[0]
        srcValue = path[1]
    }
    return function(obj){
      return get(obj,path) === srcValue
    }
  }

  function matches(source){
    return function(obj){
      for (var key in source){
        if(obj[key] !== source[key]){
          return false
        }
      }
      return true
    }
  }

  function isMatch(object,source){
    for (var key in source){
      if (object[key] !== source[key]){
        return false
      } 
    }
    return true
  }

  function isMatchWith(object, source, customizer){
    for (var key in source){
      if (customizer(object[key]) !== customizer(source[key])){
        return false
      } 
    }
    return true    
  }

  function negate(predicate){
    return function(...args){
      return !predicate(...args)
    }
  }

  function size(collection){
    if (typeof collection === "string" || Array.isArray(collection)){
      return collection.length
    } else if (typeof collection === "object"){
      return Object.keys(collection).length
    }
  }

  function keys(object){
    var res = []
    for (var key in object){
      res.push(key)
    }
    return res
  }

  function keyBy(array,key){
    var res = {}
    for(var item of array){
      res[item[key]] = item
    }
    return res
  }

  function groupBy(array,propName){
    var res = {}
    for (var item of array){
      if (res[item[propName]] in res){
        res[item[propName]].push(item)
      } else {
        res[item[propName]] = [item]
      }
    }
  }

  // function groupBy1(ary,predicate){
  //   return ary.reduce((res,item,index,array)=>{

  //   },{})
  // }

  function bind(f,...fixedArgs){
    return function(...args){
      return f(...fixArgs,...args)
    }
  }

  function once(func){
    var c = 0
    var lastRes
    return function(...arg){
      c++
      if (c === 1){
        lastRes = func(...arg)
      } 
      return lastRes
    }
  }

  function ary(func,n = func.length){
    return function(...args){
      return func(...args.slice(0,n))
    }
  }

  function unary(func){
    return function(x){
      return func(x)
    }
  }

  function flip(func){
    return function(...args){
      return func(...args.reverse())
    }
  }

  function spread(func,start = 0){
    return function(ary){
      return func.apply(null,ary)
    }
  }

  function every(collection, predicate=_.identity){
    predicate = _.iteratee(predicate)
    for (var val of collection){
      if(!predicate(val)){
        return false
      }
    }
    return true
  }

  function some(collection, predicate=_.identity){
    predicate = _.iteratee(predicate)
    for (var val of collection){
      if (predicate(val)){
        return true
      }
    }
    return false
  }

  function iteratee(func=_.identity){
    var type = getType(func)
    if (type === 'Function') {
        return func
    } else if (type === 'String') {
        return property(func)
    } else if (type === 'Object') {
        return matches(func)
    } else if (type === 'Array') {
        return matchesProperty(func)
    }
  }
    

  function method(path,...args){
    return function(obj){
      return haigeno1.get(obj,path)(...args)
    }
  }

  function get(object, path, defaultValue){
    var path = haigeno1.toPath(path)
    for (var val of path){
      object = object[val]
      if (object === undefined){
        return defaultValue
      }
    }
    return object
  }  

  function toPath(value){
    if (Array.isArray(value)){
      return value
    }
    return value.toString().split("[").join(".").split("]").join("").split(".")
  }

  function getType(val){
    return Object.prototype.toString
      .call(val)
      .slice(8, -1)
  }

  function find(collection, predicate=_.identity, fromIndex=0){
    predicate = _.iteratee(predicate)
    for (var i = fromIndex ; i < collection.length; i++){
      if (predicate(collection[i])){
        return collection[i]
      }
    }
  }

  function findIndex(array, predicate=_.identity, fromIndex=0){
    predicate = _.iteratee(predicate)
    for (var i = fromIndex ; i < array.length; i++){
      if (predicate(array[i])){
        return i
      }
    }
    return -1
  }

  function findLastIndex(array, predicate=_.identity, fromIndex=array.length-1){
    predicate = _.iteratee(predicate)
    for (var i = fromIndex ; i >= 0; i--){
      if (predicate(array[i])){
        return i
      }
    }
    return -1    
  }

  function intersection(...arrays){
    var res = []
    var resArray = arrays.shift()
    for (var val of resArray){
      var flag = 0
      for (var value of arrays){
        if (!value.includes(val)){
          flag = 1;
          break
        }
      }
      if (flag === 0){
        res.push(val)
      }
    }
    return res
  }

  function test(...args){
    for (var i = 1; i < args.length; i++){
      console.log(args[0](args[i]))
    }
  }

  function uniq(array){
    var res = []
    for (var i = 0; i < array.length; i++){
      if (!res.includes(array[i])){
        res.push(array[i])
      }
    }
    return res
  }

  function uniqBy(array, predicate=_.identity){
    var prep = iteratee(predicate)
    var res = [] 
    array.forEach(i => res.some(j => prep(j)===prep(i)) ? res :res.push(i))
    return res
  }

  function uniqWith(array, comparator){
    var res = []
    array.forEach(i => res.some(j => comparator(i,j)) ? res :res.push(i))
    return res
  }

  function union1(...arrays){
    return arrays.reduce((res,item)=>item.forEach(val => {if(!res.includes(val)){res.push(val)}}),[])
  }

  function union(...arrays){
    var res = arrays[0]
    for (var i = 1; i < arrays.length; i++){
      for (var j = 0; j < arrays[i].length; j++){
        if (!res.includes(arrays[i][j])){
          res.push(arrays[i][j])
        }
      }
    }
    return res
  }

  function unionBy(...arrays){
    if (!Array.isArray(arrays[arrays.length - 1])){
      var prep = iteratee(arrays.pop())
    }
    return uniqBy([].concat(...arrays,prep))
  }

  function unionWith(...arrays){
    var comparator = arrays.pop();
    return uniqWith([].concat(...arrays,comparator))
  }

  function join(array, separator=','){
    return array.reduce((res,item)=> res + separator + item)
  }

  function last(array){
    return array[array.length-1]
  }

  function lastIndexOf(array, value, fromIndex=array.length-1){
    if (fromIndex < 0) fromIndex += array.length
    for (var i = fromIndex; i >= 0; i--) {
        if (array[i] === value) return i
    }
    return -1
  }

  function nth(array,n=0){
    if (n < 0){
      n += array.length
    }
    return array[n]
  }

  function pull(array, ...values){
    for (var i = 0; i < array.length; i++){
      if (values.includes(array[i])){
        array.splice(i,1)
      }
    }
    return array
  }

  function pullAll(array, values){
    for (var i = 0; i < array.length; i++){
      if (values.includes(array[i])){
        array.splice(i,1)
      }
    }
    return array    
  }

  function pullAllBy(array, values, predicate=_.identity){
    var prep = haigeno1.iteratee(predicate)
    var values1 = values.map(prep)
    for (var i = 0; i < array.length; i++){
      if (values1.includes(prep(array[i]))){
        array.splice(i,1)
      }
    }
    return array    
  }


  function pullAllWith(array, values, comparator){
    for (var i = 0; i < array.length; i++){
      for (var j of values)
      if (comparator(array[i],j)){
        array.splice(i,1)
      }
    }
    return array  
  }

  function reverse(array){
    function swap(array,i,j){
      var tmp = array[i]
      array[i] = array[j]
      array[j] = tmp
    }
    for (var i = 0; i < array.length / 2 - 1; i++){
      swap(array,i,array.length-1-i)
    }
    return array
  }

  function sortedIndex(array, value){
    if (array[0] >= value) {
        return 0
    }
    if (array[array.length - 1] < value) {
        return array.length
    }
    var left = 0,right = array.length - 1,mid = 0
    while (right > left){
      mid = Math.floor((left+right)/2)
      if (array[mid] < value){
        left = mid + 1
      } else if (array[mid] >= value) {
        right = mid
      }
    }
    return right
  }

  function sortedLastIndex(array, value){
    if (array[0] > value) {
        return 0
    }
    if (array[array.length - 1] <= value) {
        return array.length
    }
    var left = 0,right = array.length - 1,mid = -1
    while (left !== mid){
      mid = Math.floor((left+right)/2)
      if (array[mid] <= value){
        left = mid 
      } else if (array[mid] > value) {
        right = mid
      }
    }
    return right
  }

  function without(array, ...values){
    return array.filter(item => !values.includes(item))
  }










})()









