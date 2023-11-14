import { Component } from "react";
import img1 from '../../imgs/img1.jpg';
import img2 from '../../imgs/img2.jpeg';
import img3 from '../../imgs/img3.jpg';
export default class Home extends Component {
    imgStyle={width: "40%"}
    render() {
        return (
            <>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active m-auto" style={{width: "60%"}}>
                            <img src={img1} class="d-block w-100" alt="image 1" />
                        </div>
                        <div className="carousel-item" style={{width: "60%"}}>
                            <img src={img2} class="d-block w-100" alt="image 2" />
                        </div>
                        <div className="carousel-item" style={{width: "60%"}}>
                            <img src={img3} class="d-block w-100" alt="image 3"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }
}