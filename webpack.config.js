const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: './index.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.[hash].css"
        }),
        new HtmlPlugin({
            title: "Excel JS",
            filename: "index.[contenthash].html",
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
                  `;
            }
        })
    ]
}