import { Paper,Grid } from '@mui/material'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SellIcon from '@mui/icons-material/Sell';

const style={
    link:{
        color:'white',
        textDecoration:'none'
    }
}


function Footer(){

    return(

        <Paper style={{backgroundColor:'black',color:"white"}}>
            <h3>Links</h3>
            <Grid container item xs={12} md={12}>
                <Grid item xs={12   } md={4}>
                    <Grid container item xs={12} md={12}  alignitem={'center'}>
                         <Grid item xs={4} md={4}>
                            <CodeIcon/>
                         </Grid>
                         <Grid item xs={8} md={8}>
                            <a href='https://github.com/Amir-Pathan/grocery-app' target='_blank' style={style.link}>
                             Code</a>
                         </Grid>
                    </Grid>
                    <Grid container item xs={12} md={12}  alignitem={'center'}>
                         <Grid item xs={4} md={4}>
                            <GitHubIcon/>
                         </Grid>
                         <Grid item xs={8} md={8}>
                            <a href='https://github.com/Amir-Pathan' target='_blank' style={style.link}>
                             GitHub</a>
                         </Grid>
                    </Grid>
                    <Grid container item xs={12} md={12}  alignitem={'center'}>
                         <Grid item xs={4} md={4}>
                            <LinkedInIcon/>
                         </Grid>
                         <Grid item xs={8} md={8}>
                            <a href='https://www.linkedin.com/in/amir-khan-4523b31b1/' target='_blank' style={style.link}>
                             LinkedIn</a>
                         </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} md={4}>
                     <Grid container item xs={12} md={12}  alignitem={'center'}>
                         <Grid item xs={4} md={4}>
                            <HomeIcon/>
                         </Grid>
                         <Grid item xs={8} md={8}>
                            <a href='' target='_blank' style={style.link}>
                             Home</a>
                         </Grid>
                    </Grid>
                    <Grid container item xs={12} md={12}  alignitem={'center'}>
                         <Grid item xs={4} md={4}>
                            <InfoIcon/>
                         </Grid>
                         <Grid item xs={8} md={8}>
                            <a href='' target='_blank' style={style.link}>
                             About Us</a>
                         </Grid>
                    </Grid>
                    <Grid container item xs={12} md={12}  alignitem={'center'}>
                         <Grid item xs={4} md={4}>
                            <SellIcon/>
                         </Grid>
                         <Grid item xs={8} md={8}>
                            <a href='' target='_blank' style={style.link}>
                             Sell With Us</a>
                         </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} md={4}></Grid>
            </Grid>
        </Paper>

    )

}

export default Footer