import { useState, useEffect } from "react";

function GnDbChart() {
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

  const urlCategories = "http://localhost:3001/api/product/category";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("Mount Component categories");
    fetch(urlCategories, { mode: "cors" })
      .then((response) => response.json())

      .then((response) => {
        // console.log(response.data)
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("%cse actualizó el componente categories", "color:green");
  }, [categories]);

  const urlUsers = "http://localhost:3001/api/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Mount Component users desde GnChart");
    fetch(urlUsers, { mode: "cors" })
      .then((response) => response.json())

      .then((response) => {
        let usersResponse = response.data.users;
        console.log(usersResponse[usersResponse.length - 1]);

        setUsers(usersResponse[usersResponse.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(
      "%cse actualizó el componente users desde GnChart",
      "color:green"
    );
  }, [users]);

  const urlPdByCategory = "http://localhost:3001/api/product/productList";
  const [productByCategoryName, setPdByCategory] = useState([]);

  useEffect(() => {
    console.log("Mount Component PdByCategory");
    fetch(urlPdByCategory, { mode: "cors" })
      .then((response) => response.json())

      .then((response) => {
        console.log("BYCATEGORY")
        console.log(response.productByCategoryName);
        setPdByCategory(response.productByCategoryName);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("%cse actualizó el componente PdByCategory", "color:green");
  }, [productByCategoryName]);


  return (
    <section>
      <div className="container text-center">
        {/* Content */}
        <div className="row">
          {/* LAST USER */}

          <div className="col-lg-3 my-3">
            <div className="row">
              <div className="card">
                <div class="card-header"> Último usuario creado </div>
                <img
                  src={users.avatar}
                  className="avatar mx-12 my-12" 
                  alt="avatar"
                  
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{users.name} {users.lastName}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{users.email}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="col">
            <div className="col-lg-8 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">
                    Productos activos por categoría
                  </h5>
                </div>
                <ol class="list-group list-group-numbered">
                {productByCategoryName.length === 0 && <p>Cargando</p>}
                {productByCategoryName.map((info, i) => {
                  return (
                    <li class="list-group-item d-flex justify-content-between align-items-start"  key={i}>
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">{info.description}</div>
                      </div>
                      <span class="badge bg-primary rounded-pill">{info.CountProduct}</span>
                    </li>
                    
                  );
                })}
                </ol>
                
              </div>
            </div>
          </div>
        </div>

        {/* Content end*/}
      </div>
    </section>
  );
}

export default GnDbChart;
