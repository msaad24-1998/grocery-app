import React,{useEffect,useState} from "react";
import ImagesSlider from "../lib/corosuel/corosuel";
import Categories from "../categories/categories";
import services from '../services'

function Home(){

    const [sliderImg,setSliderImg] = useState([])

      useEffect(()=>{

        services.gerData('corousuel1').then((res)=>{
          setSliderImg(res)
        })

      },[])

    return(
        <>
           <ImagesSlider data={sliderImg}/>
           <Categories/>
        </>
    )

}

export default Home