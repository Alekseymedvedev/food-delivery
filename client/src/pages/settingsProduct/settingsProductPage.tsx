
import {MainLayout} from "../../layout/mainLayout"
import {Button} from "../../shared/button/button";
import {useParams} from "react-router-dom";
import {useGetCategoryQuery} from "../../store/API/categoriesApi";
import {Products} from "../../widgets/products/products";
import React, {useState} from "react";
import {Form} from "../../entities/form/form";
import {useInput} from "../../hooks/useInput";
import {Input} from "../../shared/input/input";
import {useCreateNewProductMutation} from "../../store/API/productsApi";
import {AddAndEditForm} from "../../widgets/addAndEditForm/addAndEditForm";


const SettingsProductPage = () => {
    const {id} = useParams()

    console.log(id)

    return (
        <MainLayout heading={'Настройка'}>
            {
              <AddAndEditForm updateProductForm productId={id}/>
            }
        </MainLayout>
    );
};
export default SettingsProductPage;
