import {HomePage} from "../pages/home/homePageLazy";
import {CategoryPage} from "../pages/category/categoryPageLazy";
import {ProductPage} from "../pages/product/productPageLazy";
import {SettingsProductPage} from "../pages/settingsProduct/settingsProductPageLazy";
import {SettingsPage} from "../pages/settings/settingsPageLazy";
import {SettingsCategoryPage} from "../pages/settingsCategory/settingsCategoryPageLazy";
import {CartPage} from "../pages/cart/cartPageLazy";


export const routes = [
    {path: "/", element: <HomePage/>},
    {path: "/category/:id", element: <CategoryPage/>},
    {path: "/product/:id", element: <ProductPage/>},
    {path: "/settings", element: <SettingsPage/>},
    {path: "/settings-category/:id", element: <SettingsCategoryPage/>},
    {path: "/settings-category/:id/settings-product/:id", element: <SettingsProductPage/>},
    {path: "/cart", element: <CartPage/>},
]