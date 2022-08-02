import {Route, Routes} from 'react-router-dom';
import GnHeader from './GnHeader'
import GnFooter from './GnFooter';
import GnAbout from './GnAbout';
import GnHome from './GnHome';
import GnDashboard from './GnDashboard';
import GnDbPrdList from './GnDbPrdList';
import GnDbUsrList from './GnDbUsrList';


function App() {
  return (
    <div className="App">
    
     <GnHeader/>

     <Routes>
        <Route exact path="/" element={<GnHome/>} />
        <Route path='/quienesSomos' element={<GnAbout/>}/>
        <Route path='/dashboard' element={<GnDashboard/>}/>
        <Route path='/dashboard/productList' element={<GnDbPrdList/>}/>
        <Route path='/dashboard/usersList' element={<GnDbUsrList/>}/>
         
      </Routes>

     <GnFooter/>
     
     

    </div>
  );
}

export default App;
