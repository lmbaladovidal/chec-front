//import {useState, useEffect} from 'react'

import BtnAddCart from './BtnAddCart'
//import '../App.css'
import '../StyleSheets/PdProduct.css'

function PdProducts(props) {
 
    return (
        <div className='card col-xs-12 col-sm-6 col-md-4  my-2 mx-2 text-center p-1 bg-light bg-opacity-10 border border-dark border-opacity-25 rounded-4'
         style={{width:"22rem"}} key={props.id}>
       
         <img className=" card-img-top rounded" src={props.image}  alt="beer"/>
            <div className='card-body bg-dark bg-opacity-10 '>
                <h5 className='card-title text-center '><b>{props.name}</b></h5>
            </div>
           
            
            <div className="card-body ">
                <h5 className='card-text'style={{justifyContents:"space-around"}}> ${props.price}</h5>    
            </div>

            <div className="card-footer bg-dark bg-opacity-10">
            <BtnAddCart/>
                
            </div>

      
        

        </div>
       
    )
}

export default PdProducts