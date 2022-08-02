import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/540x540sqr.png'
  


function GnHeader() {

    
   
    return (
        <div>
            <header className="main-header">
                <nav className="main-navbar">
                    <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
                    <ul className="left-navbar">                
                        
                        <li><Link to="/dashboard">Dashboard </Link></li>
                        
                        {/* <li><Link to="/quienesSomos">Quienes somos </Link></li> */}
                        {/* <li><Link to="/recetas/nuestrasRecetas">Nuestras Recetas </Link></li> */}
                    </ul>
                    
                </nav> 
                {/* <div className="secondary-navbar">
                    <div className="hamburguer-button">
                        <i className="fas fa-bars"></i> 
                    </div>
                    <form method="get" action="/product/search" className="search-bar">
                            <input type="text" placeholder="Busca aquí" name="search"/>                
                            <Link to="#" className="lupa"><i className="fas fa-beer"></i></Link>
                    </form> 
                    <div className="social-media-bar">
                        <Link to="https://api.whatsapp.com/send?phone=+5491128590700&text=Hola%20quiero%20una%20cerveza=)." target="_blank" className="redes2"><i className="fab fa-whatsapp"></i></Link>
                        <Link to="#" className="redes2"><i className="fab fa-facebook"></i></Link>
                        <Link to="https://instagram.com/chec.cerveceria?utm_medium=copy_link" target="_blank" className="redes2"><i className="fab fa-instagram"></i></Link>
                    </div>           
                </div> */}
        </header>
        </div>

     
    );
  }
  
  export default GnHeader;