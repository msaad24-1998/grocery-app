import logo from './logo.svg';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router,createBrowserRouter,Route,Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Snackbar,Alert,Typography } from '@mui/material';
import { Box } from '@mui/system';
import {IconButton} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckoutBar from './checkoutBar';

function App() {

  const [path,setPathName] = useState('/')

  useEffect(()=>{

    setPathName(window.location.pathname)

    let cart = localStorage.getItem('cart')

     cart = JSON.parse(cart)

     if(cart===null){

      localStorage.setItem('cart',JSON.stringify([]))

     }

  },[])


  return (
    <>
       <Router>
        <Routes>

               {
                routes.map((i,index)=>{

                  return <Route path={i.path} key={index} element={i.component}/>

                })                                                             
               }           
        </Routes>
       </Router>
    </>
  );
}

export default App;
