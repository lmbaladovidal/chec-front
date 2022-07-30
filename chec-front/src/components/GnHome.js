import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import imageHome from '../assets/images/guarda.png'
import PdProducts from './PdProducts'

function GnHome() {

    const url= "http://localhost:3001/api/product/productList"
    const [products, setProduct] = useState([]);
    
	useEffect(()=>{
		console.log("Mount Component")
		fetch(url, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			console.log(response.data.cervezas)

			setProduct(response.data.cervezas)})         
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
        {products.length === 0 && <p>Cargando</p>}
        {
            products.map((product, i) => {
                return (
                    <PdProducts
                        id={products.id}
                        name= {product.name}
                        price={product.price}
                        image={product.image}
                    />                   
                )
            })
        }           
    </section>
    
    </div>
  );
}

export default GnHome;