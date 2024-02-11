import {MainLayout} from "../../layout/mainLayout"
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {Product} from "../../entities/product/product";
import {useEffect, useState} from "react";
import {getProducts} from "../../store/slice/productsSlice";
import classes from "./cartPage.module.scss"
import { Button } from "../../shared/button/button";
const CartPage = () => {
    const {productsInCart} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    const [totalPrice, setTotalPrice] = useState(11)
    useEffect(() => {

        const data = localStorage.getItem('productsInCart');
        if (data !== null) {
            dispatch(getProducts(JSON.parse(data)))
        }

    }, [])
 

    return (
        <MainLayout heading={'Корзина'} textCenter>
            {
                productsInCart && productsInCart.map(item =>
                    <div key={item.id} className={classes.list}>
                        <Product data={item} inCart count={item.count ? item.count : 0}/>
                    </div>
                )
            }
            <div className={classes.summ}>
                <span>Итого:</span>
                <span>
                {
                productsInCart && productsInCart.reduce((acc, item) => acc +  (+item?.price * (item.count ? item.count : 0) ), 0)
                }
                </span>
            </div>
            <Button>Оформить заказ</Button>
        </MainLayout>
    );
};
export default CartPage;



