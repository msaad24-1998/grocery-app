import Home from "./home/home";
import Products from "./products";
import ProductDetails from "./productDetails";

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
    }
]

export default routes