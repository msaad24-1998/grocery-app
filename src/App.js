import logo from './logo.svg';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router,createBrowserRouter,Route,Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Footer from './footer/footer';

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

        {
 
            path==='/'||path==='/products/:categoryId'||'/productDetails/:productId'?
            <Footer/>   
            :null           

        }
       </Router>
    </>
  );
}

export default App;
