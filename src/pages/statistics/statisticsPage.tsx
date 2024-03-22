import {MainLayout} from "../../layout/mainLayout"
import {useGetCategoriesQuery} from "../../store/API/categoriesApi";
import {useGetProductsQuery} from "../../store/API/productsApi";
import {Products} from "../../widgets/products/products";
import {BtnGroup} from "../../shared/btnGroup/btnGroup";
import React, {useState} from "react";
import {Categories} from "../../widgets/categories/categories";
import {Category} from "../../entities/category/category";


const StatisticsPage = () => {
    const {data: dataCategories, error: errorCategories, isLoading: isLoadingCategories} = useGetCategoriesQuery('')
    const {data: dataProducts, error: errorProducts, isLoading: isLoadingProducts} = useGetProductsQuery('')

    const [btn, setBtn] = useState(1)

    return (
        <MainLayout heading={'Статистика'} textCenter>
            <BtnGroup
                activeOneBtn={btn === 1}
                activeTwoBtn={btn === 2}
                onClickOneBtn={()=>setBtn(1)}
                onClickTwoBtn={()=>setBtn(2)}
                textOneBtn={'Категории'}
                textTwoBtn={'Блюда'}/>
            {
                btn ===1 ?
                    <Categories>
                        {
                            dataCategories && dataCategories.map(item =>
                                <Category key={item.id} data={item}/>
                            )
                        }
                    </Categories>
                    :
                    <Products data={dataProducts}/>
            }


        </MainLayout>
    );
};
export default StatisticsPage;
