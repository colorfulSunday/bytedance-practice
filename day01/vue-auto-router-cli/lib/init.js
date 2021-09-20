const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const { clone } = require('./download');
const clear = require('clear');
const chalk = require('chalk');
const log = (content) => console.log(chalk.green(content));
const open = require('open');

const spawn = async (...args) => {
  //window 兼容性处理
  const options = args[args.length - 1];
  if (process.platform === 'win32') {
    options.shell = true;
  }

  const { spawn } = require('child_process');

  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', () => {
      resolve();
    });
  });
};

module.exports = async (name) => {
  clear();
  const data = await figlet('vue-auto-router-cli');
  log(data);

  log('创建项目' + name);
  // await clone("github:su37josephxia/vue-template", name);

  log('安装依赖');
  await spawn('npm', ['install'], { cwd: `./${name}` });
  log(
    chalk.green(`
安装完成
使用如下命令启动服务
================================
  cd ${name}
  npm run serve
================================
  `)
  );

  open('http://localhost:8080');
  await spawn('npm', ['run', 'serve'], { cwd: `./${name}` });
};
