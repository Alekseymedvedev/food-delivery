import classes from './notificationPage.module.scss'
import {MainLayout} from "../../layout/mainLayout"


const NotificationPage = () => {

    return (
        <MainLayout heading={'Уведомления'}>
            <div className={classes.item}>
                <div className={classes.text}>Оформлен заказ</div>
                <div className={classes.value}>1299₽</div>
            </div>
        </MainLayout>
    );
};
export default NotificationPage;
