import React from "react";
import CardGrid from "../Homecomp/imgcard";
import Topimg from "../Homecomp/topimg";
import ImageGrid from "../Homecomp/imggallery";
import Tips from "../Homecomp/tips";



function Home(){
    return(
        <>
          
          <Topimg/>
          <CardGrid/>
          <ImageGrid/>
          <Tips/>
         
        </>
    );
  }
  
  export default Home;