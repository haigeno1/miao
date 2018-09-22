//weekday.js
var names = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']

exports.number = function(name) {
  return names.indexOf(name)
}

exports.name = function(number) {
  return names[number]
}