const path = require('path')
const { VueLoaderPlugin }  = require('vue-loader') // 这个的作用是如果碰到.vue文件时，用我们在module中定义的模块解析规则平移给vue-loader 以此来解析vue文件中的script，template，css
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '/dist'), // 这里需要时绝对路径
    filename: 'main.bundle.js'
  },
  module: {
    rules: [// rules 里面定义模块的打包规则
      {// loader 的作用就是进行代码转换的
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s[ca]ss$/,
        use: ['style-loader', 'css-loader', 'scss-loader']
      },
      {
        test: /\.m?js$/,
        use: [
          {
            loader: 'bable-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset/resource'
      }
    ]
  },
  // 插件的功能就是增强webpack的功能
  plugins: [
    new VueLoaderPlugin()
  ]
}