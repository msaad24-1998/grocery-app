import { Paper,Grid,Typography } from '@mui/material'
import React,{Component} from 'react'
import services from '../services'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddToCartButton from '../lib/addCartButton/addtocartButton';


const style ={
    center:{
        textAlign:'center'
    }
}

class Checkout extends Component{

    constructor(){
        super()
        this.state={
            cart:[],
            item:[],
        }

        this.getCart=this.getCart.bind(this)
    }

    getCart(){

       const list = services.getCart()

       console.log(list);
       let total =0;

       if(list.length>0){

        const product =[]

        list.forEach((i)=>{

            services.getSingelData('products',i.id).then((res)=>{

                 product.push(res)

            }).catch((err)=>{

                console.log(err);

            }).finally((res)=>{
                this.setState({
                    ...this.state,
                    cart:product,
                    item:list,
                    totalBill:total
                })
            })

        })
        

       }else{

        

       }

    }

    componentDidMount(){

        this.getCart()

    }

    render(){

        let total = 0;

        if(this.state.cart.length>0){

            this.state.cart.forEach((i,index)=>{

                total = total + Number(i.productDiscountedPrice)*Number(this.state.item[index].qty)

            })

        }

        return(
            <>
               {
                this.state.cart.length===0?
                  <h3 style={style.center}>Your Cart Is Empty</h3>
                :
                <>
                <h3>{this.state.cart.length} Items In Cart :</h3>
                <Grid container item xs={12} md={12} spacing={2}>
                    <Grid item xs={12} md={8}>
                         <Paper>
                             {
                                this.state.cart.map((i,index)=>{
                                    return <Grid key={index} container item xs={12} md={12} spacing={2}>
                                        <Grid item xs={3} md={3}>
                                            <img src={i.productImg}
                                            style={{width:'80px'}}
                                            />
                                        </Grid>
                                        <Grid container item xs={9} md={9}> 
                                             <Grid item xs={6} md={6}>
                                                <Typography variant='h6'>{i.productName}</Typography>
                                             </Grid>
                                             <Grid container item xs={6} md={6}>
                                                <Grid item xs={6} md={6}>
                                                    <CurrencyRupeeIcon/>
                                                    {i.productDiscountedPrice}
                                                </Grid>
                                                <Grid item xs={6} md={6}>
                                                    <CurrencyRupeeIcon/>
                                                    <strike>{i.productOriginalPrice}</strike>
                                                </Grid>
                                             </Grid>
                                             <Grid container item xs={12} md={12}>
                                                <Grid item xs={6} md={6}>
                                                    <Typography variant='h6'>{i.productQty}</Typography>
                                                </Grid>
                                                <Grid item xs={6} md={6}>
                                                    <AddToCartButton
                                                    id={i.id}
                                                    maxQty={i.productMaxQty}
                                                    stock={i.productStock}
                                                    />
                                                </Grid>
                                             </Grid>
                                        </Grid>
                                    </Grid>
                                })
                             }
                         </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} spacing={2}>
                        <Paper>
                            <h3>Bills :</h3>
                            {
                                this.state.cart.map((i,index)=>{
                                    return <Grid key={index} container item xs={12} md={12}>
                                        <Grid item xs={3} md={3}>
                                            {i.productName}
                                        </Grid>
                                        <Grid item xs={3} md={3}>
                                            {this.state.item[index].qty}
                                        </Grid>
                                        <Grid item xs={3} md={3}>
                                            <CurrencyRupeeIcon/>
                                            {i.productDiscountedPrice}
                                        </Grid>
                                        <Grid item xs={3} md={3}>
                                            <CurrencyRupeeIcon/>
                                            {Number(i.productDiscountedPrice)*Number(this.state.item[index].qty)}
                                        </Grid>
                                    </Grid>
                                })
                            }
                            <Grid container item xs={12} md={12}>
                                <Grid item xs={9} md={9}>
                                    Total :
                                </Grid>
                                <Grid item xs={3} md={3}>
                                <CurrencyRupeeIcon/>
                                    {total}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                </>
               }
            </>
        )

    }

}

export default Checkout