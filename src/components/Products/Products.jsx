import { Component } from "react";
import Product from "../Product/Product";

class Products extends Component {

    state = {
        Products:
            [
                {
                    "id": 1,
                    "name": "Canon",
                    "price": 19.99,
                    "quantity": 50,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgUrl": "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_9769b001_powershot_sx400_is_digital_1447339545_1068607.jpg"
                },
                {
                    "id": 2,
                    "name": "Nikon",
                    "price": 29.99,
                    "quantity": 30,
                    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "imgUrl": "https://www.bhphotovideo.com/images/images2500x2500/nikon_d750_dslr_camera_with_1082604.jpg"
                },
                {
                    "id": 3,
                    "name": "Canon",
                    "price": 39.99,
                    "quantity": 20,
                    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "imgUrl": "https://www.bhphotovideo.com/images/images2500x2500/canon_1263c005_eos_80d_dslr_camera_1225876.jpg"
                },
                {
                    "id": 4,
                    "name": "Canon",
                    "price": 49.99,
                    "quantity": 40,
                    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    "imgUrl": "https://tse1.mm.bing.net/th?id=OIP.q1eL4bTCj_Xlz_vbF73iEgHaE7&pid=Api&P=0&h=220"
                },
                {
                    "id": 5,
                    "name": "Canon",
                    "price": 59.99,
                    "quantity": 25,
                    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "imgUrl": "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_9769b001_powershot_sx400_is_digital_1447339545_1068607.jpg"
                },
                {
                    "id": 6,
                    "name": "Nikon",
                    "price": 69.99,
                    "quantity": 35,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "imgUrl": "https://www.bhphotovideo.com/images/images2500x2500/nikon_d750_dslr_camera_with_1082604.jpg"
                },
                {
                    "id": 7,
                    "name": "Canon",
                    "price": 79.99,
                    "quantity": 15,
                    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "imgUrl": "https://www.bhphotovideo.com/images/images2500x2500/canon_1263c005_eos_80d_dslr_camera_1225876.jpg"
                },
                {
                    "id": 8,
                    "name": "Nikon",
                    "price": 89.99,
                    "quantity": 10,
                    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "imgUrl": "http://allthingsd.com/files/2013/01/X100S_FRONT_L_R.jpg"
                },
                {
                    "id": 9,
                    "name": "Nikon",
                    "price": 99.99,
                    "quantity": 22,
                    "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    "imgUrl": "http://allthingsd.com/files/2013/01/X100S_FRONT_L_R.jpg"
                },
                {
                    "id": 10,
                    "name": "Canon",
                    "price": 109.99,
                    "quantity": 18,
                    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "imgUrl": "https://tse1.mm.bing.net/th?id=OIP.q1eL4bTCj_Xlz_vbF73iEgHaE7&pid=Api&P=0&h=220"
                }
            ]
    }

    deleteProduct=(index)=>{
     let products = this.state.Products
     products.splice(index,1);
     this.setState({products});   
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {this.state.Products.map((val, index) => {
                            return <Product index={val.id} deleteProduct={this.deleteProduct} key={val.id} product={val} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Products;