const ReactRefreshTypeScript = require("react-refresh-typescript"); // install
const {
  assetsImagesPath,
  srcPath,
  tsConfigDevPath,
  tsConfigProdPath,
} = require("./webpack.paths");

module.exports.mjsRule = {
  test: /\.m?js$/,
  resolve: { fullySpecified: false },
};

module.exports.tsxRuleDev = {
  test: /\.[jt]sx?$/,
  exclude: [/node_modules/],
  use: [
    { loader: "babel-loader" },
    {
      loader: require.resolve("ts-loader"),
      options: {
        configFile: tsConfigDevPath,
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [ReactRefreshTypeScript()].filter(Boolean),
        }),
      },
    },
  ],
};

module.exports.tsxRuleProd = {
  test: /\.[jt]sx?$/,
  exclude: [/node_modules/],
  use: [
    { loader: "babel-loader" },
    {
      loader: require.resolve("ts-loader"),
      options: {
        configFile: tsConfigProdPath,
        transpileOnly: true,
      },
    },
  ],
};

module.exports.jsxRefreshRule = {
  test: /\.[tj]sx?$/,
  exclude: [/node_modules/],
  use: [
    {
      loader: "babel-loader",
      options: {
        plugins: [require.resolve("react-refresh/babel")].filter(Boolean),
      },
    },
  ],
};

module.exports.styleRule = {
  test: /\.(le|sc|c)ss$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "sass-loader" },
    { loader: "less-loader" },
  ],
  include: [srcPath],
};

module.exports.svgRule = {
  test: /\.svg$/,
  include: [assetsImagesPath],
  type: "asset/source",
  exclude: [/node_modules/],
};

module.exports.fontsRule = {
  test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  type: "asset",
  generator: { filename: "fonts/[name].[ext]" },
  exclude: [/node_modules/],
};

module.exports.hbsRule = {
  test: /\.hbs$/,
  use: [{ loader: "handlebars-loader" }],
  exclude: [/node_modules/],
};

module.exports.HTMLRule = {
  test: /\.html$/i,
  use: [{ loader: "html-loader" }],
  exclude: [/node_modules/],
};
