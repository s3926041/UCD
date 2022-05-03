import "./App.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar/>
        <Banner/>
        <Middle/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
