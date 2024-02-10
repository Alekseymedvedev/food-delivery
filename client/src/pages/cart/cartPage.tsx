import {MainLayout} from "../../layout/mainLayout"
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {Product} from "../../entities/product/product";
import {useEffect} from "react";
import {getProducts} from "../../store/slice/productsSlice";

const CartPage = () => {
    const {productsInCart} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {

        const data = localStorage.getItem('products');
        if (data !== null) {
            dispatch(getProducts(JSON.parse(data)))
        }
    }, [])
    return (
        <MainLayout heading={''}>
            <h1>Корзина</h1>
            {
                productsInCart && productsInCart.map((item: any) =>
                    <>
                        <Product data={item} inCart count={item.count ? item.count : 0}/>
                        <h1>{item.count}</h1>
                    </>
                )
            }
        </MainLayout>
    );
};
export default CartPage;

function getLocalStorageProducts(): any {
    throw new Error("Function not implemented.");
}

