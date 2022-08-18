
import React, { Link } from 'react';
import '../StyleSheets/GnSearchBar.css'

function GnSearchBar() {

return(
    <div>

    <div className="container-fluid secondary-navbar border-3 border-bottom border-warning col-xs-12">
        
        <input class="container form-control form-control-sm ms-5 my-1 mt-2 " type="text" placeholder="Buscar" name='search' 
    aria-label=".form-control-sm example"/><i className="fas fa-beer my-2" > </i>
    
    {/* <form method="get" action="/product/search" className="search-bar">
        <input type="text" placeholder="Busca aquí" name="search" />
        </form>
        <div className="social-media-bar">
        <Link to="https://api.whatsapp.com/send?phone=+5491128590700&text=Hola%20quiero%20una%20cerveza=)." target="_blank" className="redes2"><i className="fab fa-whatsapp"></i></Link>
        <Link to="#" className="redes2"><i className="fab fa-facebook"></i></Link>
        <Link to="https://instagram.com/chec.cerveceria?utm_medium=copy_link" target="_blank" className="redes2"><i className="fab fa-instagram"></i></Link>
    </div> */}

    </div>
    </div>
)
}
export default GnSearchBar