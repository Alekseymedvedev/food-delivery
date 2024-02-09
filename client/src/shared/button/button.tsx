
import React,{FC,memo}  from "react";
import classes from './button.module.scss'


interface IType{
  children: React.ReactNode
    onClick?: ()=>void
}

export const Button: FC<IType> = memo(({children,onClick}) => {
    return (
        <div className={classes.button} onClick={onClick}>
            {children}
        </div>
    )
}) 
