import React, { useEffect, useState } from "react";
import { AppBar,Toolbar,Grid,Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {IconButton} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import services from "../services/services";
import TemporaryDrawer from "../sidebar";

function AppBarr(){

    const [isLoggedIn,setIsLoggedIn] = useState(true)

    const [isOpen,setIsOpen] = useState(false)


    useEffect(()=>{
       
        checkAuth()

    },[])

    const handleOpen =(open)=> setIsOpen(open)


    const checkAuth=()=>{

        services.auten().then((res)=>{

            setIsLoggedIn(true)

        }).catch((err)=>setIsLoggedIn(false))
    }

    const login=()=>{

        services.autentication().then((res)=>{

            checkAuth()
        })

    }

    return(
        <>
        <AppBar style={{backgroundColor:"white",color:'black'}}>
            <Toolbar style={{display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
                <Box>
                    <Typography>Ak Grocery</Typography>
                </Box>
                <Box>
                    <IconButton onClick={login} disabled={isLoggedIn}>
                        <AccountCircleIcon/>
                    </IconButton>
                    <IconButton onClick={()=>handleOpen(true)}>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <TemporaryDrawer isOpen={isOpen} handleOpen={(open)=>handleOpen(open)}/>
        </>
    )

}

export default AppBarr