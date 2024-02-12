
import {MainLayout} from "../../layout/mainLayout"
import classes from "./oneOrderPage.module.scss";
import {Button} from "../../shared/button/button";
import React from "react";
import {NavLink} from "react-router-dom";


const OneOrderPage = () => {

    return (
        <MainLayout heading={''}>
            <div className={classes.btnGroup}>
                <Button >Доставка</Button>
                <Button >Самовывоз</Button>
                <NavLink className={classes.link} to={ '/orders'}>
                    <span className={classes.link}></span>
                    <span>Смотреть все заказы</span>
                    <span className={classes.link}></span>
                </NavLink>
            </div>
        </MainLayout>
    );
};
export default OneOrderPage;
