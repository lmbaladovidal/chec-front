//import {useState, useEffect} from 'react'

import BtnAddCart from './BtnAddCart'
import '../App.css'

function PdProducts(props) {
    
    return (
        <div className='container col-xs-12 col-sm-6 col-md-4'>
        <article className="pd-products"  key={props.id}>
        <img className="pd-img-productRT" src={props.image}  alt="beer"/>
            <div className="pd-datos-cerveza">
                <h5><b>{props.name}</b></h5>
                <h6 className='text-secondary'>$ {props.price} </h6>
            </div>
        
        <div className="container-fluid ">
            <div className="row">
            <BtnAddCart/>
            </div>
        </div>

        </article>
        </div>
    )
}

export default PdProducts