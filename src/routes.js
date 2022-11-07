import Home from "./home/home";
import Products from "./products";
import ProductDetails from "./productDetails";
import Checkout from "./checkout";
import Address from "./address";
import Orders from "./orders";
import Wishlist from "./wishlist";

const routes =[
    {
        path:'/',
        component:<Home/>
    },
    {
        path:'/products/:categoryId',
        component:<Products/>
    },
    {
        path:'/productDetails/:productId',
        component:<ProductDetails/>
    },
    {
        path:'/checkout',
        component:<Checkout/>
    },
    {
        path:'/addAddress',
        component:<Address/>
    },
    {
        path:'/orders',
        component:<Orders/>
    },
    {
        path:'/wishlist',
        component:<Wishlist/>
    }
]

export default routes