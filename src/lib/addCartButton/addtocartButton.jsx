import React, { useEffect, useState } from 'react'
import { Button,Typography,Tooltip } from '@mui/material'
import {Box} from '@mui/system'
import services from '../../services'

const style ={
    btn:{
        color:'black'
    }
}

function AddToCartButton({id,maxQty,inStock}){

    const [inCart,setIncart] = useState(false)

    const [cart,setCart] = useState({})

    const [mxQty,setMaxQty] = useState(10)

    const [maxInc,setMaxInc] = useState(false)

    const checkCart=()=>{

        const iscart=services.cart(id)

        if(iscart===-1){
            setIncart(false)
        }else{

            setIncart(true)
            setCart(iscart)

            if(iscart.qty===Number(mxQty)){

                setMaxInc(true)

            }else setMaxInc(false)

        }

    }

    useEffect(()=>{

        checkCart()

        if(maxQty>inStock){
            setMaxQty(inStock)
        }else{
            setMaxQty(maxQty)
        }

    },[])

    const addCart=()=>{
        
        services.addToCart(id)

        checkCart()

    }

    const incdec=(inc)=>{
        
        services.incdec(id,inc)

        checkCart()

    }

    const incdecbtn = (
        <Box display='flex' flexDirection='row' justifyContent='space-around' alignItems={'center'}>
        <Button style={style.btn}
        onClick={()=>incdec(false)}
        >-</Button>
        <Typography>{cart.qty}</Typography>
        <Tooltip title={'max qty '+mxQty}>
        <Button style={style.btn}
        onClick={()=>incdec(true)}
        disabled={maxInc}
        >+</Button>
        </Tooltip>
     </Box>
    )


    return(
        <>
           {
               inCart?
                  incdecbtn
               :
               <Button style={{marginLeft:'20%'}} onClick={addCart}>Add</Button>
           }
        </>
    )

}

export default AddToCartButton