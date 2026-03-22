import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            //  Custom breakpoint
            nav: "850px",
            ty: "300px",
            tx: "400px",
            tt: "630px",
            ta: "500px",
            to: "960px",
            da: "450px",
            hy: '805px',
        },
    },

    plugins: [forms],
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
