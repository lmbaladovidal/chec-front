import { useState, useEffect } from "react";

function GnDbChart() {
  const url= "http://localhost:3001/api/product/productList"
    const [products, setProduct] = useState([]);
    
	useEffect(()=>{
		console.log("Mount Component products")
		fetch(url, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			// console.log(response.data.cervezas)
			setProduct(response.data.cervezas)})         
		.catch(error=>console.log(error))
	},[])

    useEffect(() => {
        console.log('%cse actualizó el componente products', 'color:green');
     }, [products])

  const urlUsers = "http://localhost:3001/api/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Mount Component users desde GnChart");
    fetch(urlUsers, { mode: "cors" })
      .then((response) => response.json())

      .then((response) => {
        let usersResponse = response.data.users;

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

  return (
    <section>
      <div className="container text-center">
        {/* Content */}
        <div className="row">
          {/* LAST USER */}
          
            <div className="col-lg-6 my-3">
              <div className="row">
                  <div className="card">
                    <div class="card-header"> Último usuario creado </div>
                    <img
                      src={users.avatar}
                      className="avatar mx-3 my-3"
                      alt="avatar"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{users.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{users.email}</li>
                    </ul>
                  </div>
             
              </div>
            </div>
       

          {/* CATEGORIES */}
          <div className="col">
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">
                    Categorías de productos
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <div className="card-body">
                          <p>Categoria.name</p> <p>productos por categoria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
