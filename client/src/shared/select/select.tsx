
import React,{FC,memo}  from "react";
import classes from './select.module.scss'


interface IType{
    onChange: (e:any)=>void
    dataOption: number[] | string[]
    defaultValue?: string
}

export const Select: FC<IType> = memo(({onChange,dataOption,defaultValue}) => {
    return (
        <select className={classes.select} onChange={(e)=>onChange(e.target.value)}>
            {dataOption.map((item,index) => (
                <option key={item} value={item} selected={item === defaultValue}>{item}</option>
            ))}
        </select>
    )
}) 
