import React, { Component } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteMetaForm from './PaletteMetaForm';

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
        width: "40%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    form: {
        display: "flex"
    }
});

export class PaletteFormNav extends Component {
    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
            return this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }
    render() {
        const { classes, open, handleDrawerOpen, handleSave, handleChange, name, palettes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    color="default"
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Create New Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <PaletteMetaForm name={name} handleSave={handleSave} handleChange={handleChange} classes={classes} palettes={palettes} />
                        <Link to="/">
                            <Button variant="contained" color="secondary">
                                Go Back
                            </Button>
                        </Link>
                    </div>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)
