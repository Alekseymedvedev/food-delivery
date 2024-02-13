
import React,{FC,memo}  from "react";
import classes from './orders.module.scss'
import {Order} from "../../entities/order/order";
import {useGetOrdersQuery} from "../../store/API/ordersApi";


interface IType{
  children?: React.ReactNode
}

export const Orders: FC<IType> = memo(({children}) => {
    const {data,error,isLoading}= useGetOrdersQuery('')
    return (
        <div className={classes.orders}>
            {
                data && data?.map(item=>
                    <Order data={item}/>
                )
            }
        </div>
    )
}) 
