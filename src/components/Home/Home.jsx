import { Component } from "react";
import img1 from '../../imgs/canon.jpg';
import img2 from '../../imgs/nikon1.jpg';
import img3 from '../../imgs/nikon2.jpg';
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center">
                    <div id="carouselExample" className="carousel slide" style={{ width: '70%' }}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} className="d-block w-100" alt="canon" />
                            </div>
                            <div className="carousel-item">
                                <img src={img2} className="d-block w-100" alt="Nikon" />
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block w-100" alt="Nikon" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </>
        );
    }
}