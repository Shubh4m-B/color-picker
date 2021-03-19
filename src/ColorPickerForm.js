import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


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
        const { name, currentColor, updateCurrentColor, addNewColor, handleChange, paletteIsFull } = this.props;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={updateCurrentColor}
                />
                <ValidatorForm onSubmit={addNewColor}>
                    <TextValidator
                        value={name.colorName}
                        name="colorName"
                        onChange={handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["Color name is required", "Color name must be unique", "Color already used"]}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ background: paletteIsFull ? "grey" : currentColor }}
                        // onClick={addNewColor}
                        type="submit"
                        disabled={paletteIsFull}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default ColorPickerForm
