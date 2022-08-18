//import {useState, useEffect} from 'react'

import BtnAddCart from './BtnAddCart'
//import '../App.css'
import '../StyleSheets/PdProduct.css'

function PdProducts(props) {
 
    return (
        <div className='text-center card col-xs-12 col-sm-6 col-md-4  my-2 mx-1  p-1 bg-light bg-opacity-10 border border-dark border-opacity-25 rounded-4 shadow p-3 mb-5 bg-body rounded'
         style={{width:"22rem"}} key={props.id}>
       
         <img className="card-img-top rounded-5 " src={props.image}  alt="beer"/>
            <div className='card-body bg-dark bg-opacity-10  border border-warning border-top-0 border-end-0 border-start-0 p-1' style={{justifyContent:"space-around"}}>
                <h5 className='card-title text-center '><b>{props.name}</b></h5>
            </div>
           
            
            <div className="card-body " style={{justifyContent:"space-around"}}>
                <h5 className='card-text'> ${props.price}</h5>    
            </div>

            <div className="card-body ">
            <BtnAddCart/>
                
            </div>

      
        

        </div>
       
    )
}

export default PdProducts