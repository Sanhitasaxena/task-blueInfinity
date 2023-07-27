import './App.css';
import BillDesc from './components/bill-desc/BillDesc';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'

function App() {
  return (
    <div className="Main">
      <SideBar/>
      <div className='desc-main-div'>
         <Header/>
         <div className='bill-header'>
            <div className='billing-overview'>
              <h2>Billing Overview</h2>
              </div>
            <div className='calender'>
              <button className='arrow-btn'>
                <IoIosArrowBack/>
              </button>
              <p>February 2021</p>
              <button className='arrow-btn'>
                <IoIosArrowForward/>
              </button> 
            </div>
         </div>
         <BillDesc/>
      </div>
    </div>
  );
}

export default App;
