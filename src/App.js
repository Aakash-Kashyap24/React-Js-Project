import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import './Styles/App.scss'
import Contact from './components/Contact';
import Services from './components/Services';
import './Styles/mediaquery.scss'

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/services' element={<Services/>} />

             
             
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default App;