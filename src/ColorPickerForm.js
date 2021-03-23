import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './Styles/ColorPickerFormStyles'

export class ColorPickerForm extends Component {
    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
            return this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            );
        });
        ValidatorForm.addValidationRule("isColorUnique", value => {
            return this.props.colors.every(
                ({ color }) => color !== this.props.currentColor
            );
        });
    }
    render() {
        const { name, currentColor, updateCurrentColor, addNewColor, handleChange, paletteIsFull, classes } = this.props;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={addNewColor}>
                    <TextValidator
                        label="Color Name"
                        variant="filled"
                        margin="normal"
                        value={name.colorName}
                        name="colorName"
                        onChange={handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Color name is required", "Color name must be unique", "Color already used"]}
                        className={classes.colorNameInput}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ background: paletteIsFull ? "grey" : currentColor }}
                        // onClick={addNewColor}
                        type="submit"
                        disabled={paletteIsFull}
                        className={classes.addColor}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)
