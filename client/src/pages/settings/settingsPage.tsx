import {MainLayout} from "../../layout/mainLayout"
import {Button} from "../../shared/button/button";
import {useGetCategoriesQuery} from "../../store/API/categoriesApi";
import {ICategory} from "../../types/types";
import {Category} from "../../entities/category/category";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {AddAndEditForm} from "../../widgets/addAndEditForm/addAndEditForm";


const SettingsPage = () => {
    const {data, isError, isLoading} = useGetCategoriesQuery('')
    const [addCategory, setAddCategory] = useState(false)
    const Handler = () => {

    }
    const addHandler = () => {
        setAddCategory(true)
    }
console.log(isLoading);

    return (
        <MainLayout heading={'Настройка'} textCenter>
            {
                addCategory  ?
                    <AddAndEditForm addCategoryForm/>
                    :
                    <>
                        <Button onClick={addHandler}>добавить категорию +</Button>
                        {
                            data && data.map((item: ICategory) =>
                                <NavLink  key={item.id} to={`/settings-category/${item.id}`}>
                                    <Category data={item}/>
                                </NavLink>
                            )
                        }
                    </>
            }
        </MainLayout>
    );
};
export default SettingsPage;
