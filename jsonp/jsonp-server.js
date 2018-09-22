var http = require("http")
var querystring  = require("querystring")
var port = 8099

var server = http.createServer()
var users = [
  "zhangsan",
  "lisi",
  "wangwu",
  "zhaoliu"
]

//       /getUsers?query=zhang&callback=foo
server.on("request",(req,res)=>{
  if (req.url.startWith("/getUser")){
    var pos = req.url.indexOf("?")
    var query = req.url.slice(pos+1)
    var queryObject = querystring.parse(query)
    var result = users.filter(it => it.includes(queryObject.query))

    if (queryObject.callback){
      res.setHeader("Content-Type","application/javascript")
      res.write(queryObject.callback + "(" + JSON.stringify(result) + ")")
      res.end()
    } else {
      res.setHeader("Content-Type","application/json")
      res.write(JSON.stringify(result))
      res.end()
    }
  }
})

server.listen(port,() => {
  console.log(port + "listening")
})