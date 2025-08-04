import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';




// import pages and some tools
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Work from './pages/Work';
import Menu from './components/sections/Menu';
import { usePage } from './context/useContext';







function App() {

  const location = useLocation();
  const { setCurrentPage, currentPage } = usePage();



  useEffect(() => {
    const path = location.pathname;

    if (path === '/') setCurrentPage('home');
    else if (path.includes('Work')) setCurrentPage('work');
    else if (path.includes('About')) setCurrentPage('about');
    else if (path.includes('Contact')) setCurrentPage('contact');
    else setCurrentPage('');



  }, [location, setCurrentPage]);



  useEffect(() => {
    
    console.log('✅ debuging from app component :  currentPage after update:', currentPage);
  }, [currentPage])



  return (
    <div className='scroll-smooth'>
      <>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
