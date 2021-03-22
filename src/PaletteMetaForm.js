import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css"

export default function PaletteFormMeta(props) {
    const [stage, setStage] = React.useState("");

    const handleClickOpen = () => {
        setStage("form");
    };

    const handleStageChange = () => {
        setStage("emoji")
    }

    const savePalette = (emoji) => {
        const newPalette = { paletteName: props.name.paletteName, emoji: emoji.native }
        props.handleSave(newPalette);
    }

    const handleClose = () => {
        setStage("");
    };

    const { classes, name, handleChange } = props;
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Save Palette
            </Button>
            <Dialog open={stage === "emoji"} onClose={handleClose}>
                <DialogTitle id="form-dialog-title">Pick a palette emoji</DialogTitle>
                <Picker onSelect={savePalette} title="Pick a palette emoji" />
            </Dialog>
            <Dialog open={stage === "form"} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a palette name</DialogTitle>
                <ValidatorForm onSubmit={handleStageChange} className={classes.form}>
                    <DialogContent>
                        <DialogContentText>Please enter a name for your new palette. Make sure it is unique.</DialogContentText>

                        <TextValidator
                            value={name.paletteName}
                            name="paletteName"
                            label="Palette Name"
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Palette name is required", "Palette Name Already used"]}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary" variant="contained">
                                Save Palette
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}