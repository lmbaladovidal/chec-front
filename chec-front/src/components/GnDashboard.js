import '../App.css';
import GnDbNavbar from './GnDbNavbar';
import GnDbSidebar from './GnDbSidebar';
import GnDbSummary from './GnDbSummary';
import GnDbChart from './GnDbChart';


function GnDashboard() {
    return (
        <div className="d-flex" id="content-wrapper">
          <GnDbSidebar />

          <div className="w-100">
            <GnDbNavbar />
            <div id="content" class="bg-grey w-100">
                <GnDbSummary/>
                <GnDbChart/>
            </div>
          </div>
                    
        </div>    
    );
  }
  
  export default GnDashboard;