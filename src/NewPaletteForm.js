import React from 'react';
import clsx from 'clsx';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorBox from './DraggableColorBox';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function NewPaletteForm(props) {
    const classes = useStyles();
    // const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [currentColor, setColor] = React.useState('teal');
    const [colors, setNewColor] = React.useState(props.palettes[0].colors);
    const [name, setName] = React.useState({
        colorName: "",
        paletteName: ""
    });
    const maxColors = 20;
    const paletteIsFull = colors.length >= maxColors;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const updateCurrentColor = (newColor) => {
        setColor(newColor.hex);
    };

    const addNewColor = () => {
        const newColor = {
            color: currentColor,
            name: name.colorName
        }
        setNewColor(oldColors => [...oldColors, newColor]);
        setName({ ...name, colorName: "" });
    }

    const handleChange = (evt) => {
        setName({ ...name, [evt.target.name]: evt.target.value });
    }

    const handleSave = () => {
        let newName = name.paletteName;
        const newPalette = {
            paletteName: newName,
            id: newName.toLowerCase().replace(/ /g, "-"),
            colors: colors,

        }
        props.savePalette(newPalette)
        props.history.push("/");
    }

    const removeColor = (colorName) => {
        const newColors = colors.filter(color => color.name !== colorName)
        setNewColor(newColors);
    }

    const clearColors = () => {
        setNewColor([]);
    }

    const addRandomColor = () => {
        const allColors = props.palettes.map(p => p.colors).flat();
        var random = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[random];
        setNewColor([...colors, randomColor])
    }

    return (
        <div className={classes.root}>
            <PaletteFormNav
                open={open}
                name={name}
                handleChange={handleChange}
                handleDrawerOpen={handleDrawerOpen}
                handleSave={handleSave}
                palettes={props.palettes}
            />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="h5" >
                    Design your palette
                </Typography>
                <div>
                    <Button variant="contained" color="secondary" onClick={clearColors}>Clear Palette</Button>
                    <Button variant="contained" color="primary" onClick={addRandomColor} disabled={paletteIsFull}>Random Color</Button>
                </div>
                <ColorPickerForm
                    colors={colors}
                    name={name}
                    currentColor={currentColor}
                    updateCurrentColor={updateCurrentColor}
                    addNewColor={addNewColor}
                    handleChange={handleChange}
                    paletteIsFull={paletteIsFull}
                />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {colors.map(color => (
                    <DraggableColorBox
                        key={color.name}
                        color={color.color}
                        name={color.name}
                        handleClick={() => removeColor(color.name)}
                    >
                    </DraggableColorBox>
                ))}
            </main>
        </div >
    );
}