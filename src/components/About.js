import "./App.css";
import Wife from "./components/Wife";
import Footer from "./components/Footer";
import Confirm from "./components/Confirm";
import HowCanYouHelp from "./components/HowCanYouHelp";
import Navbar from "./components/Navbar";
import "./components/My.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import About from "./components/About";

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<>
          <Navbar/>
          <About/>
          </>} />
          <Route
            path="/"
            element={
              <>
                <Navbar/>
                <Wife />
                <Confirm />
                <HowCanYouHelp />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
