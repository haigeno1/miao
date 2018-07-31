function MyMap(array){
  this.arr = []
  if (array.length){   
    this.arr[0] = {
      key: array[1][0],
      value: array[1][1]
    } 
  }
  for (var i = 1; i < array.length; i++){
    set(array[i][0],array[i][1])
  }
  this.size = arr.length
  this.has = function(key){
    for (var i = 0; i < arr.length; i++){
      if (key !== key && arr[i].key&& arr[i].key){
        return true
      } else if(arr[i].key === key){
        return true 
      } 
    }
    return false
  }
  this.getIndex = function(key){
    for (var i = 0; i < arr.length; i++){
      if (key !== key && arr[i].key&& arr[i].key){
        return i
      } else if(arr[i].key === key){
        return i 
      } 
    }
    return -1    
  }
  this.set(key,value) = function() {
    if (!values.has(key)){
      this.arr[arr.length] = {key:key,value:value}
    } else {
      this.arr[this.getIndex(value)].value = value
    }
    return arr.forEach(x => x.key + "=>" + x.value)
  }
  this.get = function(key){
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].key === key ) {
        return this.arr[i].value;
      }
    }
    return null;
  }
  this.keys = function(){
    return this.arr.forEach(k=>k.key)
  }
  this.values = function(){
    return this.arr.forEach(v=>v.value)
  }
}



// MyMap.prototype.get(key) 
// MyMap.prototype.has(key) 
// MyMap.prototype.delete(key) 
// MyMap.prototype.clear() 

// MyMap.prototype.keys() 
// MyMap.prototype.values() 
// MyMap.prototype.entries() 





function MySet(array){
  this.size = array.length
  for (var i = 0; i < array.length; i++){
    if (array[i] !== undefined){
      this[array[i]] = array[i]
    } else {
      continue
    }
  }
  this.add = function(value){
    if (array[i] !== undefined){
      this[array[i]] = array[i]
    } 
    return this
  }
  this.keys = function(){
    this.map(x=>x.key)
  }
}

// MySet.prototype.size = 
// MySet.prototype.add(value) = 
// MySet.prototype.delete(value) = 
// MySet.prototype.has(value) = 
// MySet.prototype.clear() = 

// MySet.prototype.keys() = 
// MySet.prototype.values() = 
// MySet.prototype.entries() = 
// MySet.prototype.forEach() = 


function MyArray(...values){
  for (var i = 0; i < values.length; i++){
    this[i] = values[i]
  }
  this.length = values.length
  this.push = function(value){
    this[this.length++] = value
    return value
  }
  this.pop = function(){
    this[this.length-- - 1] = value
    return value
  }
}


