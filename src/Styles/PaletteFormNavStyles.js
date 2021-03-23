import sizes from './Sizes';

const drawerWidth = 350;

const styles = (theme) => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px"

    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    navBtns: {
        width: "25%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        [sizes.down("xs")]: {
            marginRight: "0",
            width: "50%",
            padding: "0"
        }
    },
    link: {
        textDecoration: "none"
    },
    form: {
        display: "flex"
    }
});

export default styles;