import {MainLayout} from "../../layout/mainLayout"
import {useGetOrdersQuery, useUpdateOrderStatusMutation,} from "../../store/API/ordersApi";
import React, {useState} from "react";
import classes from './changeStatusOrderPage.module.scss'
import {NavLink} from "react-router-dom";
import {Button} from "../../shared/button/button";
import {Select} from "../../shared/select/select";

const variants = ['новый', 'готовиться', 'готово к выдаче', 'выдано в доставку', 'получен']
const ChangeStatusOrderPage = () => {
    const {data, isError, isLoading} = useGetOrdersQuery('')
    const [updateStatus] = useUpdateOrderStatusMutation()
    const [select, setSelect] = useState('')
    if (isError) {
        return <h2 className={'error'}>Произошла ошибка при загрузке данных. Попробуйте обновить страницу</h2>
    }
    const handlerSubmit = (id: number | string) => {
        updateStatus({
            id,
            body: {
                status: select,
                notifications: true
            }
        })
    }
    return (
        <MainLayout heading={'Изменение статуса заказа'}>
            <div className={classes.list}>
                {
                    data && data.map(item =>
                        <div className={classes.box} key={item?.id}>
                            <div className={classes.item}>
                                <div className={classes.title}>Заказ №{item?.id}</div>
                                <Select onChange={setSelect} dataOption={variants}/>
                            </div>
                            <div className={classes.inner}>
                                <NavLink className={classes.link} to={`/order/${item.id}`}>Перейти в заказ</NavLink>
                                <Button onClick={() => handlerSubmit(item?.id)}>Сохранить</Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </MainLayout>
    );
};
export default ChangeStatusOrderPage;
