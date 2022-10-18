import React, { useEffect, useState } from 'react'
import services from '../services/services'
import {Paper,Grid} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom'

function Categories(){

    const [loading,setLoading] = useState(true)

    const [categories,setCategories] = useState([])

    useEffect(()=>{

        services.gerData('categories').then((res)=>{

             setCategories(res)

             setLoading(false)
        }).catch((err)=>{

            alert(err)

        })

    },[])

    const navigate = useNavigate()

    const toPage=(id)=>navigate('/products/'+id)

    return(
        <Paper style={{marginTop:'10px'}}>
            <h2 style={{marginLeft:'10px'}}>Categories</h2>
            {
                loading?
                <Box sx={{ display: 'flex',justifyContent:'center',alignContent:'center' }}>
                        <CircularProgress />
                 </Box>
                :
                <Grid container item xs={12} md={12}>
                    {
                       categories.map((i,index)=>{

                        return <Grid item xs={6} md={4} key={index}
                        onClick={()=>toPage(i.id)}
                        >
                            <div style={{display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                                <img src={i.categoryImg} alt="" 
                                style={{width:'120px',borderRadius:'50px'}}
                                />
                                <h5>{i.categoryName}</h5>
                            </div>
                        </Grid>

                       })
                    }
                </Grid>
            }
        </Paper>
    )

}

export default Categories