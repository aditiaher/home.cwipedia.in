import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";    


const Navbar = ()=>{
    
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5">
                <div className="container-fluid cnav">
                    {/* <img src={} className="img-fluid" /> */}
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="https://www.cwipedia.in">blog</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://career.cwipedia.in">career</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.cwipedia.in/p/contact-us-demofont-familyarial.html">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link btn" aria-current="page" href="#">SignIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn" aria-current="page"  href="#">SignUp</a>
                        </li> */}
                            {/* <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={60}
                                /> */}

                    </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;