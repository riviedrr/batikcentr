import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Reg from "./pages/Registration";
import ProductPage from "./pages/ProductPage";
import { PROFILE_ROUTE, CATALOG_ROUTE, ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, BRANDS_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, FAVOURITES_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utilis/consts"
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";

export const authRoutes = [ // Для авторизованных пользователей
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites
    },  
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [ // Для неавторизованных пользователей
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth 
    },    
    {
        path: REGISTRATION_ROUTE,
        Component: Reg 
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: BRANDS_ROUTE,
        Component: Brands
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: BASKET_ROUTE,
        Component: Auth
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Auth
    }, 
]