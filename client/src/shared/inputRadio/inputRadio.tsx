import React, {FC, memo, useState} from "react";
import classes from "./inputRadio.module.scss";

interface IType {
    value?: string;
    onChange?: (val: string) => void;
    name?: string
    label?: string
}

export const InputRadio: FC<IType> = memo(({value, onChange, name, label}) => {
    return (
        <label className={classes.label}>
            <span className={classes.icon}></span>
            <input className={classes.input} type="radio" name={name} value={value}
                   onChange={(e) => onChange && onChange(e.target.value)}/>
            <span className={classes.text}>{label}</span>
        </label>
    );
});
