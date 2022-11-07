import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import services from "../services/services";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ProductCard from "../lib/productCart";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckoutBar from "../checkoutBar";

function Products(){

    const [products,setProducts] = useState([])

    const [loading,setLoding] = useState(true)

    let {categoryId}=useParams()

    const navigate = useNavigate()

    useEffect(()=>{

        services.gerData('products','productActive','categoryId',categoryId).then((res)=>{

            setProducts(res)

            setLoding(false)

        }).catch((err)=>{
            console.log(err);

            setLoding(false)
        })

    },[])

    const backHome=()=>navigate('/')

    return(
        <>
        <ArrowBackIcon 
        onClick={backHome}
        />
          {
              loading?
              <Box sx={{ display: 'flex',justifyContent:'center',alignContent:'center' }}>
                  <CircularProgress />
               </Box>
              :
              <Grid container item xs={12} md={12} spacing={1}>
                    {
                       products.length>0?
                       products.map((i,index)=>{

                        return <Grid item xs={6} md={3} key={index}>
                              <ProductCard product={i}/>
                        </Grid>

                       })
                       :
                       <h1 style={{textAlign:'center'}}>At This Time Product Not Available</h1> 
                    }
              </Grid>
          }
        </>
    )

}

export default Products