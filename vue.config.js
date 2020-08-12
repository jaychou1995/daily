const path = require('path')
const myTheme = path.resolve(__dirname, 'src/style/index.less')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          // 'button-primary-background-color': '#4b76f6',
          // 'button-primary-border-color': '#4b76f6'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${myTheme}";`
        }
      }
    }
  }
}
