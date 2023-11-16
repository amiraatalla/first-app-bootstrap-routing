import { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

class SystemLayout extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Navbar />
                <Outlet></Outlet>
                <div className="py-4 bg-dark text-white text-center" > &copy; 2023 Amira Atallah. All rights reserved.</div>
            </>
            )
    }
}
 
export default SystemLayout;