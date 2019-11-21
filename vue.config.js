/* eslint-disable */
const CopyPlugin = require('copy-webpack-plugin');
const htmlMinifier = require('html-minifier');
const path = require('path');

const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
    configureWebpack() {
        return {
            plugins: [
                new CopyPlugin([
                    {
                        from: resolve('./src/foo.htm'),
                        to: resolve('./pages/foo.htm'),
                        transform(content) {
                            return htmlMinifier.minify(content.toString());
                        },
                    },
                ]),
            ],
        };
    },
};
