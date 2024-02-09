import React, {FC, memo} from "react";
import classes from './form.module.scss'
import {Input} from "../../shared/input/input";
import {Button} from "../../shared/button/button";


interface IType {
    onClick: () => void
}

export const Form: FC<IType> = memo(({onClick}) => {
    return (
        <form className={classes.form}>
            {/*<Input label={'Название'}/>*/}
            {/*<Input label={'Описание'}/>*/}
            {/*<Input label={'Цена:'}/>*/}
            {/*<Button onClick={onClick}>Сохранить</Button>*/}
        </form>
    )
}) 
