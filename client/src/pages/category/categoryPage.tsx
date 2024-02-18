import {MainLayout} from "../../layout/mainLayout";
import {useGetCategoryQuery} from "../../store/API/categoriesApi";
import {Products} from "../../widgets/products/products";
import {useParams} from "react-router-dom";


const CategoryPage = () => {
    const {id} = useParams()
    const {data, isError} = useGetCategoryQuery(`${id}`)

    return (
        <MainLayout heading={data?.title} isSearch>
            <div>
                {
                    data && <Products data={data?.products}/>
                }
            </div>
        </MainLayout>
    );
};
export default CategoryPage;
