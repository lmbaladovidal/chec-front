import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import imageHome from '../assets/images/guarda.png'

function GnHome() {

    const url= "http://localhost:3001/api/product/productDetail/4"
    const [product, setProduct] = useState([]);
    
	useEffect(()=>{
		console.log("Mount Component")
		fetch(url, {mode:'cors'})
		.then(response=> response.json())
		.then(response=>{
			console.log(response)
			setProduct(response.data)})
		.catch(error=>console.log(error))
	},[])



  return (
    <div >
    
    <section className="ind-top-test">
    
    <div className="right-content-test">
        <article className="art-3">
        <img src={imageHome} alt="imagen-home"/>
        <p>Cuando abrimos una cerveza <i>CHEC</i>, hecha con Calidad y para todos los gustos, es seguramente porque  estamos disfrutando un momento de placer, solos o acompañados de familia, amigos y anécdotas para compartir. Compartiendo una picada, un asado o una buena comida. Mientras disfrutamos, se pierde noción del tiempo y la sobremesa se hace más extensa.</p>
        <h3> Un aplauso para el anfitrión, y <i>CHEC </i>  te asegura un próximo encuentro... <i className="fas fa-beer"> </i>  </h3>
        </article>
    </div>
    </section>

    <section className="bottom-content">

   
    
        <article className="col-12 col-sm-6 col-lg-3 pd-product">
            <img className="pd-img-product" src={product.image} width="360" alt="beer"/>
            <div className="pd-datos-cerveza">
                <h4>{product.name}</h4>
                <h4>{product.price}</h4>
                <input type="hidden" value={product.id} name="IdProductToCart" />
                <button className="pd-seleccionar"><Link to="/product/productDetail/{product.id}" className="lg-a">Seleccionar</ Link></button>
                <button className="pd-add"><Link to="/sales/addShipingCart/{product.id}"  className="lg-a">Agregar al carrito</ Link></button>
            
                <button className="pd-admin"><Link to="/product/productAdmin/{product.id}" className="pd-admin-a">Modificar </ Link></button>
                
            </div>
        </article>

   

     
    </section>
    <div className="testDiv"></div>
    <div>
                <h2>{product.name}</h2>
                <h2>{product.price}</h2>
            </div>

    </div>
  );
}

export default GnHome;