const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

module.exports = (env) => {

    const envPath = './.env';
    const envVars = dotenv.config({ path: envPath }).parsed;

    const envKeys = Object.keys(envVars).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(envVars[next]);
        return prev;
    }, {});

    return {
        entry: {
            pop: './src/pop.js'
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].bundle.js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpeg|gif|svg)$/i,
                    type: "asset/resource"
                },
                {
                    test: /\.wasm$/,
                    type: "asset/resource"
                }
            ],
        },
        experiments: {
            asyncWebAssembly: true, // Enable WebAssembly async loading
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/pop.html',
                filename: 'pop.html',
                chunks: ['pop'],
            }),
            new CopyWebpackPlugin({
                patterns: [
                  { from: 'manifest.json', to: 'manifest.json' },
                  { from: 'images', to: 'images'}
                ],
            }),
            new webpack.DefinePlugin(envKeys),
        ],
    }
    
};
