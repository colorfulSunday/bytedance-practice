// 1 读文件列表
// 2 拼代码，一般使用模板渲染的方式
const fs = require('fs');
const handlebars = require('handlebars');
//自动添加路由
const chalk = require('chalk');
module.exports = async () => {
  // 获取列表
  const list = fs
    .readdirSync('./src/views')
    .filter((v) => v !== 'Home.vue')
    .map((v) => ({
      name: v.replace('.vue', '').toLowerCase(),
      file: v,
    }));

  // 生成路由定义
  compile({ list }, './src/router.js', './template/router.js.hbs');
  //生成菜单
  compile({ list }, './src/App.vue', './template/App.vue.hbs');

  /**
   *
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板路径，在template路径下
   */
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      // 编译模板
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      console.log(chalk.green(`${filePath} 创建成功`));
    }
  }
};
