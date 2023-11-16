import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
export default class Navbar extends Component {
    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" style={{width:"10%"}} />
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}