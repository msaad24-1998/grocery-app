import React,{Component} from "react";
import services from "../services";
import { Grid,Paper } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {LinearProgress} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Item({img,productName,price,productQty,qty,id,date,status}){

    const navigate = useNavigate()



    return(
        <Paper onClick={()=>navigate('/productDetails/'+id)}>
        <Grid container item xs={12} md={12} spacing={2}>
            <Grid item xs={3} md={3}>
                <img src={img} style={{width:'80px'}}/>
            </Grid>
            <Grid container item xs={9} md={9}>
                <Grid item xs={4} md={6}>{productName}</Grid>
                <Grid item xs={2} md={2}>
                    <CurrencyRupeeIcon/>
                    {price}
                </Grid>
                <Grid item xs={2} md={2}>
                    <CurrencyRupeeIcon/>
                    {Number(price)*Number(qty)}
                </Grid>
                <Grid item xs={4} md={2}>{status}</Grid>
                <Grid item xs={4} md={4}>{productQty}</Grid>
                <Grid item xs={4} md={4}>{qty}</Grid>
                <Grid item xs={4} md={4}>{date}</Grid>
            </Grid>
        </Grid>
        </Paper>
    )

}

class Orders extends Component{


    constructor(){
        super()
        this.state={
             orders:[],
             products:[],
             isLoading:true
        }

        this.handleChange=this.handleChange.bind(this)

    }

    handleChange(k,e){

        this.setState({
            [k]:e
        })

    }

    componentDidMount(){

        let user = localStorage.getItem('user')

        user = JSON.parse(user)||{}

        if(user!==null){

            services.gerData('orders','','customerId',user.id).then((res)=>{

                this.handleChange('orders',res)

                let promises=[]

                res.forEach(i=> {
                    
                    promises.push(services.getSingelData('products',i.productId))

                });

                Promise.all(promises).then((res)=>{

                    this.handleChange('products',res)

                    this.handleChange('isLoading',false)

                })

            }).catch((err)=>{

                console.log(err);

            })

        }

    }


    render(){

        return(
            <>
            <ArrowBackIcon onClick={()=>window.location.pathname='/'}/>
            <Paper>
            {
                this.state.isLoading?
                  <LinearProgress/>
                :
                this.state.products.length>0?
                  this.state.products.map((i,index)=>{

                    return <Item
                     key={index}
                     img={i.productImg}
                     productName={i.productName}
                     price={this.state.orders[index].discountedPrice}
                     productQty={i.productQty}
                     qty={this.state.orders[index].qty}
                     id={i.id}
                     date={this.state.orders[index].date}
                     status={this.state.orders[index].status}
                    />

                   })
                :<h1 style={{textAlign:'center'}}>Not Placed Any Orders</h1>
                  
            }
            </Paper>
            </>
        )

    }


}

export default Orders