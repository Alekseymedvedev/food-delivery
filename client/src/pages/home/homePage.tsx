import {MainLayout} from "../../layout/mainLayout";
import { ArrowIcon } from "../../shared/images/icons/arrowIcon";
import { CartIcon } from "../../shared/images/icons/cartIcon";
import {Categories} from "../../widgets/categories/categories";
import {NavLink} from "react-router-dom";


const HomePage = () => {
    return (
        <MainLayout heading={'Что вы предпочитайте?'} homePage isSearch>
            <Categories/>
        </MainLayout>
    );
};
export default HomePage;
