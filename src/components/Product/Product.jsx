import { Component } from "react";

class Product extends Component {
    state = {}
    render() {
        const { name, price, imgUrl, quantity, description } = this.props.product;
        return (
            <>

                <div className="col-md-4 text-center">
                    <div className="border my-3">
                        <h4>{name}</h4>
                        <img className="w-100" src={imgUrl} alt="" />
                        <p>{description}</p>
                        <span>Price : {price} </span> | <span>Qty : {quantity}</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Product;