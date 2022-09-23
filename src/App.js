import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from 'react-router-dom'
import Footer from './Footer';

function App() {
  {/* <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                
            </div>
        </div>
      </div> */}
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        {/* <Route exact="true" path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;



