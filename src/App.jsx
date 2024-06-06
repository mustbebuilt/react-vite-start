import Header from './components/Header'
import DigitalClock from './components/DigitalClock'
import AnalogueClock from './components/AnalogueClock'
import StaffTable from './components/StaffTable'
import { useState } from'react';

function App() {

const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

    return ( < div className="container">

              <Header onNavigate={handleNavigation} />
        
        

      {currentPage === 'home' && <><DigitalClock /><AnalogueClock /></> }
      {currentPage === 'staffList' && <StaffTable />}

        
        
        < /div>
       
    )
}

export default App;