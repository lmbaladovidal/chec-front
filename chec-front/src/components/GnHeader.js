import { Link } from 'react-router-dom';
//import logo from '../assets/images/logo/540x540sqr.png';
import GnSearchBar from '../components/GnSearchBar.js'
import logo2 from '../assets/images/logo/checMinimTransp.png'
import Avatar from '../assets/images/fav-icon.png'
import '../StyleSheets/GnHeader.css';



function GnHeader() {


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
              
                <li className="nav-link "><Link to="/" className=' nav-link text-light link-warning' >Home </Link></li>
                <li className="nav-link "><Link to="/quienesSomos" className='nav-link text-light link-warning'>Quienes somos </Link></li>
                <li className="nav-link "><Link to="/recetas/nuestrasRecetas" className=' nav-link text-light link-warning'>Nuestras Recetas </Link></li>
                <li className="nav-link "><Link to="/product/productPage" className=" nav-link text-light link-warning ">Tienda</Link> </li>
                
                <li className="nav-link position-relative"  >
                  <Link to="/sales/productCart" className=" nav-link text-light link-warning">
                    <i className="fas fa-shopping-cart position-relative" width="25px"></i>
                    <span className="position-absolute top-1 right-start-100 translate-middle badge border border-light rounded-pill bg-danger p-1">
                    <span className="visually-hidden"></span>
                    </span>
                  </Link> 
                </li>

              </ul>

              
              
              <ul className="navbar-nav "  >

                {/* if (locals && locals.isLogged) { */}
                  
                <span className='nav-link navbar-toggler navbar-collapse '
                  type="button"  
                  data-bs-toggle="collapse" 
                  data-bs-target="#MenuNav2"
                  aria-controls="MenuNav2" 
                  aria-expanded="true" 
                  style={{justifyContent:"end"}} > 

                  {/* <img src="/images/avatars/<%= locals.userLogged.avatar %>" alt="--" className='nav-link text-warning '/> */}
                  <img src={Avatar} width="10%" alt="--" className="rounded-circle rounded-5 link-warning"/>
                  </span>
                                
                {/* <a> locals.userLogged.name </a>  */}


                  <ul className="nav-link " data-bs-toggle="collapse " data-bs-target="#MenuNav2">

                      <li  id="MenuNav2" className="dropdown-item ms-3" >
                        <Link to="/dashboard" className='nav-link text-light link-warning'> Dashboard </Link>
                      </li>
                      <li id="MenuNav2" className="text-light dropdown-item ms-3">
                        <Link to="/users/profile" className='nav-link text-light link-warning'> Mi perfil </Link>
                      </li>
                      
                      <li id="MenuNav2" className="text-light  dropdown-item ms-3">
                        <Link to="/users/logout" className='nav-link text-light link-warning'> Salir </Link>
                      </li>
                  </ul>
{/*                              
                } else if(locals && !locals.isLogged) {
               <li className='nav-link text-light '><Link to="/users/login" className=" navbarRT nav-link text-light ">Ingresá <i className="fas fa-sign-in-alt "></i></Link></li> 
               } else { 
               <li><span>No hay locals!</span></li> 
                } */}

              </ul>

            </div>

          </div>
        
        </nav>
       
        <GnSearchBar/>
           
    </div>


  );
}

export default GnHeader;

