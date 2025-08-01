import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages and some tools
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Work from './pages/Work';
import Menu from './components/sections/Menu';







function App() {
  return (
    <div className='scroll-smooth'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
