import { Link} from 'react-router-dom';

import logo from '../assets/images/logo/540x540sqr.png'



function GnFooter() {

    return (
        <div>
            <footer>
                <div className="main-footer">
                    <div className="div-content-logoFooter">
                        <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>  
                    </div>

                    <ul className="footer-links">
                        <li>Enlaces</li>
                        <li><Link to="/product/productPage">Tienda </Link></li>
                        <li><Link to="/quienesSomos">Quienes somos </Link></li>
                        <li><Link to="/recetas/nuestrasRecetas">Nuestras Recetas </Link></li>
                    </ul>

                    <ul className="footer-social-media">
                        <li>Contacto</li>
                        <li><Link to="https://api.whatsapp.com/send?phone=+5491128590700&text=Hola%20quiero%20una%20cerveza=)." target="_blank">  +54 9 11 12344567<i className="fab fa-whatsapp"></i></Link></li>
                        <li><Link to="https://instagram.com/chec.cerveceria?utm_medium=copy_link" target="_blank"> @cervezaChec<i className="fab fa-instagram"></i></Link></li>
                        <li><Link to="" >  /checCerveceria<i className="fab fa-facebook"></i></Link></li>
                        <li><Link to="" > chec@cerveza.com.ar<i className="far fa-envelope"></i></Link></li>
                    </ul>
                </div>
                

                <div className="copyright">
                    Copyright © 2022 - All rights reserved - Created by Grupo 8
                </div>

                

            </footer>
        </div>

     
    );
  }
  
  export default GnFooter;