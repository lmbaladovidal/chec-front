import {Route, Routes} from 'react-router-dom';
import GnHeader from './GnHeader'
import GnFooter from './GnFooter';
import GnAbout from './GnAbout';
import GnHome from './GnHome';
import GnDashboard from './GnDashboard';


function App() {
  return (
    <div className="App">
    
     <GnHeader/>

     <Routes>
        <Route exact path="/" element={<GnHome/>} />
        <Route path='/quienesSomos' element={<GnAbout/>}/>
        <Route path='/dashboard' element={<GnDashboard/>}/>
      </Routes>

     <GnFooter/>
     
     

    </div>
  );
}

export default App;
