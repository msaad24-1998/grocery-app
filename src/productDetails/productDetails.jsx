import React, { useEffect, useState } from "react";
import services from "../services/services";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import {Grid,Typography} from "@mui/material";
import { CircularProgress } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddToCartButton from "../lib/addCartButton/addtocartButton";

function ProductDetails(){

    const [isLoading,setIsLoading] = useState(true)

    const [product,setProduct] = useState({})

    const {productId} = useParams()

    const [sellerName,setSellerName] = useState('')

    useEffect(()=>{

        services.getSingelData('products',productId).then((res)=>{

            setIsLoading(false)

            setProduct(res)

            console.log(res);

            services.getSingelData('sellers',res.sellerId).then((res)=>{
                setSellerName(res.hotelName)
            }).catch((err)=>console.log(err))

        }).catch((err)=>console.log(err))

    },[])

    return(
        <>
        {
             isLoading?
             <Box sx={{ display: 'flex',justifyContent:'center',alignContent:'center' }}>
               <CircularProgress />
             </Box>
             :<Grid container item xs={12} md={12} spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={product.productImg} alt="" style={{
                        width:'95%',
                        borderRadius:'15px'
                    }}/>
                </Grid>
                <Grid container item xs={12} md={6} spacing={1}>
                    <Grid container item xs={12} md={12}>
                        <Grid item xs={6} md={6}>
                            <Typography variant="h5">{product.productName}</Typography>
                        </Grid>
                        <Grid item xs={6} md={6} justifyContent='left'>
                          <AddToCartButton 
                          id={product.id} 
                          maxQty={product.productMaxQty} 
                          stock={product.productStock}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h6">{product.productQty}</Typography>
                    </Grid>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <CurrencyRupeeIcon/>
                        {product.productDiscountedPrice}
                    </Grid>
                    <Grid item xs={9} md={9}>
                        <CurrencyRupeeIcon/>
                        <strike>{product.productOriginalPrice}</strike>
                    </Grid>
                    <Grid container item xs={12} md={12}>
                        <Grid item xs={6} md={6}>Product Min Qty : {product.productMinQty}</Grid>
                        <Grid item xs={6} md={6} justifyContent='left'>Product Max Qty : {product.productMaxQty}</Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant='h6'>Only {product.productStock} In Stock</Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant='h6'>Description :</Typography>
                        <div>
                            {product.productDescription} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolores aliquid excepturi esse nostrum delectus asperiores possimus error fugiat, eius magnam ipsa cum iste adipisci nemo facere sint est. Tempore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam autem ipsum ex nesciunt veniam labore amet doloremque veritatis, animi tenetur perspiciatis repudiandae, itaque rerum vitae ipsam atque repellat necessitatibus praesentium.
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h6">Seller : {sellerName}</Typography>
                    </Grid>
                </Grid>
             </Grid>
        }
        </>
    )

}

export default ProductDetails