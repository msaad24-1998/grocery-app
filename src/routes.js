import Home from "./home/home";
import Products from "./products";
import ProductDetails from "./productDetails";
import Checkout from "./checkout";

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
    }
]

export default routes