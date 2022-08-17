import { Link } from 'react-router-dom';
//import logo from '../assets/images/logo/540x540sqr.png';
import logo2 from '../assets/images/logo/checMinimTransp.png'
import '../StyleSheets/GnHeader.css';



function GnHeader() {

  return (
    <div  >
          <nav className="navbar navbar-expand-md navbar-light bg-black">
          
          <div className="container-fluid" >
            <Link to="/"><img src={logo2} className="navbar-brand" alt="Chec" width="100%" height="110" /></Link>
         
            <button type="button" className="navbar-toggler bg-light" data-bs-toggle="collapse" 
            data-bs-target="#menu" aria-expanded="false" aria-controls="menu" >
                    <span className="navbar-toggler-icon"></span>
            </button>

            
            <div id="menu" className="collapse navbar-collapse">

              <ul className="navbar-nav ms-3 container">
              
                <li className="nav-link"><Link to="/" className='navbarRT nav-link text-warning'>Home </Link></li>
                <li className="nav-link text-light "><Link to="/quienesSomos" className='navbarRT nav-link text-light'>Quienes somos </Link></li>
                <li className="nav-link text-light "><Link to="/recetas/nuestrasRecetas" className='navbarRT nav-link text-light'>Nuestras Recetas </Link></li>
                <li className="nav-link text-light "><Link to="/product/productPage" className="navbarRT nav-link text-light ">Tienda</Link> </li>
                <li className="nav-link text-light "><Link to="/sales/productCart" className="navbarRT nav-link text-light"><i className="fas fa-shopping-cart"></i></Link> </li>
              </ul>

              
              
              <ul className="navbar-nav container-fluid navbar-collapse ms-3">

                {/* if (locals && locals.isLogged) { */}
                  
                <span className='nav-link navbar-toggler ms-0 navbar-collapse dropdown-menu'
                  type="button"  
                  data-bs-toggle="collapse" 
                  data-bs-target="#MenuNav2"
                  aria-expanded="true" aria-controls="MenuNav2" > 
                  <img src="/images/avatars/<%= locals.userLogged.avatar %>" alt="Avatar" className='text-light'/>
                  </span>
                                      

                {/* <a> locals.userLogged.name </a>  */}
                  
                  
              

                  <ul className=" text-light " data-bs-toggle="collapse " data-bs-target="#MenuNav2">

                      <li id="MenuNav2" className="dropdown-item  ">
                        <Link to="/users/profile" >Mi perfil </Link>
                      </li>
                      
                      <li id="MenuNav2" className="dropdown-item ">
                        <Link to="/users/logout" >Salir</Link>
                      </li>
                      <li  id="MenuNav2" className="dropdown-item  "><Link to="/dashboard"  >Dashboard </Link>
                      </li>
                  </ul>
                             
                {/* } else if(locals && !locals.isLogged) { */}
              {/* <li className='nav-link text-light '><Link to="/users/login" className=" navbarRT nav-link text-light ">Ingresá <i className="fas fa-sign-in-alt "></i></Link></li> */}
              {/* } else { */}
              {/* <li><span>No hay locals!</span></li> */}
              {/* }  */}

            </ul>

             </div>

          </div>
        


        </nav>



        <div className="secondary-navbar border-3 border-bottom border-warning">
          {/* <div className="hamburguer-button collapse-sm">
            <i className="fas fa-bars"></i>
          </div> */}
          <form method="get" action="/product/search" className="search-bar">
            <input type="text" placeholder="Busca aquí" name="search" />
            <Link to="#" className="lupa"><i className="fas fa-beer"></i></Link>
          </form>
          <div className="social-media-bar">
            <Link to="https://api.whatsapp.com/send?phone=+5491128590700&text=Hola%20quiero%20una%20cerveza=)." target="_blank" className="redes2"><i className="fab fa-whatsapp"></i></Link>
            <Link to="#" className="redes2"><i className="fab fa-facebook"></i></Link>
            <Link to="https://instagram.com/chec.cerveceria?utm_medium=copy_link" target="_blank" className="redes2"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
  
    </div>


  );
}

export default GnHeader;

