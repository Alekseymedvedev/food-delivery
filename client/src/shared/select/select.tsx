
import React,{FC,memo}  from "react";
import classes from './select.module.scss'


interface IType{
    onChange: (e:any)=>void
    dataOption: number[] | string[]
}

export const Select: FC<IType> = memo(({onChange,dataOption}) => {
    return (
        <select className={classes.select} onChange={(e)=>onChange(e.target.value)}>
            {dataOption.map((item,index) => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
    )
}) 
