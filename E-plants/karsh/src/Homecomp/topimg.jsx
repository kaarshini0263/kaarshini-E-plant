import React from 'react';
import { Link } from 'react-router-dom';
import Plants from '../Pages/plants/Plants';
function Topimg() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="image-hover-container">
            <img className="pimg" src='https://media.istockphoto.com/id/1282486332/photo/farmers-hand-watering-a-young-plant-with-morning-light.jpg?s=612x612&w=0&k=20&c=S7ziPKlN62kyEnvwQmd1IfQtGpOE1Qq-vhimRTz2Emw=' alt=""></img>
            <div className="hover-text">Outdoor plants</div>
            <div className="button"> 
                  <Link to="/plants" element={<Plants/>}style={{textDecoration:'none',color:'black',marginLeft:40}}>Plants-trees</Link>
                </div>
          </div>
          
         
          <div className="image-hover-container">
            <img className="pimg" src='https://media.istockphoto.com/id/959697442/photo/farmer-giving-granulated-fertilizer-to-young-tomato-plants.jpg?s=612x612&w=0&k=20&c=4sewLXboXwTJY9kAXcyjw0GAwN33XzEGVjln597d_aE=' alt=""></img>
            <div className="hover-text">Fertilizers</div>
            <div className="button"> 
                  <Link to="/plants" element={<Plants/>}style={{textDecoration:'none',color:'black',marginLeft:40}}>Organic</Link>
                </div>
          </div>
          
          <div className="image-hover-container">
            <img className="pimg" src='https://media.istockphoto.com/id/1172788151/photo/indian-borage-plectranthus-amboinicus.jpg?s=612x612&w=0&k=20&c=Ut4V9GmZZZviGRQy6nVCgiKsX6daepDRZV8-_s07YiQ=' alt=""></img>
            <div className="hover-text">Medicinal plant</div>
            <div className="button"> 
                  <Link to="/plants" element={<Plants/>}style={{textDecoration:'none',color:'black',marginLeft:40}}>Medicinal </Link>
                </div>
          </div>
          
          <div className="image-hover-container">
            <img className="pimg" src='https://media.istockphoto.com/id/2188546637/photo/succulent-plants-in-decorative-pots-for-home-decor.jpg?s=612x612&w=0&k=20&c=nS-Lz-i_4t_Dbu5g8VcD8J9nR-g41n0iy3_fmPyQdgg=' alt=""></img>
            <div className="hover-text">Indoor pot plants</div>
            <div className="button"> 
                  <Link to="/plants" element={<Plants/>}style={{textDecoration:'none',color:'black',marginLeft:40}}>Mini plants</Link>
                </div>
          </div>
          
          <div className="image-hover-container">
            <img className="pimg" src='https://media.istockphoto.com/id/1200311350/photo/dried-food-harvest-and-protein-from-plant-concept-set-of-small-hessian-sacks-filled-with.jpg?s=612x612&w=0&k=20&c=wxrLFTAY51EZkzPROjNbkAjMNENqimKKpRL1fmR3de4=' alt=""></img>
            <div className="hover-text">Plant seed</div>
            <div className="button"> 
                  <Link to="/plants" element={<Plants/>}style={{textDecoration:'none',color:'black',marginLeft:40}}>Seed Varities</Link>
                </div>
          </div>
          
          <div className="image-hover-container">
            <img className="pimg" src='https://media.istockphoto.com/id/104821695/photo/tools-hanging-on-wall-of-garden-shed.jpg?s=612x612&w=0&k=20&c=uSGN_Wzb45ExDnXJ6ggrT7QOL3m5KS_FSArk6RbNY0s=' alt=""></img>
            <div className="hover-text">Gardening tools</div>
            <div className="button"> 
                  <Link to="/plants" element={<Plants/>}style={{textDecoration:'none',color:'black',marginLeft:40}}>Tools</Link>
                </div>
          </div>
          
          
          </div>
        </div>
      </div>
    
  );
}

export default Topimg;