import React,{ useEffect, useState } from 'react';
import { Snackbar,Alert,Typography } from '@mui/material';
import { Box } from '@mui/system';
import {IconButton} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddToCartButton from '../lib/addCartButton/addtocartButton';
import services from '../services';
import { useNavigate } from 'react-router-dom';

function CheckoutBar({cart}){


  const [cartItem,setCart] = useState([])

  const [path,setPath] = useState('')

  const [isShow,setIsShow] = useState(false)

  const navigate = useNavigate()

  useEffect(()=>{

    setPath(window.location.pathname)

    let cart = localStorage.getItem('cart')

     cart = JSON.parse(cart)

     if(cart===null){

      localStorage.setItem('cart',JSON.stringify([]))

     }else{

      setCart(cart)

      if(cart.length>0){
        setIsShow(true)
      }else setIsShow(false)

     }

  },[cart])

  const checkout=()=>{

    services.auten().then((res)=>{
        navigate('/checkout')
    }).catch((err)=>{
        services.autentication()
    })

  }

    return(
        <>
        {

            path==='/'||path==='/products/:categoryId'||path==='/productDetails/:productId'?
                <Snackbar open={isShow} style={{width:'98%',marginRight:'1%'}}>
                   <Box
                     style={{
                     width:'98%',
                     marginRight:'1%',
                     backgroundColor:'red',
                     color:'white',
                     display:'flex',
                     flexDirection:'row',
                     justifyContent:'space-around',
                     alignItems:'center',
                     height:'50px'
                    }}
                    >
                      <Typography variant='h6'>Checkout {cartItem.length} Items In Cart</Typography>
                      <IconButton onClick={checkout}>
                        <AddShoppingCartIcon color='white'/>
                      </IconButton>
                   </Box>
                </Snackbar>

            :null

        }

        </>
    )

}

export default CheckoutBar