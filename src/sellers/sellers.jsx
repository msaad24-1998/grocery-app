import React,{Component} from "react";
import { Grid, Paper,Typography } from "@mui/material";
import services from "../services";
import Container from "@mui/material/Container";
import { Navigate } from "react-router-dom";


class Sellers extends Component{

  constructor(){

    super()
    this.state={
       sellers:[],
       navigate:''
    }

  }

  handleChange(key,val){

    this.setState({
      ...this.state,
      [key]:val
     })

  }

  componentDidMount(){

   services.gerData('sellers').then((res)=>{

       let sellersList;

       if(this.props.showAllSellers){

        sellersList=res

       }else{

        if(res.length>=8){

          sellersList = res.slice(0,8)

        }else{

          sellersList= res

        }

       }

       this.handleChange('sellers',sellersList)

   })

  }


  render(){

    return(

      <Container>
        {this.state.navigate.length>0 && (
          <Navigate to={this.state.navigate} replace={false}/>
        )}
        <Typography variant="h6">Shop By Sellers :</Typography>
        <Grid container spacing={2}>
        {
          this.state.sellers.map((i,index)=>{

            return <Grid item xs={12} md={4} key={index}
            >
              <Paper 
              onClick={()=>{

                this.handleChange('navigate','productBySeller/'+i.id)

              }}
              >
                <Typography align="center" variant="h5"
                style={{cursor:'pointer'}}
                >
                  {i.hotelName}
                </Typography>
              </Paper>
            </Grid>

          })
        }
        {
          !this.props.showAllSellers && (
           <Grid item xs={12} md={4} 
           >
             <Paper 
             onClick={()=>{

              this.handleChange('navigate','/sellers')

             }}
             >
              <Typography variant="h5" align="center"
               style={{cursor:'pointer'}}
              > See More</Typography>
             </Paper>
           </Grid>
          )
        }
        </Grid>
      </Container>

    )

  }

}

export default Sellers