import {HomePage} from "../pages/home/homePageLazy";
import {CategoryPage} from "../pages/category/categoryPageLazy";
import {ProductPage} from "../pages/product/productPageLazy";
import {SettingsProductPage} from "../pages/settingsProduct/settingsProductPageLazy";
import {SettingsPage} from "../pages/settings/settingsPageLazy";
import {SettingsCategoryPage} from "../pages/settingsCategory/settingsCategoryPageLazy";
import {CartPage} from "../pages/cart/cartPageLazy";
import { ProfilePage } from "../pages/profile/profilePageLazy";
import { MorePage } from "../pages/more/morePageLazy";
import {NotificationPage} from "../pages/notification/notificationPageLazy";
import { OrdersPage } from "../pages/orders/ordersPageLazy";
import {OneOrderPage} from "../pages/oneOrder/oneOrderPageLazy";
import {StatisticsPage} from "../pages/statistics/statisticsPageLazy";
import {FavoritesPage} from "../pages/favorites/favoritesPageLazy";
import {ChangeStatusOrderPage} from "../pages/changeStatusOrder/changeStatusOrderPageLazy";
import {UpdateRoleUserPage} from "../pages/updateRoleUser/updateRoleUserPageLazy";


export const routes = [
    {path: "/", element: <HomePage/>},
    {path: "/category/:id", element: <CategoryPage/>},
    {path: "/product/:id", element: <ProductPage/>},
    {path: "/cart", element: <CartPage/>},
    {path: "/orders", element: <OrdersPage/>},
    {path: "/order/:id", element: <OneOrderPage/>},
    {path: "/profile", element: <ProfilePage/>},
    {path: "/notification", element: <NotificationPage/>},
    {path: "/more", element: <MorePage/>},
    {path: "/more/orders", element: <OrdersPage/>},
    {path: "/more/favorites", element: <FavoritesPage/>},
]
export const adminRoutes =[
    {path: "/more/settings", element: <SettingsPage/>},
    {path: "/more/settings-category/:id", element: <SettingsCategoryPage/>},
    {path: "/more/settings-category/:id/settings-product/:id", element: <SettingsProductPage/>},
    {path: "/more/statistics", element: <StatisticsPage/>},
    {path: "/more/change-status-order", element: <ChangeStatusOrderPage/>},
]
export const superAdminRoutes =[
    {path: "/update", element: <UpdateRoleUserPage/>}
]