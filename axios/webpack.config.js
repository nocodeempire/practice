/**
 * Created by Administrator on 2017/9/11.
 */
const path=require("path");
const htmlWebPackPlugin=require('html-webpack-plugin');
module.exports={
  entry:{
    main:"./src/main.js"
  },
  output:{
    path:path.join(__dirname,"dist"),
    filename:'build.js'
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader:"style-loader!css-loader!autoprefixer-loader"
      },
      {
        test:/\.less$/,
        loader:"style-loader!css-loader!autoprefixer-loader!less-loader"
      },
      {
        test:/\.(jpg|svg|jepg|png|ttf)$/,
        loader:"url-loader"
      }
      //把es6转换成浏览器能识别的es5
      , {
        test:/\.js$/,
        loader:"babel-loader",
        //去除node_modules里面的js
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        loader:"vue-loader"
      }
    ]
  },
  plugins:[
    new htmlWebPackPlugin({
      template:'./src/index.html'
    })
  ]
}