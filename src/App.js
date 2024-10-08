import "./App.css";
import Wife from "./components/Wife";
import Footer from "./components/Footer";
import Confirm from "./components/Confirm";
import HowCanYouHelp from "./components/HowCanYouHelp";
import "./components/My.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  const refreshAboutPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  const handleLoginRedirect = () => {
    window.location.href = "/login.html"; // Redirects to login.html in the public directory
  };

  // Function to redirect to signup.html
  const handleSignupRedirect = () => {
    window.location.href = "/signup.html"; // Redirects to signup.html in the public directory
  };

  return (
    <div className="App">
      <Router>
        <div className="spacer layer1"></div>
        <nav className="mainnav">
          <ul>
            <a
              href={window.location.pathname === "/about" ? "/" : "#wifeplay"}
              style={{ color: "green" }}
            >
              <li
                className="navclass news "
                id="navbarid"
                onClick={
                  window.location.pathname === "/about"
                    ? refreshAboutPage
                    : null
                }
              >
                {window.location.pathname === "/" ? "Play" : "Home"}
              </li>
            </a>

            
            <a
              href="https://github.com/1Shubham7"
              target="_blank"
              rel="noreferrer"
            >
              <li className="news">GitHub</li>
            </a>


            <a
              href="https://www.linkedin.com/in/shubham-singh-mahar-5a002b20b/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="news">LinkedIn</li>
            </a>
            <Link to="/about" onClick={refreshAboutPage}>
              <li className="news">About</li>
            </Link>
            <li className="news" onClick={handleLoginRedirect}>Login</li>
            <li className="news" onClick={handleSignupRedirect}>Sign Up</li> 
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          
          <Route
            path="/"
            element={
              <>
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
