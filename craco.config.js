const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  // less
  plugins: [
    {
      // 配置支持less
      plugin: CracoLessPlugin
    }
  ], 
  // webpack
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
    },
  },
}