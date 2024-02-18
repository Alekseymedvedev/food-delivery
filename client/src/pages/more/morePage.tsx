import classes from "./morePage.module.scss";
import {NavLink} from "react-router-dom";
import {MainLayout} from "../../layout/mainLayout";
import {FavoritesIcon} from "../../shared/images/icons/favoritesIcon";
import {useAppSelector} from "../../hooks/useRedux";
import {useEffect, useState} from "react";
import {PaymentIcon} from "../../shared/images/icons/paymentIcon";
import {OrdersIcon} from "../../shared/images/icons/ordersIcon";
import {ProfileIcon} from "../../shared/images/icons/profileIcon";
import {SettingsIcon} from "../../shared/images/icons/settingsIcon";
import {StatisticsIcon} from "../../shared/images/icons/statisticsIcon";

const linkArr = [
    {to: "payment", text: "Платежи", icon: <PaymentIcon/>},
    {to: "orders", text: "Заказы", icon: <OrdersIcon/>},
    {to: "/profile", text: "Профиль", icon: <ProfileIcon isSimple/>},
    {to: "more", text: "Избранное ", icon: <FavoritesIcon />},
];
const linkArrAdmin = [
    {to: "/more/statistics", text: "Статистика", icon: <StatisticsIcon isSimple/>},
    {to: "/more/settings", text: "Настойка товаров", icon: <SettingsIcon/>},
];
const MorePage = () => {
    const {user} = useAppSelector((state) => state.userReducer);

    return (
        <MainLayout heading={"Еще"} textCenter>
            <nav className={classes.menu}>
                {
                    linkArr?.map(item => (
                        <NavLink to={item.to} className={classes.link}>
                            {item.icon}
                            <span>{item.text}</span>
                        </NavLink>
                    ))
                }
                {
                    user?.role === 'admin' &&  linkArrAdmin?.map(item => (
                        <NavLink to={item.to} className={classes.link}>
                            {item.icon}
                            <span>{item.text}</span>
                        </NavLink>
                    ))
                }
            </nav>
        </MainLayout>
    );
};
export default MorePage;