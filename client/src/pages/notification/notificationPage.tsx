import classes from './notificationPage.module.scss'
import {MainLayout} from "../../layout/mainLayout"
import {useAppSelector} from "../../hooks/useRedux";
import {useGetAllOrdersUserQuery, useUpdateOrderMutation} from "../../store/API/ordersApi";
import {useEffect} from "react";


const NotificationPage = () => {
    const {user} = useAppSelector((state) => state.userReducer);
    const {data, error, isLoading} = useGetAllOrdersUserQuery(`${user?.id}`, {skip: !user?.id})
    const [updateStatus] = useUpdateOrderMutation()
    useEffect(() => {
        // updateStatus({
        //     id: 15,
        //     body: {
        //         notifications: false
        //     }
        // })
    }, []);
    return (
        <MainLayout heading={'Уведомления'}>
            {
                data?.length && data?.map(item =>
                    <div key={item.id}>
                        {
                            item.notifications ?
                                <div className={classes.item}>
                                    <div className={classes.text}>Статус заказа №{item.id}</div>
                                    <div className={classes.value}>{item?.status}</div>
                                </div>
                                : <div>Нет новых уведомлений</div>
                        }
                    </div>
                )
            }

        </MainLayout>
    );
};
export default NotificationPage;
