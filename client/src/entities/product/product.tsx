import React, {FC, memo} from 'react'
import classes from './product.module.scss'
import {IProduct} from "../../types/types";
import {FavoritesIcon} from "../../shared/images/icons/favoritesIcon";

interface IType {
    data: IProduct
}

export const Product: FC<IType> = memo(({data}) => {
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
            </div>
        </div>
    )
}) 
