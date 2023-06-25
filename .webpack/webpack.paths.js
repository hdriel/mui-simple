const path = require("path");

module.exports.webpackPath = path.resolve(__dirname);
const { webpackPath } = module.exports;
module.exports.rootPath = path.resolve(__dirname, "..");
const { rootPath } = module.exports;

module.exports.srcPath = path.resolve(rootPath, "src");
const { srcPath } = module.exports;

module.exports.entryPath = path.resolve(srcPath, "index.js");

module.exports.publicPath = path.resolve(rootPath, "public");

module.exports.envConfigPath = path.resolve(rootPath, "env.config.js");

module.exports.tsConfigDevPath = path.resolve(rootPath, "tsconfig.dev.json");

module.exports.tsConfigProdPath = path.resolve(rootPath, "tsconfig.prod.json");
