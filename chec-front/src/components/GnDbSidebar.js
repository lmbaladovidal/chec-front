import { Link } from 'react-router-dom';


const GnDbSidebar = () => {
    return (
    
        <div id="sidebar-container" className="bg-primary-side-bar">
        <div className="logo">
            <h4 className="text-light font-weight-bold mb-0">Dashboard</h4>
        </div>
        <div className="menu">
            <li> <Link to="/dashboard" className="d-block text-light p-3 border-0"><i className="icon ion-md-apps lead mr-2"></i>Inicio</Link></li>
            <li> <Link to="/dashboard/productList" className="d-block text-light p-3 border-0"><i className="icon ion-md-stats lead mr-2"></i>Productos</Link></li>
            <li> <Link to="/dashboard/usersList" className="d-block text-light p-3 border-0"><i className="icon ion-md-people lead mr-2"></i>Usuarios</Link></li>
            
       
        </div>
        </div>

    )
}

export default GnDbSidebar;