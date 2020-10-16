module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-mixins'),
        require('precss'),
        require('postcss-nested'),
        require('postcss-css-variables'),
        require('postcss-preset-env'),
        require('postcss'),
        require('postcss-import'),
        require('postcss-js'),
        require('postcss-short'),
        require('postcss-syntax'),
    ],
    postcss: [
        require('lost')
    ]
}