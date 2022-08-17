import { Link} from 'react-router-dom';
import React from 'react'
import '../StyleSheets/BtnAddCart.css'


const BtnAddCart = () => {
    const hidden = {
        display: 'none',
      }
    return (
     
        <div className='container' >
            <button type="button" className="btn btn-outline-secondary text-dark mb-3 ">
            <Link to="/product/productDetail/{props.id}" />Seleccionar</button>
                       
            <button type="button" className="btn btn-outline-warning mb-3 text-dark">
            <Link to="/sales/addShipingCart/{props.id}" />Agregar a Carrito
            </button>
            
            <button type="button" className="btn  btn-outline-danger mb-3 btn-sm" style={hidden} >
            <Link to="/product/productAdmin/{props.id}"/> Modificar
            </button>
        </div>   
       
    )
}

export default BtnAddCart;