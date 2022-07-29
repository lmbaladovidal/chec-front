import {useState, useEffect} from 'react'

function GnDbChart() {

  // const url= "http://localhost:3001/api/product/productPage"
  //   const [products, setProduct] = useState([]);
    
	// useEffect(()=>{
	// 	console.log("Mount Component")
	// 	fetch(url, {mode:'cors'})
	// 	.then(response=> response.json())
        
	// 	.then(response=>{
	// 		console.log(response.data.cervezas)

	// 		setProduct(response.data.cervezas)})         
	// 	.catch(error=>console.log(error))
	// },[])

    const urlUsers= "http://localhost:3001/api/user/users"
    const [users, setUsers] = useState([]);

    useEffect(()=>{
		console.log("Mount Component")
		fetch(urlUsers, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			console.log(response.data)

			setUsers(response.data)})         
		.catch(error=>console.log(error))
	},[])


     return (
        <section>
            
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8 my-3">
                              <div className="card rounded-0">
                                  <div className="card-header bg-light">
                                    <h6 className="font-weight-bold mb-0">Último usuario creado</h6>
                                  </div>
                                  <div className="card-body">
                                    <h4>{users[users.length-1].name}</h4>
                                  </div>
                              </div>
                          </div>
                         
                      </div>
                  </div>
              </section>
    )
}

export default GnDbChart;