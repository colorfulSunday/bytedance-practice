const { promisify } = require('util');

module.exports.clone = async (url, desc) => {
  // 下载git的插件
  const download = promisify(require('download-git-repo'));
  // const ora = require("ora");
  // const process = ora(`下载中...       ${url}`);
  // process.start();
  await download(url, desc);
  // process.succeed();
};
