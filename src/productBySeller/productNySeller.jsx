import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import services from '../services'
import { Container, Paper,Grid } from '@mui/material'
import ProductCard from '../lib/productCart'

const ProductBySeller =()=>{


  const iniialstate={
    store:{},
    products:[],
    loading:true
  }

  const [state,setState] = useState(iniialstate)


  const {id} = useParams()

  useEffect(()=>{

      services.getSingelData('sellers',id).then((res)=>{

        console.log(res);

        setState(prev=>({
          ...prev,
          store:res,
        }))

        return services.gerData('products','productActive','sellerId',id)

      }).then((res)=>{

        console.log(res)

        setState(prev=>({
          ...prev,
          products:res,
          loading:false
        }))

      })

  },[])

  return(
    <Container>
        {
          state.loading?
            <h1>Loading...</h1>
          : 
          <>
             <Paper style={{height:'200px',backgroundColor:'black',color:'white'}}>
                 <div style={{
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                 }}>
                  <h1>{state.store.hotelName}</h1>
                  <p>{state.store.address}</p>
                 </div>
             </Paper>
                 <Grid container item xs={12} md={12}>
                  {
                     state.products.map((p,i)=>{
                      return <Grid key={i} xs={12} md={4} item>
                          <ProductCard
                          product={p}
                          />
                      </Grid>
                     })
                  }
                 </Grid>
             <Paper>

             </Paper>
          </>
        }
    </Container>
  )


}

export default ProductBySeller