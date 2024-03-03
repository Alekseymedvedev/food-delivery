
import React,{FC,memo}  from "react";
import classes from './orders.module.scss'
import {Order} from "../../entities/order/order";
import {useGetAllOrdersUserQuery} from "../../store/API/ordersApi";
import {useAppSelector} from "../../hooks/useRedux";


interface IType{
  children?: React.ReactNode
}

export const Orders: FC<IType> = memo(({children}) => {
    const {user} = useAppSelector((state) => state.userReducer);
    const {data,error,isLoading}= useGetAllOrdersUserQuery(`${user?.id}`)
    return (
        <div className={classes.orders}>

            {
                data?.length ? data?.map(item=>
                     <Order key={item.id} data={item}/>

                ):
                    <div>Заказов не найдено</div>

            }
        </div>
    )
}) 
