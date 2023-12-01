import './header.css';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                
            <div className="navbar-brand">
                    <a href="#" id="home">
                        Ayendi Simeon.
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
            </div>
                
                <div className="navbar-nav collapse navbar-collapse " id='navbarNav'>
                    <ul className=" list-inline justify-content-end"  id='navbarNav'>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Header;

