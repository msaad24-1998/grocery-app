import React,{useEffect,useState} from "react";
import ImagesSlider from "../lib/corosuel/corosuel";
import Categories from "../categories/categories";
import services from '../services'
import AppBarr from "../appbar";
import CheckoutBar from "../checkoutBar";
import TemporaryDrawer from "../sidebar";
import Sellers from "../sellers";

function Home(){

    const [sliderImg,setSliderImg] = useState([])

      useEffect(()=>{

        services.gerData('corousuel1','active').then((res)=>{
          setSliderImg(res)
        })

      },[])


    return(
        <>
           <AppBarr/>
           <ImagesSlider data={sliderImg}/>
           <Categories/>
           <Sellers showAllSellers={false}/>
           <CheckoutBar/>
        </>
    )

}

export default Home