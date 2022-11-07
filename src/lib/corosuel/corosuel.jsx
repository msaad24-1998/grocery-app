import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function ImagesSlider({data})
{

    return (
        <Carousel
        interval={5000}
        animation='slide'
        timeout={2000}
        >
            {
                data.map( (item, i) => <Item key={i} img={item.imgUrl} page={item.page}/> )
            }
        </Carousel>
    )
}
function Item(props)
{

const navigate = useNavigate()

const toPage=(to)=>{
    navigate(to)
}
    return (
        <Paper style={{marginTop:'50px'}} onClick={()=>toPage(props.page)}>
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