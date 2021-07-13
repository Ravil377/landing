const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плаг 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// подключите к проекту mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
                publicPath: ''
    },
    mode: 'development', // добавили режим разработчика
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    
        open: true // сайт будет открываться сам при запуске npm run dev
      },
    module: {
        rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
        },
        {
            test: /\.npm install sass-loader sass webpack --save-devcss$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: 'css-loader',
                options: { importLoaders: 1 }
            },
            'postcss-loader']
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
        }
    ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html' // путь к файлу index.html
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin() // подключение плагина для объединения файлов
    ]
}; 
