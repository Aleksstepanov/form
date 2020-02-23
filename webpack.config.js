const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const isProv = !isDev
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
    context : path.resolve(__dirname, 'src'),
    entry : {
        app : './index.js'
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist'),
        publicPath : '/dist'
    },
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        port : 4200,
        hot : isDev,
        index : 'colorandtype.html',
        //watchContentBase : true,
        openPage : 'colorandtype.html',
        //publicPath: 'http://localhost:4200/assets/',
        watchOptions: {
            poll: true
          }    
    },
    resolve : {
        alias : {
            '@blocks' : path.resolve(__dirname, 'src/blocks')
        }
    },
    optimization : {
        splitChunks : {
            chunks : 'all'
        }
    },
    module : {
        rules: [
            {//scss
                test : /\.scss$/,
                use : [
                    'style-loader',
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options : {
                            hmr : isDev,
                            reloadAll : true
                        }
                    },
                    {
                        loader : 'css-loader'
                    },
                    {
                        loader : 'sass-loader'
                    }

                ]
            },
            {//css
                test : /\.css$/,
                use : [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader'
                    },
                    

                ]
            },
            {//image
                test : /\.(gif|img|png|jpg|jpeg|svg)$/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]'
                }
            },
            {//fonts
                test : /\.(eot|ttf|woff|woff2)/,
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]'
                }
            },
            {//pug
                test : /\.pug$/,
                loader : 'pug-loader'
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : '[name].css'
        }),
        new HtmlWebpackPlugin(
            {
            hash : false,
            template : './page/colorandtype/colorandtype.pug',
            filename : 'colorandtype.html',
            minify : {
                collapseWhitespace : isProv
            },
            hmr : true,
            reloadAll : true
            }
        ),
        new CopyWebpackPlugin(
            [
                {
                    from : path.join(__dirname, 'src', 'assets', 'fonts'),
                    to : path.join(__dirname, 'dist', 'assets', 'fonts')
                },
                {
                    from : path.join(__dirname, 'src', 'blocks', 'logo', 'img'),
                    to : path.join(__dirname, 'dist', 'img')
                }
            ]
        ),
        //new CleanWebpackPlugin (),

        

    ]
}