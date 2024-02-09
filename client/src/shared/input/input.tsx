import React, {FC, memo} from "react";
import classes from './input.module.scss'


interface IType {
    type?: string
    label?: string
    value?: any
    onChange?: (val: React.ChangeEvent<HTMLInputElement>) => void
    onChangeFile?: (val: any) => void
    error?: boolean
}

export const Input: FC<IType> = memo(({type, label, value, onChange, onChangeFile, error}) => {

    return (
        <>
            {
                type === 'file' ?
                    <label className={classes.label}>
                        <span>{label}</span>
                        <input type="file" onChange={e => onChangeFile && onChangeFile(e?.target?.files?.[0])}/>
                        {
                            error && <span className={'error'}>Файл не выбран</span>
                        }
                    </label>
                    :
                    <label className={classes.label}>
                        <span>{label}</span>
                        <input type={type ? type : 'text'} value={value} onChange={onChange}/>
                        {
                            error && <span className={'error'}>Поле обязательно к заполнению</span>
                        }
                    </label>
            }
        </>

    )
}) 
