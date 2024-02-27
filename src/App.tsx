import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ViewPage from './components/ViewID/ViewPage';
import AddPage from './components/AddID/AddPage/AddPage';
import ManuallyAddPage from './components/AddID/ManuallyAddPage/ManuallyAddPage';
import ScanPage from './components/AddID/ScanPage';
import { LicensesContext } from './LicensesContext';
import './App.css';
import { License, licenseLS } from './License.d';
import { useState } from 'react';

function App() {
  const licenseStr = localStorage.getItem(licenseLS);
  let licensesInitVal: License[] = licenseStr ? JSON.parse(licenseStr) : [];
  const [licenses, setLicenses] = useState(licensesInitVal);

  return (
    <BrowserRouter>
      <NavBar />
      <LicensesContext.Provider value = {{licenses, setLicenses}}>
      <div className='main'>
        <Routes>
          <Route path="/" element={<ViewPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/add/manual" element={<ManuallyAddPage />} />
          <Route path="/add/scan" element={<ScanPage />} />
        </Routes>
      </div>
      </LicensesContext.Provider>
    </BrowserRouter>

  );
}

export default App;
