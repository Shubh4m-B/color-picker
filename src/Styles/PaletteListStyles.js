import sizes from './Sizes';
import bg from './bg-svg.svg'

export default {
    "@global": {
        ".fade-exit": {
            opacity: "1"
        },
        ".fade-exit-active": {
            opacity: "0",
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#1d125f",
        backgroundImage: `url(${bg})`,
        overflowY: "scroll"
    },
    container: {
        width: "60%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("lg")]: {
            width: "70%"
        },
        [sizes.down("xs")]: {
            width: "60%"
        }

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a": {
            color: "white",
            textDecoration: "none",
            fontSize: "1.2rem"
        }
    },
    heading: {
        fontSize: "2rem"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "1.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2,50%)",

        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1,100%)",

        }
    }
}