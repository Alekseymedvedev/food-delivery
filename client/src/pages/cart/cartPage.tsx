import {MainLayout} from "../../layout/mainLayout"
import {useAppSelector} from "../../hooks/useRedux";
import {Product} from "../../entities/product/product";
import {useState} from "react";
import classes from "./cartPage.module.scss"
import {Button} from "../../shared/button/button";
import {FormCheckout} from "../../entities/formCheckout/formCheckout";


const CartPage = () => {

    const {productsInCart} = useAppSelector(state => state.productReducer)
    const [checkout, setCheckout] = useState(false)

    return (
        <MainLayout heading={checkout ? 'Оформление заказа' : 'Корзина'} textCenter>
            {
                checkout ?
                    <FormCheckout/>
                    :
                    <div className={classes.cart}>
                        <div>
                            <div className={classes.list}>
                                {
                                    productsInCart && productsInCart.map(item =>
                                        <div key={item.id}>
                                            <Product data={item} inCart count={item.count ? item.count : 0}/>
                                            <div className={classes.divider}></div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={classes.sum}>
                                <span>Итого:</span>
                                <span>
                                {
                                    productsInCart && productsInCart.reduce((acc, item) => acc + (+item?.price * (item.count ? item.count : 0)), 0)
                                }
                            </span>
                            </div>
                        </div>
                        <Button onClick={() => setCheckout(true)}>Оформить заказ</Button>
                    </div>
            }
        </MainLayout>
    );
};
export default CartPage;



