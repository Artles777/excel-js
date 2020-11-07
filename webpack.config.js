const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const {merge} = require('webpack-merge')
const MediaQueryPlugin = require('media-query-plugin')

const isProd = process.env.NODE_ENV == 'production'
const isDev = !isProd
const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-proposal-class-properties"]
            },
        },
    ]
    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
}

console.log('prod', isProd)
console.log('dev', isDev)

module.exports = merge([
    {
        context: path.resolve(__dirname, 'src'),
        entry: ['@babel/polyfill', './index.js'],
        output: {
            filename: filename('js'),
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@core': path.resolve(__dirname, 'src/core'),
            }
        },
        optimization: {
            minimizer: [new OptimizeCSSAssetsPlugin({})],
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            index: 'index.html',
            hot: isDev,
            open: true,
            port: 4000
        },
        devtool: isDev ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {importLoaders: 1},
                        },
                        MediaQueryPlugin.loader,
                        {
                            loader: 'sass-loader',
                        },
                    ],
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: jsLoaders()
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin({}),
            new MiniCssExtractPlugin({
                filename: filename('css'),
                chunkFilename: '[id].css',
            }),
            new HtmlPlugin({
                title: 'Excel JS',
                filename: 'index.html',
                favicon: path.resolve(__dirname, 'src/favicon.ico'),
                tags: {
                    headTags: `
                    <meta charset="UTF-8">
                    `,
                    bodyTags: `
                    <div id="app" class="container"></div>
                `
                },
                templateContent: ({htmlWebpackPlugin}) => {
                    return `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        ${htmlWebpackPlugin.options.tags.headTags}
                        <title>${htmlWebpackPlugin.options.title}</title>
                    </head>
                    <body>
                        ${htmlWebpackPlugin.options.tags.bodyTags}
                    </body>
                    </html>
                  `
                }
            })
        ]
    }
])