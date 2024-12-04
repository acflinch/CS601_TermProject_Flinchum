import { Outlet, Link } from "react-router-dom";
import "../css/Layout.css"

const Layout = () => {
    return (
        <>
            <header className='page-header'>
                <h4 className="logo">Portfolio.</h4>
                <nav>
                    <ul className="nav-bar">
                        <li><h5><Link to="/" class="nav">Home</Link></h5></li>
                        <li><h5><Link to="/about" class="nav">About</Link></h5></li>
                        <li><h5><Link to="/projects" class="nav">Projects</Link></h5></li>
                        <li><h5><Link to="/history" class="nav">history</Link></h5></li>
                        <li><h5><Link to="/skills" class="nav">Skills</Link></h5></li>
                        <li><h5><Link to="/contact" class="nav">Contact</Link></h5></li>
                    </ul>
                </nav>
            </header>

            <Outlet/>

            <footer>
                <small>Copyright &copy; 2024, Alex Flinchum</small>
            </footer>
        </>
    )
};

export default Layout;