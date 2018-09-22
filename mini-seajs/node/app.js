var fs = require("fs")
function readFile(path){
  return fs.readFileSync(path).toString()
}
var cache = Object.create(null)
global.myRequire = function(name){
  if (name in cache){
    return cache[name].exports
  }
  var moduleSource = readFile(name)
  var exports ={}
  var module = {
    exports:exports
  }
  var moduleFunction = new Function(exports,module,moduleSource)
  moduleFunction(exports,module) 
  return module.exports
}


var weekDay = myRequire('./week-day.js')
var add = myRequire('./add.js')


console.log(weekDay.name(add(1, 2)))