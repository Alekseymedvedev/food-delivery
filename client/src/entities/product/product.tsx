import React, {FC, memo} from 'react'
import classes from './product.module.scss'
import {IProduct} from "../../types/types";
import {FavoritesIcon} from "../../shared/images/icons/favoritesIcon";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {decrement, increment} from "../../store/slice/productsSlice";

interface IType {
    data: IProduct
    inCart?:boolean
    count?:number
}

export const Product: FC<IType> = memo(({data,inCart,count}) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <img src={process.env.REACT_APP_API_URL + data?.image} alt={data?.title}/>
            <div className={classes.box}>
                <div className={classes.title}>
                    <span>{data?.title}</span>
                    <span>
                    <FavoritesIcon isActive={data?.favourites}/>
                </span>
                </div>
                <div className={classes.description}>{data?.description}</div>
                <div className={classes.price}>{data?.price}</div>
                {
                    inCart &&
                    <div className={classes}>
                        <button onClick={()=>dispatch(decrement(data))}>minus</button>
                        <h2>{count}</h2>
                        <button onClick={()=>dispatch(increment(data))}>plus</button>
                    </div>
                }


            </div>
        </div>
    )
}) 
