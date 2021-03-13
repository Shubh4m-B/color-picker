export default {
    NavBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "10vh"
    },

    NavBarLogo: {
        textTransform: "uppercase",
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "18px",
        backgroundColor: "#eceff1",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
        },

    },

    NavBarSlider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus ": {
            backgroundColor: "teal",
            outline: "none",
            border: "2px solid teal",
            boxShadow: "none"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "2rem"
    }
}