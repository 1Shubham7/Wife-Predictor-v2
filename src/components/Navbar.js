import { useNavigate } from 'react-router-dom';


export default function Navbar(){

    let navigate=useNavigate();

    return(
        <div className='navbar' >
          <ul>
            <a
              href={window.location.pathname === "/about" ? "/" : "#wifeplay"}
              style={{ color: "green" }}
            >
              <li
                className="navclass news "
                id="navbarid"
                
              >
                {window.location.pathname === "/about" ? "Home" : "Play"}
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
              <li className="news" onClick={()=>{navigate('/about')}}>About</li>
          </ul>
        </div>
    );
}
