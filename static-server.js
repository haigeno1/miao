const http = require("http")
const fs = require("fs")
const url = require("url")
const path = require("path")

const port = 8088
const base = "/Users/zl/Desktop/miao"
const server = http.createServer()
server.on("request",(req,res) => {
  console.log(req.method,req.url)
  var urlObj = url.parse(req.url)
  var finalPath = path.join(base,urlObj.pathname)
  console.log(finalPath)
  fs.stat(finalPath,(err,status) => {
    if (err){
      res.writeHead(404)
      res.end("404lalala")
    } else {
      if (status.isDirectory()){
        finalPath += "index.html"
      }
      fs.readFile(finalPath,(err,content) => {
        if(err){
          finalPath = base + urlObj.pathname
          console.log(finalPath)
          fs.readdir(finalPath,(err,list) => {
            console.log(list)
            var listRes = list.map(it => {
              var isDir = fs.stat(path.join(base,it)).isDirectory ? "/" : ""
              return `
              <div><a href = "./${it}${isDir}>${it}${isDir}"</a></div>
              `
            }).join("")
            res.setHeader("Content-Type","text/html;charset=UTF-8")
            res.end(listRes)
          })
        } else {
          res.setHeader("Content-Type","text/plain;charset=UTF-8")
          res.end(content)
        }
      })
    }
  })
})

server.listen(port,() => {
  console.log("listening on port" + port)
})