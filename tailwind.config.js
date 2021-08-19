module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        height: {
            hero: `calc(100vh - 8rem)`,
            full: "100%",
            screen: "100vh",
            thumb: "20rem",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "rgb(0,0,0)",
            white: "white",
            black_2: "rgba(10,10,10,1)",
            black_trans: "rgba(0,0,0,0.5)",
            gray: "rgba(255,255,255,0.1)",
        },
    },
};
