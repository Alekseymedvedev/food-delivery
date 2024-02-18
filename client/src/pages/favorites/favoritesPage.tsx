
import {MainLayout} from "../../layout/mainLayout"
import {useEffect, useState} from "react";
import {IProduct} from "../../types/types";
import {Product} from "../../entities/product/product";


const FavoritesPage = () => {
    const [favouritesProduct, setFavouritesProduct] = useState<IProduct[]>()

    useEffect(() => {
        const local =localStorage.getItem('food-delivery-favorites')
        const favorites = JSON.parse( local ? local : '[]');
        if(favorites) setFavouritesProduct(favorites)
    }, []);
    return (
        <MainLayout heading={'Избранное'} textCenter>
            {
                favouritesProduct ?
                    favouritesProduct?.map(item =>
                        <Product data={item}/>
                    )
                    : <div className="h2">Ничего не найдено</div>
            }

        </MainLayout>
    );
};
export default FavoritesPage;
