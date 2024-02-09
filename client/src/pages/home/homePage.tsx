import {MainLayout} from "../../layout/mainLayout";
import {Categories} from "../../widgets/categories/categories";


const HomePage = () => {

    return (
        <MainLayout heading={'Что вы предпочитайте?'}>
            <Categories/>
        </MainLayout>
    );
};
export default HomePage;
