import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from './SuperDoubleRange.module.css'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";



const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType =DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    valueRange:number[],
    setValue1: (value: number) => void,
    setValue2: (value: number) => void,
    // min, max, step, disable, ...
}
function valuetext(value:any) {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        valueRange, setValue1, setValue2, ...restProps
        // onChangeRange, value,onChange,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const classes = useStyles();
    // const [value, setValue] = React.useState([20, 37]);

    const handleChange = (e:any, newValue:any) => {
        setValue1(newValue[0])
        setValue2(newValue[1])
    };


        return (
            <div className={classes.root}>
                <Typography id="range-slider" gutterBottom>
                    Temperature range
                </Typography>
                <Slider
                    value={valueRange}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </div>
        );
    }


export default SuperDoubleRange;
