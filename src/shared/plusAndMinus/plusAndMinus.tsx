
import React,{FC,memo}  from "react";
import classes from './plusAndMinus.module.scss'
import {addProductToCart, decrement} from "../../store/slice/productsSlice";
import {MinusIcon} from "../images/icons/minusIcon";
import {PlusIcon} from "../images/icons/plusIcon";
import {IProduct} from "../../types/types";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";


interface IType{
  data: IProduct
}

export const PlusAndMinus: FC<IType> = memo(({data}) => {
    const dispatch = useAppDispatch();
    const {} = useAppSelector(state => state.productReducer)
    return (
        <div className={classes.buttonGroup}>
            <button className={classes.button} onClick={() => dispatch(decrement(data))}>
                <MinusIcon/>
            </button>
            <span>{data.count}</span>
            <button className={classes.button} onClick={() => dispatch(addProductToCart(data))}>
                <PlusIcon/>
            </button>
        </div>
    )
}) 
