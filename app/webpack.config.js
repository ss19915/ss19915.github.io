const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const mode = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}
const distDirectoryPath = 'dist';
const distOutputFilename = 'index.js';
const htmlInputFilePaths = {
    [mode.DEVELOPMENT]: './src/index.html',
    [mode.PRODUCTION]: './src/index.html.prod',
};
const htmlOutputFilePath = 'index.html';
  
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
        new DotEnv(),
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
            path: path.resolve(__dirname, distDirectoryPath),
            filename: distOutputFilename,
        },
        module,
        plugins,
        optimization,
        devServer
    });
}