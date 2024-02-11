import {MainLayout} from "../../layout/mainLayout";
import {Categories} from "../../widgets/categories/categories";
import {NavLink} from "react-router-dom";


const HomePage = () => {
    return (
        <MainLayout heading={'Что вы предпочитайте?'} homePage>
            <Categories/>
            <NavLink to={ '/cart'}><h1>cart</h1></NavLink>
        </MainLayout>
    );
};
export default HomePage;
