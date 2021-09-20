(async () => {
  const http = require('http');
  const fs = require('fs');
  const { promisify } = require('util');
  const readFile = promisify(fs.readFile);

  http
    .createServer(async (request, response) => {
      const { url, method } = request;
      if (url === '/' && method === 'GET') {
        try {
          const data = await readFile('./node-api/index.html');
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          response.end(data);
        } catch (err) {
          response.statusCode = 500;
          response.setHeader('Content-Type', 'text/plain;charset=utf-8');
          response.end('500 服务器内部错误');
        }
      }
    })
    .listen(3000, () => {
      console.log('服务器启动成功，端口 3000');
    });
})();
