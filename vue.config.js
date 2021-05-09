const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8088
  },
  pages: {
    index: {
      entry: 'src/render/main.js'
    }
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src/render'))
      .set('api', resolve('src/render/api'))
      .set('view', resolve('src/render/view'))
      .set('assets', resolve('src/render/assets'))
      .set('components', resolve('src/render/components'))
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        files: [
          {
            filter: ['**/*']
          }
        ],
        extraFiles: ['./extensions/'],
        asar: false
      },
      mainProcessFile: 'src/main/main.js',
      mainProcessWatch: ['src/main'],
      // [1.0.0-rc.4+] Provide a list of arguments that Electron will be launched with during "electron:serve",
      // which can be accessed from the main process (src/background.js).
      // Note that it is ignored when --debug flag is used with "electron:serve", as you must launch Electron yourself
      mainProcessArgs: []
    }
  }
}
