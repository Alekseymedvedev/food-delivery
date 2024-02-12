import {MainLayout} from "../../layout/mainLayout"
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {Product} from "../../entities/product/product";
import {useEffect, useState} from "react";
import {getProducts} from "../../store/slice/productsSlice";
import classes from "./cartPage.module.scss"
import {Button} from "../../shared/button/button";
import {FormCheckout} from "../../entities/formCheckout/formCheckout";


const CartPage = () => {

    const dispatch = useAppDispatch()
    const {productsInCart} = useAppSelector(state => state.productReducer)

    const [checkout, setCheckout] = useState(false)
    useEffect(() => {
        const data = localStorage.getItem('productsInCart');
        if (data !== null) {
            dispatch(getProducts(JSON.parse(data)))
        }
    }, [])

    const ordersHandler = (data: any) => {

    }
    return (
        <MainLayout heading={checkout ? 'Оформление заказа' : 'Корзина'} textCenter>
            {
                checkout ?
                    <FormCheckout onSubmit={ordersHandler}/>
                    :
                    <>
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
                    productsInCart && productsInCart.reduce((acc, item) => acc + (+item?.price * (item.count ? item.count : 0)), 0)
                }
                </span>
                        </div>
                        <Button onClick={() => setCheckout(true)}>Оформить заказ</Button>
                    </>
            }

        </MainLayout>
    );
};
export default CartPage;



