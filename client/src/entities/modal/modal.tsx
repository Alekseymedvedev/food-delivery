import React, {FC, memo} from "react";
import classes from './modal.module.scss'
import {Button} from "../../shared/button/button";


interface IType {
    textModal?: string
    textBtn?: string
    onClick?: () => void
    error?: boolean
}

export const Modal: FC<IType> = memo(({textModal, textBtn, onClick, error}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.overlay}></div>
            <div className={error ? `${classes.modalContent} ${classes.error}` : classes.modalContent}>
                <div className={classes.text}>{textModal}</div>
                <Button onClick={onClick}>{textBtn}</Button>
            </div>
        </div>
    )
}) 
