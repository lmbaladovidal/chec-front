import {useState, useEffect} from 'react'

function GnDbSummary() {

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


    const urlUsers= "http://localhost:3001/api/users"
    const [usersTotal, setUsersTotal] = useState([]);

    useEffect(()=>{
		console.log("Mount Component all users")
		fetch(urlUsers, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
		//	console.log(response.meta.total)
			setUsersTotal(response.meta.total)})         
		.catch(error=>console.log(error))
	},[])

    useEffect(() => {
        console.log('%cse actualizó el componente usersTotal', 'color:green');
     }, [usersTotal])


    const urlSales= "http://localhost:3001/api/sales/salesList"
    const [sales, setSales] = useState([]);

    useEffect(()=>{
		console.log("Mount Component sales")
		fetch(urlSales, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			// console.log(response.data)
			setSales(response.data)})         
		.catch(error=>console.log(error))
	},[])

    useEffect(() => {
        console.log('%cse actualizó el componente sales', 'color:green');
     }, [sales])


    const urlCategories= "http://localhost:3001/api/product/category"
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
		console.log("Mount Component categories")
		fetch(urlCategories, {mode:'cors'})
		.then(response=> response.json())
        
		.then(response=>{
			// console.log(response.data)
			setCategories(response.data)})         
		.catch(error=>console.log(error))
	},[])

    useEffect(() => {
        console.log('%cse actualizó el componente categories', 'color:green');
     }, [categories])

     

   


    return (
        <section className="bg-mix py-3">
                <div className="container">
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6  col-12 d-flex stat my-12">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Productos activos</h6>
                                        <h3 className="font-weight-bold">{products.length}</h3>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 d-flex stat my-12">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">No. de usuarios</h6>
                                        <h3 className="font-weight-bold">{usersTotal}</h3>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6  col-xs-12 d-flex stat my-12">
                                    <div className="mx-auto">
                                        <h6 className="text-muted">Ventas</h6>
                                        <h3 className="font-weight-bold">{sales.length}</h3>
                                       
                                    </div>
                                </div>
                               
                                <div className="col-lg-3 col-md-3 col-sm-6  col-xs-12 d-flex my-12">
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
