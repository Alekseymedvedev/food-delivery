
import React,{FC,memo}  from "react";
import classes from './linkAll.module.scss'
import {NavLink} from "react-router-dom";
import {ArrowIcon} from "../images/icons/arrowIcon";


interface IType{
    link: string
    text?: string
}

export const LinkAll: FC<IType> = memo(({text,link}) => {
    return (
        <NavLink to={link} className={classes.link}>
            <span>{text ? text : 'все'}</span>
            <span>
                <ArrowIcon/>
            </span>
        </NavLink>
    )
}) 
