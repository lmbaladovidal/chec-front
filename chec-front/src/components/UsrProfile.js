function UsrProfile() {

    
    const url= "http://localhost:3001/api/user/profile/5"
    const [user, setUser] = useState([]);
    
	useEffect(()=>{
		console.log("Mount Component")
		fetch(url, {mode:'cors'})
		.then(response=> response.json())
		.then(response=>{
			//console.log(response)
			setUser(response.data)})
		.catch(error=>console.log(error))
	},[])

    return (

            <div>
                <h2>{user.address}</h2>
                <h2>{user.name}</h2>
            </div>

           
       
    
    );
  }
  
  export default UsrProfile;