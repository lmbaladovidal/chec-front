import { Link} from 'react-router-dom';
import React from 'react'
import '../StyleSheets/BtnAddCart.css'


const BtnAddCart = () => {
    const hidden = {
        display: 'none',
      }
    return (
     
        <div className='container vstack gap-0 col-md-5 mx-auto' >
        <div className='mb-3  ' type="button">
            {/* <button type="button" className="text-dark mb-3 border-top-0 border-start-0 border-end-0 rounded-0 border-bottom-0"> */}
            <Link to="/product/productDetail/{props.id}" className="bg-light " /> <strong>Ver detalles</strong> 
            {/* </button> */}
        </div>           
            <button type="button" className="btn btn-outline-warning mb-3 text-dark">
            <Link to="/sales/addShipingCart/{props.id}" />Agregar a carrito
            </button>
            
            <button type="button" className="btn  btn-outline-danger mb-3 btn-sm" style={hidden} >
            <Link to="/product/productAdmin/{props.id}"/> Modificar
            </button>
        </div>   
       
    )
}

export default BtnAddCart;