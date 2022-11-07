import React,{Component} from "react";
import services from "../services";
import { CircularProgress, Grid } from "@mui/material";
import ProductCard from "../lib/productCart";

class Wishlist extends Component{

    constructor(){
        super()
        this.state={
            isLoading:true,
            fvrt : []
        }
    }


    componentDidMount(){

        let fvrt = localStorage.getItem('faverote')

        fvrt = JSON.parse(fvrt)||[]

        if(fvrt.length>0){

            let promises =[]

            fvrt.forEach(i => {
               
                promises.push(services.getSingelData('products',i))
                
            });

            Promise.all(promises).then((res)=>{
         
                this.setState({
                    ...this.state,
                    fvrt:res,
                    isLoading:false
                })

            })

        }else{

            this.setState({
                ...this.state,
                isLoading:false
            })

        }

    }

    render(){

        return(
          <>
          {
            this.state.isLoading?
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <CircularProgress disableShrink />
            </div>
            :this.state.fvrt.length===0?
            <h1 style={{textAlign:'center'}}>WishList Is Empty</h1>
            :
            <Grid container item xs={12} md={12} spacing={2}>
                {
                    this.state.fvrt.map((i,index)=>{

                        return <Grid item xs={6} md={3} key={index}>
                           <ProductCard product={i}/>
                        </Grid>

                    })
                }
            </Grid>
          }
          </>
        )

    }

}

export default Wishlist