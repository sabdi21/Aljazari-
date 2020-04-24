import Link from 'next/link';


const Navbar = () => (


    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="#">Aljazari!</a>
            <div className="collapse navbar-collapse" id="navbarColor01" >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/courses"><a className="nav-link">Course</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>



);

export default Navbar;