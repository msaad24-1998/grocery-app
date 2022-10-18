import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Grid } from '@mui/material';
import AddToCartButton from '../addCartButton/addtocartButton';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {

  const navigate = useNavigate()

  const detailsPage=id=>{
    console.log(id);
    navigate('/productdetails/'+id)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.productImg}
        alt="green iguana"
        onClick={()=>detailsPage(product.id)}
      />
      <CardContent>
        <Box display={'flex'} flexDirection='row' justifyContent={'space-between'}> 
        <Typography gutterBottom variant="h6" component="div" style={{width:'60%'}}>
          {product.productName}
        </Typography>
        <Box display={'flex'} flexDirection='row' justifyContent={'space-between'}>
        <Box display={'flex'} flexDirection='row' justifyContent={'space-between'}>
            <CurrencyRupeeIcon/>
          <Typography gutterBottom variant="h6" component="div">
            {product.productDiscountedPrice}
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection='row' justifyContent={'space-between'}>
            <CurrencyRupeeIcon/>
          <Typography gutterBottom variant="h6" component="div">
           <strike> {product.productOriginalPrice}</strike>
          </Typography>
        </Box>
        </Box>
        </Box>
        <Grid item container xs={12} md={12}>
            <Grid item xs={3} md={5}>
              <Typography gutterBottom variant="h6" component="div">
               {product.productQty}
              </Typography>
            </Grid>
            <Grid item xs={9} md={7}>
                   <AddToCartButton id={product.id}
                   maxQty={product.productMaxQty}
                   inStock={product.productInStock}
                   />
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
