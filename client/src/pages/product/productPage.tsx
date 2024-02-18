
import {MainLayout} from "../../layout/mainLayout"
import {useParams} from "react-router-dom";
import {useGetOneProductQuery} from "../../store/API/productsApi";
import {Product} from "../../entities/product/product";
import {Button} from "../../shared/button/button";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {addProductToCart} from "../../store/slice/productsSlice";
import React from "react";


const ProductPage = () => {
    const {id} = useParams()
    const {data, isError} = useGetOneProductQuery(`${id}`)
    const dispatch = useAppDispatch()
    const {countProducts}= useAppSelector(state => state.productReducer)
    const addHandler = () => {
        dispatch(addProductToCart(data))
    }
    if(isError){
        return <h2 className={'error'}>Произошла ошибка при загрузке данных. Попробуйте обновить страницу</h2>
    }
    return (
        <MainLayout heading={data?.title} textCenter>
            <h1>fffff</h1>
            <Product data={data} oneProduct/>
            {/*<Button onClick={addHandler}>Добавить в корзину {countProducts ? countProducts : '+'}</Button>*/}
        </MainLayout>
    );
};
export default ProductPage;
