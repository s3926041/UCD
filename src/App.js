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
      console.log('hung')
       <Routes>
         <Route path="/UCD" element={<Homepage/>}></Route>
         <Route path='UCD/about' element={<About/>}></Route> 
         <Route path='UCD/exhibition' element={<Exhibition/>}></Route>
         <Route path="/UCD/#booking" element={<Booking/>}></Route>
         <Route path="/UCD/#contact" element={<Contact/>}></Route>
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
