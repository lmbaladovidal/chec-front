import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function PdProducts(props) {
    return (
        <article className="col-12 col-sm-6 col-lg-3 pd-product"  key={props.id}>
        <img className="pd-img-product" src={props.image} width="360" alt="beer"/>
        <div className="pd-datos-cerveza">
            <h4>{props.name}</h4>
            <h4>{props.price}</h4>
            <input type="hidden" value={props.id} name="IdProductToCart" />
            <button className="pd-seleccionar"><Link to="/product/productDetail/{props.id}" className="lg-a">Seleccionar</Link></button>
            <button className="pd-add"><Link to="/sales/addShipingCart/{props.id}"  className="lg-a">Agregar al carrito</Link></button>
            <button className="pd-admin"><Link to="/product/productAdmin/{props.id}" className="pd-admin-a">Modificar </Link></button>        
        </div>
        </article>
    )
}

export default PdProducts