// esm
import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js";
import { createPackageTemplate } from "./packageJsonTemplate.js";
import { question } from "./question/index.js";
import { createConfig } from "./config.js";
import execa from "execa";

const answer = await question();
const inputConfig = createConfig(answer);


// 1.创建了文件夹 
fs.mkdirSync(getRootPath())

// 2.创建了 index.js
fs.writeFileSync(getRootPath()+"/index.js",createIndexTemplate(inputConfig));

// 3.创建了 package.json
fs.writeFileSync(getRootPath()+"/package.json", createPackageTemplate(inputConfig))

// 4. 安装依赖
execa("npm", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});


function getRootPath(){
  return "./hi";
}