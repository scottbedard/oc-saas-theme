/* eslint-disable */
const production = process.env.NODE_ENV === 'production';

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.htm',
        './src/**/*.vue',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...production ? [purgecss] : [],
    ],
};
