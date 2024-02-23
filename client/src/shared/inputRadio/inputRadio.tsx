import React, {FC, memo, useState} from "react";
import classes from "./inputRadio.module.scss";

interface IType {
    value?: string;
    onChange?: (val: any) => void;
    name?: string
    label?: string
}

export const InputRadio: FC<IType> = ({value, onChange, name, label}) => {
    const [checked,setChecked] = useState(false)
    console.log(checked)
    return (
        <label className={classes.label}>
            <span className={checked ? `${classes.icon} ${classes.active}` : classes.icon}></span>
            <input  className={classes.input} type="radio" name={name} value={value}
                   onChange={(e) => {
                       setChecked(e.target.checked)
                       console.log(e)
                       // onChange && onChange(e.target.value)
                   }}/>
            <span className={classes.text}>{label}</span>
        </label>
    );
};
