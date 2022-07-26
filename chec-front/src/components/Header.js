import {Link} from 'react-router-dom';
import logo from '../assets/images/logo/540x540sqr.png'

function Header() {
    return (
      
        <header className="main-header">
            <nav className="main-navbar">
                <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
                <ul className="left-navbar">                
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/quienesSomos">Quienes somos </Link></li>
                    <li><Link to="/recetas/nuestrasRecetas">Nuestras Recetas </Link></li>
                </ul>
                <ul className="rigth-navbar">
                    <li>
                        <div className="pd-pc-links">
                            <Link to="/product/productPage" className="tienda-botton">Tienda</Link>
                            <Link to="/sales/productCart"><i className="fas fa-shopping-cart"></i></Link> 
                                            
                        </div>
                    </li>
                    <li>
                        <ul className="dropdown-menu-container">
                            {/* <% if (locals && locals.isLogged) { %> */}
                                <li>
                                    {/* <img src="/images/avatars/<%= locals.userLogged.avatar %>" alt="avatar"/>  */}
                                    {/* <a><%= locals.userLogged.name %></a> */}
                                    
                                    <ul className="dropdown-menu">
                                        <li><a href="/users/profile">Mi perfil</a></li>
                                        <li><a href="/users/logout">Salir</a></li>
                                    </ul>
                                </li>
                            {/* <% } else if(locals && !locals.isLogged){ %> */}
                                <li><a href="/users/login">Ingresá <i className="fas fa-sign-in-alt"></i></a></li>
                            {/* <% } else {%>
                                <li><span>No hay locals!</span></li>
                            <% } %> */}
                        </ul>
                    </li>
                </ul>
            </nav> 
            <div className="secondary-navbar">
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
            </div>
        </header>

     
    );
  }
  
  export default Header;