import React, {FC, memo} from "react";
import classes from "./menu.module.scss";
import {NavLink} from "react-router-dom";
import {HomeIcon} from "../../shared/images/icons/homeIcon";
import {MoreIcon} from "../../shared/images/icons/moreIcon";
import {NotificationIcon} from "../../shared/images/icons/notificationIcon";
import {CartIcon} from "../../shared/images/icons/cartIcon";
import {ProfileIcon} from "../../shared/images/icons/profileIcon";

interface IType {
    children?: React.ReactNode;
}

const linkArr = [
    {to: "/", text: "Главная", icon: <HomeIcon/>},
    {to: "/profile", text: "Профиль", icon: <ProfileIcon/>},
    {to: "/cart", text: "Корзина", icon: <CartIcon/>},
    {to: "/notification", text: "Уведомления", icon: <NotificationIcon/>},
    {to: "/more", text: "Еще", icon: <MoreIcon/>},
];
export const Menu: FC<IType> = memo(({children}) => {
    return (
        <nav className={classes.menu}>
            {linkArr.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({isActive}) =>
                        isActive ? `${classes.link} ${classes.active}` : classes.link
                    }
                >
                    {item.icon}
                    <span>{item.text}</span>
                </NavLink>
            ))}
        </nav>
    );
});
