import { Link} from 'react-router-dom';
import logo from '../assets/images/logo/540x540sqr.png'



function GnFooter() {

    return (
        <div className=' '>
          
<div>
                <div className="navbar navbar-expand-md navbar-light bg-black p-3 border-top border-warning border-3"  style={{justifyContent:"space-between"}}>
                    <div className=""style={{justifyContent:"space-around"}}>
                        <Link to="/"><img src={logo} className="navbar-brand" alt="logo" width="100" height="50%"/></Link>  
                    </div>

                    <ul className="" >
                        <li className="text-white"><>Enlaces</></li>
                        <li><Link to="/product/productPage"className='nav-link text-light link-warning' >Tienda </Link></li>
                        <li><Link to="/quienesSomos" className='nav-link text-light link-warning' >Quienes somos </Link></li>
                        <li><Link to="/recetas/nuestrasRecetas" className='nav-link text-light link-warning'>Nuestras Recetas </Link></li>
                    </ul>

                    <ul className="" >
                        <li className="text-white nav-link text-light ">Contacto</li>
                        <li><Link to="https://api.whatsapp.com/send?phone=+5491128590700&text=Hola%20quiero%20una%20cerveza=)." target="_blank" className='nav-link text-light link-warning'>  +54 9 11 12344567 <i className="bi bi-whatsapp  link-warning"></i></Link></li>
                        <li><Link to="https://instagram.com/chec.cerveceria?utm_medium=copy_link" target="_blank" className='nav-link text-light link-warning'> @cervezaChec <i className="bi bi-instagram  link-warning"></i></Link></li>
                        <li><Link to="" className='nav-link text-light link-warning'> /checCerveceria <i className="bi bi-facebook link-warning"></i></Link></li>
                        <li><Link to="" className='nav-link text-light link-warning'> chec@cerveza.com.ar  <i className="bi bi-envelope link-warning"></i></Link></li>
                    </ul>
                </div>
</div>
                

                <div className="copyright">
                    Copyright © 2022 - All rights reserved - 
                </div>

                

            
        </div>

     
    );
  }
  
  export default GnFooter;