import {MainLayout} from "../../layout/mainLayout"
import {Button} from "../../shared/button/button";
import React, {useState} from "react";
import {AddAndEditForm} from "../../widgets/addAndEditForm/addAndEditForm";
import {useGetCategoriesQuery, useGetCategoryQuery} from "../../store/API/categoriesApi";
import {NavLink, useParams} from "react-router-dom";
import {Product} from "../../entities/product/product";
import {BtnGroup} from "../../shared/btnGroup/btnGroup";


const SettingsCategoryPage = () => {
    const {id} = useParams()
    const [addNewProductForm, setAddNewProduct] = useState(false)
    const [editCategory, setEditCategory] = useState(false)
    const {data,isError} = useGetCategoryQuery(`${id}`)
console.log(editCategory);

    const [btn, setBtn] = useState(1)
    
    const addHandler = () => {
        setAddNewProduct(true)
        setEditCategory(false)
    }
    return (
        <MainLayout heading={'Настройка'} textCenter>
            <BtnGroup
                activeOneBtn={!addNewProductForm}
                activeTwoBtn={addNewProductForm}
                onClickOneBtn={() => setEditCategory(true)}
                onClickTwoBtn={addHandler}
                textOneBtn={'Редактировать'}
                textTwoBtn={'Блюдо +'}/>

            {/*<Button onClick={() => setEditCategory(true)}>Редактировать категорию</Button>*/}
            {/*<Button onClick={addHandler}>Добавить блюдо +</Button>*/}
            {
                (addNewProductForm && !editCategory) && <AddAndEditForm addNewProductForm categoryId={id}/>
            }
            {
                (!addNewProductForm && editCategory) && <AddAndEditForm categoryId={id} updateCategoryForm categoryData={data}/>
            }
            {
               (!addNewProductForm) && data?.products?.map(item =>
                    <NavLink key={item.id} to={`settings-product/${item.id}`}>
                        <Product data={item}/>
                    </NavLink>
                )
            }
        </MainLayout>
    );
};
export default SettingsCategoryPage;
