import React, { FC, memo } from "react";
import classes from "./product.module.scss";
import { IProduct } from "../../types/types";
import { FavoritesIcon } from "../../shared/images/icons/favoritesIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { decrement, addProductToCart } from "../../store/slice/productsSlice";
import {PlusIcon} from "../../shared/images/icons/plusIcon";
import { MinusIcon } from "../../shared/images/icons/minusIcon";

interface IType {
  data: IProduct;
  inCart?: boolean;
  editAdmin?: boolean;
  oneProduct?: boolean;
  count?: number;
}

export const Product: FC<IType> = memo(({ data, inCart, count, editAdmin,oneProduct }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={oneProduct ? (classes.product , classes.oneProduct) : classes.product}>
      <div className={classes.image}>
        <img
          src={process.env.REACT_APP_API_URL + data?.image}
          alt={data?.title}
        />
      </div>
      <div className={classes.box}>
        <div className={classes.title}>
          <span>{data?.title}</span>
    
          {
          (!editAdmin && !inCart) &&
            <span>
              <FavoritesIcon isActive={data?.favourites} />
            </span>
          }
          {
                inCart && 
                <div className={classes.buttonGroup}>
                  <button className={classes.button} onClick={() => dispatch(decrement(data))}>
                    <MinusIcon/>
                  </button>
                  <span>{data.count}</span>
                  <button className={classes.button} onClick={() => dispatch(addProductToCart(data))}>
                    <PlusIcon/>
                  </button>
                </div>
          }
        </div>
        <div className={classes.description}>{data?.description}</div>
        <div className={classes.price}>{data?.price}₽</div>
      </div>
    </div>
  );
});
