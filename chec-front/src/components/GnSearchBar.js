
import React, { Link } from 'react';
import '../StyleSheets/GnSearchBar.css'

function GnSearchBar() {

return(

    <div >

        <div className=" secondary-navbar border-3 border-bottom border-warning " style={{justifyContent:"center"}}>
            <input className="form-control-sm ms-0 me-0 my-2 mt-2 " 
                   type="text" 
                   placeholder="Buscar" 
                   name='search'  
                   aria-label=".form-control-md "
                  />
           
           <button type="button" class="btn btn-secondary my-2"><i className="bi bi-play-fill  "></i></button>         
         
                  
                  
        <div class="btn-group me-2 ms-2 my-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-success rounded-5 opacity-70">
                
                <i class="bi bi-whatsapp"></i>
                
            </button>
            <button type="button" class="btn btn-danger rounded-5 opacity-75"><i class="bi bi-instagram"></i></button>
            
        </div>
        </div>
                        
                        
            
        <form method="get" action="/product/search" className="search-bar">
        </form>
 
 
    {/* 
            <Link to="https://api.whatsapp.com/send?phone=+5491128590700&text=Hola%20quiero%20una%20cerveza=)."><i className="fab fa-whatsapp"></i></Link>
     <div className="social-media-bar">
     </div>
    
        <input type="text" placeholder="Busca aquí" name="search" />
        <Link to="https://api.whatsapp.com/send?phone=+5491128590700&text=Hola%20quiero%20una%20cerveza=)." target="_blank" className="redes2"><i className="fab fa-whatsapp"></i></Link>
        <div className="social-media-bar">
        
        <Link to="https://instagram.com/chec.cerveceria?utm_medium=copy_link" target="_blank" className="redes2"><i className="fab fa-instagram"></i></Link>
    </div> */}

    </div>
)
}
export default GnSearchBar