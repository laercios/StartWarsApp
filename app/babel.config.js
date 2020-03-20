const fs = require('fs-extra');

module.exports = {
  plugins: ['@babel/plugin-syntax-dynamic-import'],
  env: {
    test: {
      plugins: ['dynamic-import-node'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
};
