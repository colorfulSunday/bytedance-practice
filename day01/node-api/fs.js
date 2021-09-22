const fs = require('fs')
// const fs = require('fs').promises

// 同步
const data= fs.readFileSync('./conf.js',{encoding :"utf8"})
console.log(data)//读取出来的是个buffer ,二进制文件 图片 视频 。node中不能处理二进制

// 使用toString 读取文本
console.log(data.toString('gbk')) //默认的编码为uft-8，data.toString('uft-8')


console.log(Buffer.isEncoding('utf-8'));

// 在nodejs中所有异步的回调函数的参数 风格一致，第一个参数一定是 err （错误优先的回调）
fs.readFile('./conf.js', (err,data) =>{
  // err如果是空 就没有问题
  if(err) throw err;
  console.log(data);
})

// 异步
// const 

// promise 风格 api 就可以使用async/await


(async () => {
  const fs = require('fs')
  const {promisify} = require('util') 
  const readFile = promisify(fs.readFile)
  const data = await readFile('./conf.js')
  console.log(data.toString())
})()