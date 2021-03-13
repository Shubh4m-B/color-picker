export default {
    Palette: {
        height: "100vh",
        overflow: "hidden"
    },
    PaletteColors: {
        height: "85vh"
    },
    PaletteFooter: {
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bold"
    },
    PaletteEmoji: {
        margin: "0 1rem"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: "1",
        background: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
        }
    }
};