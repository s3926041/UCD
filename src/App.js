import "./App.scss";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import About from "./components/About";
import Exhibition from "./components/Exhibition";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar/>
    
       <Routes>
         <Route path="/" element={<Homepage/>}></Route>
         <Route path='/about' element={<About/>}></Route> 
         <Route path='/exhibition' element={<Exhibition/>}></Route>
         <Route path="/booking" element={<Booking/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
