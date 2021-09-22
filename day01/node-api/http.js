const http = require('http')
http.createServer((request,response) => {
  console.log('a request', getPrototypeChain(request)) // request 继承自 Readable -> Stream -> EventEmitter

  //  TODO:
  response.end('hi http') //response 继承自 Stream 的end 。继承链 OutgoingMessage -> Stream ->EventEmitter
}).listen(8080, () =>{
  console.log('Server at 8080')
})


function getPrototypeChain(obj){
  const protoChain = []
  while(obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  return protoChain
}