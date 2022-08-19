import { Link} from 'react-router-dom';
import React from 'react'
import '../StyleSheets/BtnAddCart.css'


function BtnAddCart(props) {


    return (
     
        <div className='container vstack gap-0 col-md-5 mx-auto' >
        <div className='mb-3  ' type="button">
            {/* <button type="button" className="text-dark mb-3 border-top-0 border-start-0 border-end-0 rounded-0 border-bottom-0"> */}
            <Link to="/product/productDetail/{props.id}" className="bg-light " /> <strong>{props.secondName}</strong> 
            {/* </button> */}
        </div>           
            <button type="button" className="btn btn-outline-warning mb-3 text-dark">
            <Link to="/sales/addShipingCart/{props.id}" />{props.name}
            </button>
            
            <button type="button" className="btn  btn-outline-danger mb-3 btn-sm" style={{display:"none"}}>
            <Link to="/product/productAdmin/{props.id}"/> {props.admin}
            </button>
        </div>   
       
    )
}

export default BtnAddCart;