import { Component } from "react";

class Product extends Component {
    state = {}
    render() {
        const { name, price, imgUrl, quantity, description ,id} = this.props.product;
        return (
            <>

                <div className="col-md-4 text-center">
                    <div className="border my-3">
                        <h4>{name}</h4>
                        <img className="w-100" src={imgUrl} alt="" />
                        <p>{description}</p>
                        <span>Price : {price} </span> | <span>Qty : {quantity}</span>
                   <br/>
                   <button onClick={()=>this.props.deleteProduct(id)} className="btn btn-danger mb-3 mx-2">Delete</button>
                   <button className="btn btn-success mb-3">Update</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Product;