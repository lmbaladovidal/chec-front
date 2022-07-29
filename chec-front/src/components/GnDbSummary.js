import {useState, useEffect} from 'react'

function GnDbSummary() {

    const url= "http://localhost:3001/api/product/productPage"
    const [products, setProduct] = useState([]);
    
	useEffect(()=>{
		console.log("Mount Component")
		fetch(url, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			console.log(response.data.cervezas)

			setProduct(response.data.cervezas)})         
		.catch(error=>console.log(error))
	},[])

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

    const urlSales= "http://localhost:3001/api/sales/salesList"
    const [sales, setSales] = useState([]);

    useEffect(()=>{
		console.log("Mount Component")
		fetch(urlSales, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			console.log(response.data)

			setSales(response.data)})         
		.catch(error=>console.log(error))
	},[])

    const urlCategories= "http://localhost:3001/api/product/category"
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
		console.log("Mount Component")
		fetch(urlCategories, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			console.log(response.data)

			setCategories(response.data)})         
		.catch(error=>console.log(error))
	},[])


   


    return (
        <section className="bg-mix py-3">
                <div className="container">
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Productos activos</h6>
                                        <h3 className="font-weight-bold">{products.length}</h3>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">No. de usuarios</h6>
                                        <h3 className="font-weight-bold">{users.length}</h3>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex stat my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Ventas</h6>
                                        <h3 className="font-weight-bold">{sales.length}</h3>
                                       
                                    </div>
                                </div>
                               
                                <div className="col-lg-3 col-md-6 d-flex my-3">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Categorias</h6>
                                        <h3 className="font-weight-bold">{categories.length}</h3>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
        </section>
    )
}

export default GnDbSummary;
