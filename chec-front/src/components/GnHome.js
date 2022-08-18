import {useState, useEffect} from 'react'
//import {Link} from 'react-router-dom'
import imageHome from '../assets/images/guarda.png'
import '../StyleSheets/GnHome.css'
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
    
    <section className="ind-top-test ">
        <div className='container-fluid'>
        <div className="right-content-test ">
            <article className="art-4 ">
            <img src={imageHome} alt="imagen-home"/>
            <h2>Cuando abris una cerveza <i>CHEC</i>, seguramente estás disfrutando de un buen momento con vos, o con familia, amigos y anécdotas para contar.</h2>
            
            <h3><>Una picada, asado o cualquier comida de por medio, la noción del tiempo se pierde y se extiende la sobremesa..</>
            ¡ Un aplauso para el anfitrión ! !</h3>
            <h2><strong>   <i>CHEC </i>  te asegura un próximo encuentro... <i className="fas fa-beer"> </i> </strong> </h2>
            </article>
        </div>
        </div>
    </section>
    
    <div className='container-fluid row '>
        <div className='row mx-auto' style={{justifyContent:"center"}}>
       
                {products.length === 0 && <p>Cargando</p>}
                {
                    products.map((product, i) => {
                        return (
                            
                        <PdProducts                                     
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image} key={i}/>
                         
                          
                        )
                        
                    })
                        
                }  
        
        </div>
    </div>
    
    </div>
  );
}

export default GnHome;