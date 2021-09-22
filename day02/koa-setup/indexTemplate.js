import fs from "fs";
import ejs from "ejs";
import prettier from "prettier";

export function createIndexTemplate(config) {
  const template = fs.readFileSync("./template/index.ejs", "utf-8");

  const code = ejs.render(template, {
    router: config.middleware.router,
    static: config.middleware.static,
    port: config.port,
  });
  return prettier.format(code, {
    parser: "babel",
  });
}



// const Koa = require("koa");
// const Router = require("koa-router");
// const serve = require("koa-static");
// const views require("koa-views");
// const koaBody require("koa-body")const app new Koa o;