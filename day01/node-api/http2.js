const fs  = require('fs');
const http = require('http')
http.createServer((request,response) => {
  // console.log('a request', getPrototypeChain(request)) // request 继承自 Readable -> Stream -> EventEmitter

  const {url, method, headers} = request;
  if(url === '/' && method === 'GET'){
    fs.readFile('index.html', (err, data) => {// 这里只能是异步的，使用同步阻塞cup 消耗服务器资源。在这个短时间内内存还是占用了，如果并发搞，内存占用可能大。html文件不显著，图片文件就比较明显了
      if(err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end('服务器内部错误')
        return
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  }
  else if(url === '/users' && method === 'GET'){
    response.writeHead(200,{'Content-Type':'application/json'}) //返回json数据
    response.end(JSON.stringify({name:'Tom'}))
  }
  //Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8
  else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){// 处理图片 ，request 中的 accept 字段 表名 我接收什么（告诉了需要）
    // 不使用fs.readFile读取图片 是这样将文件全部读取到内存中如果图片很大，内存占用大
    // stream
  }
  else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('资源不存在')
  }
}).listen(8080, () =>{
  console.log('Server at 8080')
})

