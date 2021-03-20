import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function PaletteFormMeta(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // React.useEffect = () => {
    //     ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
    //         return props.palettes.every(
    //             ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
    //         );
    //     });
    // }

    const { classes, name, handleChange, handleSave } = props;
    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Save Palette
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
                <DialogContent>
                    <DialogContentText>Add a suitable name for the palette, the name must be unique</DialogContentText>
                    <ValidatorForm onSubmit={handleSave} className={classes.form}>
                        <TextValidator
                            value={name.paletteName}
                            name="paletteName"
                            label="Palette Name"
                            onChange={handleChange}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Palette name is required", "Palette Name Already used"]}
                        />
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </DialogContent>
            </Dialog>
        </div>
    );
}