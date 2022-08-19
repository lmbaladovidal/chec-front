import {useState, useEffect} from 'react'
//import {Link} from 'react-router-dom'
import imageHome from '../assets/images/guarda.png'
import '../StyleSheets/GnHome.css'
import PdProducts from './PdProducts'
import GnHomeCard from './GnHomeCard'


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
         <GnHomeCard
         title= "Cuando Abris una CHEC..."
         line1={<strong><em>¡ Disfrutala !</em></strong>}
         line2="con amigos "
         line3="con familia"
         line4="o sólo para vos..."/>
         
        <div className='' >
            
            {/* <article className="card" style={{width:"35%", opacity:"75%"}}>
            
            {/* <img src={imageHome} alt="imagen-home" className='card-img-top' width="80" /> */}
{/*            
            <div className='card-body my-1 row'>
            <p className="card-text text-center">Cuando abris una cerveza <i>CHEC</i>, seguramente estás disfrutando de un buen momento con vos, o con familia, amigos y anécdotas para contar.</p>
            
            <p className="card-text text-center">Una picada, asado o cualquier comida de por medio, la noción del tiempo se pierde y se extiende la sobremesa... </p>
            <p className="card-text text-center"> <h4><em>¡ Un aplauso para el anfitrión !</em></h4></p>
            </div>
            <h3 className='text-center'><strong>   <i>CHEC </i>  te asegura un próximo encuentro... </strong> </h3>
            <h3 className='text-center'><strong> <i className="fas fa-beer"> </i> <i class="bi bi-emoji-wink"></i></strong> </h3>
            </article> */} 
        
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