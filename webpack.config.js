var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var PLATFORM = 'ios';
var outputPath = path.resolve(__dirname, '../iOS/__Platform_Name/__Name/www');
if(process.env.PLATFORM === 'material') {
  PLATFORM = 'material';
  outputPath = path.resolve(__dirname, '../android/__Platform_Name/app/src/main/assets/www');
}
console.log('outputPath: '+outputPath+'\n'+'PLATFORM: '+PLATFORM);

var views = [
  // Intial Application Views
  'landingPage'                 // Intial App View
];

module.exports = {
  entry: {index: './src/index.js'},
  output: {
    path: outputPath,
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [{
      test: /\.less/,
      use: [ 'style-loader', 'css-loader', 'resolve-url-loader', 'less-loader' ]
    }, {
      test: /\.mustache$/, loader: 'mustache-loader'
    }, {
      test: /\.(gif|png|svg|woff2?|eot|ttf)$/, loader: 'file-loader?'
    }]
  },
  plugins: [
    // new webpack.ProvidePlugin({ jQuery: 'jquery' }),
    new webpack.DefinePlugin({
      PLATFORM: JSON.stringify(PLATFORM)
    }),
    new HtmlWebpackPlugin({template: 'src/template.html', filename: 'index.html', chunks: ['index'], inject: false})
  ].concat(views.map(function(view) {
    if(PLATFORM === 'material') {
      return new HtmlWebpackPlugin({template: 'src/material_views/'+view+'.html', filename: view+'.html', inject: false});
    } else {
      return new HtmlWebpackPlugin({template: 'src/ios_views/'+view+'.html', filename: view+'.html', inject: false});
    }
  }))
};
