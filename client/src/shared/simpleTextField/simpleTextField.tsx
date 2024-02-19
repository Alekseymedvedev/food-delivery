import React, {FC, memo} from "react";
import classes from "./simpleTextField.module.scss";
import ReactInputMask from "react-input-mask";

interface IType {
    type?: string;
    label?: string;
    value?: any;
    placeholder?: string;
    onChange?: (val: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

export const SimpleTextField: FC<IType> = memo(
    ({placeholder, type, label, value, onChange, error}) => {

        return (
            <>
                {type === "phone" ?
                    <label className={classes.label}>
                        {label && <span className={classes.text}>{label}</span>}
                        <ReactInputMask
                            placeholder={'placeholder'}
                            mask={'+7 999 999 99 99'}
                            value={value}
                            onChange={onChange}/>
                        {error && <span className="error"></span>}
                    </label>
                    :
                    <label className={classes.label}>
                        {label && <span className={classes.text}>{label}</span>}
                        <input className={classes.input} type="text" value={value} onChange={onChange}/>
                        {error && <span className="error"></span>}
                    </label>
                }
            </>
        );
    }
);
