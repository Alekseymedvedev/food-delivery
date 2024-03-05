import {MainLayout} from "../../layout/mainLayout"
import React, {useState} from "react";
import {AddAndEditForm} from "../../widgets/addAndEditForm/addAndEditForm";
import {useGetCategoryQuery} from "../../store/API/categoriesApi";
import {NavLink, useParams} from "react-router-dom";
import {Product} from "../../entities/product/product";
import {BtnGroup} from "../../shared/btnGroup/btnGroup";


const SettingsCategoryPage = () => {
    const {id} = useParams()
    const [addNewProductForm, setAddNewProduct] = useState(false)
    const [editCategory, setEditCategory] = useState(true)
    const {data, isError} = useGetCategoryQuery(`${id}`)


    const addHandler = () => {
        setAddNewProduct(true)
        setEditCategory(false)
    }
    return (
        <MainLayout heading={'Настройка'} textCenter>
            <div className="mb-6">
                <BtnGroup
                    activeOneBtn={editCategory}
                    activeTwoBtn={!editCategory}
                    onClickOneBtn={() => {
                        setEditCategory(true)
                        setAddNewProduct(false)
                    }}
                    onClickTwoBtn={addHandler}
                    textOneBtn={'Редактировать'}
                    textTwoBtn={'Блюдо +'}/>
            </div>
            {
                (addNewProductForm && !editCategory) && <AddAndEditForm addNewProductForm categoryId={id}/>
            }
            {
                (!addNewProductForm && editCategory) &&
                <AddAndEditForm categoryId={id} updateCategoryForm categoryData={data}/>
            }

            {
                (!addNewProductForm) && data?.products?.map(item =>
                    <div className="mb-4" key={item.id} >
                        <NavLink to={`settings-product/${item.id}`}>
                            <Product data={item} editAdmin/>
                        </NavLink>
                    </div>
                )
            }
        </MainLayout>
    );
};
export default SettingsCategoryPage;
