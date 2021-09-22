// 图片切割 合并 js 处理不了
// 视频压缩 调通用底层硬件 POS 动态链接库

// 分配size个 字节 的内存空间
const buf1 = Buffer.alloc(10)
console.log(buf1);

const buf2 = Buffer.from('a')
console.log(buf2);//<Buffer 61>  十六进制的 ASCII 码

const buf3 = Buffer.from('中')
console.log(buf3);//<Buffer e4 b8 ad> 使用了3个 字节 。utf-8 编码

// Unicode 编码方案 utf-8（变长编码方案，1-6个字节，中文占3个字节）, utf-16, utf-32（定长编码方案） ,


const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString());