/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#080101", // main theme
                secondary: "#c3a6ac", //text
                tertiary: "#301010",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",

                //ctnPrimaryLight: "#2e384d",
                //ctnSecondaryLight: "#4b42a7",

                ctnPrimaryDark: "#f3f3f3", //popup text

            },
            boxShadow: {
                card: "0px 35px 120px -15pxrgb(178, 16, 16)",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hello-pattern": "url('/src/assets/hellobg.png')",
            },
        },
    },
    plugins: [],
};
