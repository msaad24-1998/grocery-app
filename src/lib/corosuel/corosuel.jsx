import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function ImagesSlider({data})
{

    return (
        <Carousel
        interval={5000}
        animation='slide'
        timeout={2000}
        >
            {
                data.map( (item, i) => <Item key={i} img={item.imgUrl} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{marginTop:'50px'}}>
             <img src={props.img} alt=""  
             style={{
                width:'95%',
                marginLeft:'2.5%',
                marginTop:'10px',
                borderRadius:'20px'
             }}/>
        </Paper>
    )
}