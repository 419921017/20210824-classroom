const path = require('path');

function resolvePath(dir) {
  return path.resolve(__dirname, '.', dir);
}

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolvePath('src/assets/common.scss')],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5, // 37.5rem => 375
            exclude: /node_modules/,
          }),
        ],
      },
    },
  },
};
