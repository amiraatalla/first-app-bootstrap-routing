import { Component } from "react";
import logo from "../../imgs/logo.png";
export default class Navbar extends Component {
    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo" style={{width:"10%"}} />
                        </a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}