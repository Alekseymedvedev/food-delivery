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
    borderAccent?: boolean;
}

export const SimpleTextField: FC<IType> = memo(({placeholder, type, label, value, onChange, error,borderAccent}) => {

        return (
            <>
                {type === "phone" ?
                    <label className={classes.label}>
                        {label && <span className={classes.text}>{label}</span>}
                        <ReactInputMask
                            className={borderAccent ? `${classes.input} ${classes.borderAccent}`:`${classes.input}`}
                            placeholder={placeholder}
                            mask={'+7 999 999 99 99'}
                            value={value}
                            onChange={onChange}/>
                        {error && <span className="error"></span>}
                    </label>
                    :
                    <label className={classes.label}>
                        {label && <span className={classes.text}>{label}</span>}
                        <input
                            className={borderAccent ? `${classes.input} ${classes.borderAccent}`:`${classes.input}`}
                            placeholder={placeholder}
                            type="text"
                            value={value}
                            onChange={onChange}/>
                        {error && <span className="error"></span>}
                    </label>
                }
            </>
        );
    }
);
