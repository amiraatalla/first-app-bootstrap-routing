import { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container">
                        <a class="navbar-brand" href="#">My App</a>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}