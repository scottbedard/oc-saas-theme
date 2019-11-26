/* eslint-disable */

module.exports = {
    plugins: [
        // https://github.com/benface/tailwindcss-transforms
        require('tailwindcss-transforms')(),

        // https://github.com/benface/tailwindcss-transitions
        require('tailwindcss-transitions')(),
    ],
    theme: {
        fontFamily: {
            sans: [
                '"Noto Sans"', 
                '-apple-system', 
                'BlinkMacSystemFont', 
                '"Segoe UI"', 
                'Roboto', 
                '"Helvetica Neue"', 
                'Arial', 
                'sans-serif', 
                '"Apple Color Emoji"', 
                '"Segoe UI Emoji"', 
                '"Segoe UI Symbol"', 
                '"Noto Color Emoji"',
            ],
        },

        // https://tailwindcss.com/docs/top-right-bottom-left#customizing
        inset: {
            '0': '0',
            'full': '100%',
            'half': '50%',
        },

        // https://tailwindcss.com/docs/breakpoints/
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        }
    },
    variants: {
        margin: ['last', 'responsive'],
    },
};
