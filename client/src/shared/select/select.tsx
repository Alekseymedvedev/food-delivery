
import React,{FC,memo}  from "react";
import classes from './select.module.scss'


interface IType{
    onChange: (e:any)=>void
    dataOption: number[] | string[]
}

export const Select: FC<IType> = memo(({onChange,dataOption}) => {
    return (
        <select className={classes.select} onChange={onChange}>
            {dataOption.map(year => (
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
    )
}) 
