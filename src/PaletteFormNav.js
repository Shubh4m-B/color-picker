import React, { Component } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export class PaletteFormNav extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
            return this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    }
    render() {
        const { classes, open, handleDrawerOpen, handleSave, handleChange, name } = this.props;
        return (
            <div>
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
                            New Palette Form
                    </Typography>
                        <ValidatorForm onSubmit={handleSave}>
                            <TextValidator
                                value={name.paletteName}
                                name="paletteName"
                                label="Palette Name"
                                onChange={handleChange}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Palette name is required", "Palette Name Already used"]}
                            />
                            <Button variant="contained" color="primary" type="submit">
                                Save Palette
                        </Button>
                            <Link to="/">
                                <Button variant="contained" color="secondary">
                                    Go Back
                            </Button>
                            </Link>
                        </ValidatorForm>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default PaletteFormNav
