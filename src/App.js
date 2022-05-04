import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar/>
       <Routes>
         <Route path="/UCD" element={<Homepage/>}></Route>
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
