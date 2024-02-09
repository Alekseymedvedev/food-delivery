import React, {FC, memo} from "react";
import classes from './products.module.scss'
import {IProduct} from "../../types/types";
import {Product} from "../../entities/product/product";
import {NavLink} from "react-router-dom";


interface IType {
    data: IProduct[]
}

export const Products: FC<IType> = memo(({data}) => {
    return (
        <div>
            {
                data?.map(item =>
                    <NavLink key={item.id} to={`/${item.id}`}>
                        <Product data={item}/>
                    </NavLink>
                )
            }
        </div>
    )
}) 
