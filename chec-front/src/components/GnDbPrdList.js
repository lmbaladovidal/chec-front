import { useState, useEffect } from "react";
import GnDbNavbar from './GnDbNavbar';
import GnDbSidebar from './GnDbSidebar';

function GnDbPrdList() {
  const url = "http://localhost:3001/api/product/productList";
  const [products, setProduct] = useState([]);

  useEffect(() => {
    console.log("Mount Component products");
    fetch(url, { mode: "cors" })
      .then((response) => response.json())

      .then((response) => {
        // console.log(response.data.cervezas)
        setProduct(response.data.cervezas);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("%cse actualizó el componente products", "color:green");
  }, [products]);

  return (
    <div className="d-flex" id="content-wrapper">
      <GnDbSidebar />

      <div className="w-100">
        <GnDbNavbar />
        <div id="content" className="bg-grey w-100">
          <section className="container my-3">
            <ul className="list-group">
              <li className="list-group-item2 col-lg-12 my-2" aria-current="true">
                Lista de productos
              </li>
              
              {products.length === 0 && <p>Cargando</p>}
                {
                    products.map((product, i) => {
                        return (
                            <li class="list-group-item" key={i}>
                                {product.name}
                            </li>
                        )
                    })
                }
              
            </ul>
            
          </section>
          
        </div>
      </div>
    </div>
  );
}

export default GnDbPrdList;
