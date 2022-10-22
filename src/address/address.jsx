import React,{useEffect, useState} from "react";
import { Paper,Grid,TextField, Button } from "@mui/material";
import services from "../services/services";
import { Navigate, useNavigate } from "react-router-dom";

function Address(){

    let state={
        name:'',
        no:'',
        address:'',
        landmark:'',
        customerId:''
    }

    const [details,setDetails]=useState(state)

    const handleChange=(k,e)=>{

        setDetails(prev=>({
            ...prev,
            [k]:e
        }))

    }

    const navigate = useNavigate()

    useEffect(()=>{

        let user = localStorage.getItem('user')

        user = JSON.parse(user)||{}

        if(user!==null){

            handleChange('customerId',user.id)

        }

    },[])

    const submit = ()=>{

        if(details.name.length>4&&details.no.length===10&&details.address.length>4&&
            details.landmark.length>4){

                services.addData('addresses',details).then((res)=>{

                    navigate('/checkout')

                })


            }else{

                alert('All Details Required ')

            }

    }

    return(
        <>
          <Paper>
            <h3 style={{textAlign:'center'}}>Add Address</h3>
             <Grid container item xs={12} md={12} spacing={2}>
                <Grid item xs={12} md={12}>
                    <TextField label='Name'
                    size='small'
                    required
                    fullWidth
                    value={details.name}
                    onChange={(e)=>{handleChange('name',e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField label='No'
                    size='small'
                    required
                    type='number'
                    fullWidth
                    value={details.no}
                    onChange={(e)=>{handleChange('no',e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField label='Address'
                    size='small'
                    required
                    fullWidth
                    value={details.address}
                    onChange={(e)=>{handleChange('address',e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField label='Landmark'
                    size='small'
                    required
                    fullWidth
                    value={details.landmark}
                    onChange={(e)=>{handleChange('landmark',e.target.value)}}
                    />
                </Grid>
                <Grid container item xs={12} md={12} spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Button variant="contained" fullWidth>Cancel</Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button variant="contained" fullWidth 
                        onClick={submit}
                        >Save</Button>
                    </Grid>
                </Grid>
             </Grid>
          </Paper>
        </>
    )

}

export default Address