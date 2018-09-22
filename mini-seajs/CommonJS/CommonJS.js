var fs = require("fs")
function readFile(path){
  return fs.readFileSync(path).toString()
}
var cache = Object.create(null)
function myRequire(name){
  if (name in cache){
    return cache[name]
  }
  var moduleSource = readFile(name)
  var moduleFunction = new Function("exports,module",moduleSource)
  var exports = {}
  var module = {
    exports:exports
  }
  moduleFunction(exports,module)
  cache[name] = module.exports
  return cache[name]
}

var weekday = myRequire("weekday.js")
var add = myRequire("add.js")
weekday.name(add(1,2))

//weekday.js
var names = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']

exports.number = function(name) {
  return names.indexOf(name)
}

exports.name = function(number) {
  return names[number]
}

//add.js
module.exports = (a, b) => a + b