import { Link } from 'react-router-dom';
//import logo from '../assets/images/logo/540x540sqr.png';
import GnSearchBar from '../components/GnSearchBar.js'
import logo2 from '../assets/images/logo/checMinimTransp.png'
import '../StyleSheets/GnHeader.css';



function GnHeader() {
  const align = {
    alignItems:'flex-start'
  }

  return (
    <div  >
          <nav className="navbar navbar-expand-md navbar-light bg-black">
          
          <div className="container-fluid" >
            <Link to="/"><img src={logo2} className="navbar-brand" alt="Chec" width="100%" height="110" /></Link>
         
            <button type="button" className="navbar-toggler bg-light " data-bs-toggle="collapse" 
            data-bs-target="#menu" aria-expanded="false" aria-controls="menu" >
                    <span className="navbar-toggler-icon"></span>
            </button>

            
            <div id="menu" className="collapse navbar-collapse">

              <ul className="navbar-nav ms-3 container">
              
                <li className="nav-link"><Link to="/" className='navbarRT nav-link text-light'>Home </Link></li>
                <li className="nav-link "><Link to="/quienesSomos" className='navbarRT nav-link text-light'>Quienes somos </Link></li>
                <li className="nav-link "><Link to="/recetas/nuestrasRecetas" className='navbarRT nav-link text-light'>Nuestras Recetas </Link></li>
                <li className="nav-link "><Link to="/product/productPage" className="navbarRT nav-link text-light ">Tienda</Link> </li>
                <li className="nav-link "><Link to="/sales/productCart" className="navbarRT nav-link text-light"><i className="fas fa-shopping-cart"></i></Link> </li>
              </ul>

              
              
              <ul className="navbar-nav navbar-collapse " style={align} >

                {/* if (locals && locals.isLogged) { */}
                  
                <span className='nav-link navbar-toggler navbar-collapse '
                  type="button"  
                  data-bs-toggle="collapse" 
                  data-bs-target="#MenuNav2"
                  aria-controls="MenuNav2" > 
                  <img src="/images/avatars/<%= locals.userLogged.avatar %>" alt="--" className='nav-link text-warning '/>
                  </span>
                                

                {/* <a> locals.userLogged.name </a>  */}

                  <ul className=" text-light d " data-bs-toggle="collapse " data-bs-target="#MenuNav2">

                      <li  id="MenuNav2" className="text-light  dropdown-item ms-3" ><Link to="/dashboard"  >Dashboard </Link>
                      </li>
                      <li id="MenuNav2" className="text-light dropdown-item ms-3">
                        <Link to="/users/profile" >Mi perfil </Link>
                      </li>
                      
                      <li id="MenuNav2" className="text-light  dropdown-item ms-3">
                        <Link to="/users/logout" >Salir</Link>
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
        <div className="row">
        <GnSearchBar/>
        
        </div>



    </div>


  );
}

export default GnHeader;

