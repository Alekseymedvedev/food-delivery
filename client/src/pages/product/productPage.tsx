
import {MainLayout} from "../../layout/mainLayout"
import {useParams} from "react-router-dom";
import {useGetOneProductQuery} from "../../store/API/productsApi";
import {Product} from "../../entities/product/product";
import {Button} from "../../shared/button/button";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {addProductToCart} from "../../store/slice/productsSlice";


const ProductPage = () => {
    const {id} = useParams()
    const {data, isError} = useGetOneProductQuery(`${id}`)
    const dispatch = useAppDispatch()
    const {countProducts}= useAppSelector(state => state.productReducer)
    const addHandler = () => {
        dispatch(addProductToCart(data))
    }
    return (
        <MainLayout heading={''}>
            <Product data={data}/>
            <Button onClick={addHandler}>Добавить в корзину{countProducts}</Button>
        </MainLayout>
    );
};
export default ProductPage;
