#!node
const program = require('commander');
// commander的灵感来自Ruby，它提供了用户命令行输入和参数解析的强大功能，可以帮助我们简化命令行开发。
program.version(require('../../package.json').version);

program
  .command('init <name>') // 这里创建的指令为 base init xxx
  .description('init project') // 这里是指令的描述
  .action(require('../lib/init')); // 这里执行的文件所在
program
  .command('refresh')
  .description('refresh routers...')
  .action(require('../lib/refresh'));
program.parse(process.argv);
