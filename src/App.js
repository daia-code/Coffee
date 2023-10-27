
import Home from './pages/Home';
import Types from './pages/Types';
import About from './pages/About';
import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/types' element={<Types />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </header>
      <Footer/>
      
    </div>
  );
}

export default App;
