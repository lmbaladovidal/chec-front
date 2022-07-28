import {Route, Routes} from 'react-router-dom';
import GnHeader from './GnHeader'
import GnFooter from './GnFooter';
import GnAbout from './GnAbout';
import GnHome from './GnHome';



function App() {
  return (
    <div className="App">
    
     <GnHeader/>

     <Routes>
        <Route exact path="/" element={<GnHome/>} />
        <Route path='/quienesSomos' element={<GnAbout/>}/>
      </Routes>

     <GnFooter/>
     
     

    </div>
  );
}

export default App;
