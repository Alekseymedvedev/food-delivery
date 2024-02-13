import {MainLayout} from "../../layout/mainLayout"
import classes from "./oneOrderPage.module.scss";
import {Button} from "../../shared/button/button";
import React, {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useGetOneOrderQuery} from "../../store/API/ordersApi";
import {Product} from "../../entities/product/product";
import {BtnGroup} from "../../shared/btnGroup/btnGroup";


const OneOrderPage = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useGetOneOrderQuery(`${id}`)

    const [activeBtn, setActiveBtn] = useState('Доставка')
    if (error) return <h2 className={'error'}>Данные о товаре не загружены</h2>
    console.log(activeBtn)
    return (
        <MainLayout heading={`Заказ №${id}`} textCenter>
            <BtnGroup
                activeOneBtn={activeBtn === 'Доставка'}
                activeTwoBtn={activeBtn === 'Самовывоз'}
                onClickOneBtn={() => setActiveBtn('Доставка')}
                onClickTwoBtn={() => setActiveBtn('Самовывоз')}
                textOneBtn={'Доставка'}
                textTwoBtn={'Самовывоз'}/>
            <div>
                <h3>Корзина</h3>
                <div className={classes.products}>
                    {
                        data && data?.orderProducts.map(item =>
                            <Product data={item} inOrder/>
                        )
                    }
                </div>
                <div className={classes.sum}>
                    <span>Итого:</span>
                    <span>
                         {
                             data?.orderProducts &&
                             data?.orderProducts.reduce((acc, item) =>
                                 acc + (+item?.price * (item.count ? item.count : 0)), 0)
                         }
                    </span>
                </div>
            </div>
            <NavLink className={classes.link} to={'/orders'}>
                <span className={classes.line}></span>
                <span>Смотреть&nbsp;все&nbsp;заказы</span>
                <span className={classes.line}></span>
            </NavLink>
        </MainLayout>
    )
        ;
};
export default OneOrderPage;
