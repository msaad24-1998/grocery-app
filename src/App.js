import logo from './logo.svg';
import './App.css';
import routes from './routes';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  useEffect(()=>{

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
