
import React,{FC,memo}  from "react";
import classes from './select.module.scss'


interface IType{
    onChange: (e:any)=>void
    dataOption: number[] | string[]
}

export const Select: FC<IType> = memo(({onChange,dataOption}) => {
    return (
        <select className={classes.select} onChange={onChange}>
            {dataOption.map((item,index) => (
                <option key={item} value={index}>{item}</option>
            ))}
        </select>
    )
}) 
