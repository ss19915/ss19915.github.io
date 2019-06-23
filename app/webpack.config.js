const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackDotEnv = require('dotenv-webpack');
const dotEnv = require('dotenv');

const ENV = dotEnv.config('.env').parsed;
const {
    WEBPACK_BUILD_PATH,
    APP_FILE,
    BUILD_FILE,
} = ENV;

const mode = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}
const  buildOutputPath = WEBPACK_BUILD_PATH ? WEBPACK_BUILD_PATH : 'dist';
const buildOutputFile = APP_FILE ? APP_FILE : 'index.js';
const htmlInputFilePaths = {
    [mode.DEVELOPMENT]: './src/index.html',
    [mode.PRODUCTION]: './src/index.html.prod',
};
const htmlOutputFilePath = BUILD_FILE ? BUILD_FILE : 'index.html';
  
const entryPoint = './src/index.js';

module.exports = (env, argv) => {
    const { mode } = argv;

    const module = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    };

    const plugins = [
        new CopyPlugin([
            { from: htmlInputFilePaths[mode], to: htmlOutputFilePath }
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new webpackDotEnv(),
    ];

    const devServer = {
        hot: true,
        port: 3000,
        historyApiFallback: {
            index: '/'
        }
    }

    let optimization = {};


    if(mode === mode.PRODUCTION){

        const productionOptimization = {
            mangleWasmImports: true,
            removeAvailableModules: true,
            removeEmptyChunks: true,
            removeEmptyChunks: true,
        };

        optimization = { ...optimization, ...productionOptimization };

    }
    return ({
        entry: entryPoint,
        output: {
            path: path.resolve(__dirname, buildOutputPath),
            filename: buildOutputFile,
        },
        module,
        plugins,
        optimization,
        devServer
    });
}