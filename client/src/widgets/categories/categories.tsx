import React, {FC, memo} from "react";
import classes from './categories.module.scss'
import {Category} from "../../entities/category/category";
import {useGetCategoriesQuery} from "../../store/API/categoriesApi";
import {ICategory} from "../../types/types";
import {NavLink} from "react-router-dom";


interface IType {
    children?: React.ReactNode
}

export const Categories: FC<IType> = memo(({children}) => {
    const {data, isError} = useGetCategoriesQuery('')
    if(isError){
        return <h2 className={'error'}>Произошла ошибка при загрузке данных. Попробуйте обновить страницу</h2>
    }
    return (
        <div>
            {
                data && data.map((item: ICategory) =>
                    <NavLink key={item.id} to={`category/${item.id}`}>
                        <Category data={item}/>
                    </NavLink>
                )
            }

        </div>
    )
}) 
