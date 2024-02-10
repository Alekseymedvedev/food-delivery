
import React,{FC,memo}  from "react";
import classes from './pludAndMinusBtns.module.scss'


interface IType{
  children?: React.ReactNode
}

export const PludAndMinusBtns: FC<IType> = memo(({children}) => {
    return (
        <div className={classes.pludAndMinusBtns}>
            {children}
        </div>
    )
}) 
