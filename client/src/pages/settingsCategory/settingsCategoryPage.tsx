import {MainLayout} from "../../layout/mainLayout"
import {Button} from "../../shared/button/button";
import React, {useState} from "react";
import {AddAndEditForm} from "../../widgets/addAndEditForm/addAndEditForm";
import {useGetCategoriesQuery, useGetCategoryQuery} from "../../store/API/categoriesApi";
import {NavLink, useParams} from "react-router-dom";
import {Product} from "../../entities/product/product";


const SettingsCategoryPage = () => {
    const {id} = useParams()
    const [addNewProductForm, setAddNewProduct] = useState(false)
    const [editCategory, setEditCategory] = useState(false)
    const {data,isError} = useGetCategoryQuery(`${id}`)

    
    const addHandler = () => {
        setAddNewProduct(true)
        setEditCategory(false)
    }
    return (
        <MainLayout heading={'Настройка'} textCenter>
            
            <Button onClick={() => setEditCategory(true)}>Редактировать категорию</Button>
            <Button onClick={addHandler}>Добавить блюдо +</Button>
            {
                addNewProductForm && <AddAndEditForm addNewProductForm categoryId={id}/>
            }
            {
                editCategory && <AddAndEditForm categoryId={id} updateCategoryForm categoryData={data}/>
            }
            {
                data?.products?.map(item =>
                    <NavLink key={item.id} to={`settings-product/${item.id}`}>
                        <Product data={item}/>
                    </NavLink>
                )
            }
        </MainLayout>
    );
};
export default SettingsCategoryPage;
