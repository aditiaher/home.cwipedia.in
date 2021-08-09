

const Navbar = ()=>{
    

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5">
                <div className="container-fluid cnav">
                    <a className="navbar-brand" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link btn" aria-current="page" href="#">SignIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn" aria-current="page"  href="#">SignUp</a>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;