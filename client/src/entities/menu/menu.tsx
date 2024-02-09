
import React,{FC,memo}  from "react";
import classes from './menu.module.scss'


interface IType{
  children: React.ReactNode
}

export const Menu: FC<IType> = memo(({children}) => {
    return (
        <>
            {children}
        </>
    )
}) 
