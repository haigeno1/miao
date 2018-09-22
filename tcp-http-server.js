var net = require('net')
var fs = require('fs')
var server = net.createServer()
const port = 80


var msgs = ['foo','bar']

server.on('connection', conn => {

  conn.on('data', d => {
    var d = d.toString()
    console.log('---------')
    console.log(d)
    console.log('---------')
    var lines = d.split('\r\n')
    var firstLine = lines.shift()
    var [method, path] = firstLine.split(' ')

    console.log(method, path)


    if (path === '/msg.html') {

      if (method === 'POST') {
        var lastLine = lines.pop()
        msgs.push(lastLine.split('=')[1])
      }

      conn.write('HTTP/1.1 200 OK\r\n')
      conn.write('\r\n')

      msgs.forEach(msg => {
        conn.write(`<div>${msg}</div>`)
      })

      conn.end()


    } else {

      try {
        var fileContent = fs.readFileSync('.' + path)
      } catch(e) {
        // console.log(e)
        fileContent = 'error'
      }

      conn.write(`HTTP/1.1 200 OK\r\n`)
      // conn.write(`Content-Type: text/html\r\n`)
      conn.write(`\r\n`)
      conn.write(fileContent)
      conn.end()
    }



  })

})


server.listen(port, () => {
  console.log('server listening on port', port)
})