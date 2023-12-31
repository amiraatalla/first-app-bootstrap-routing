import { Component } from 'react';
class About extends Component {
    userEmail = "amira@gmail.com";
    state = {
        userName: "Amira Atallah",
        userAge: 20,
    }
    changeName = () => {
        this.setState({
            userName: "Amira Reda"

        })
    }
    changeAge = () => {
        this.setState({
            userAge: 25
        })
    }
    changeEmail = () => {
        this.userEmail = "amira.reda@gmail.com";
    }

    render() {
        console.log(this.userName);
        return (
            <>
                <div className="text-center m-5">
                    <div className="border my-3">
                        <h2>{this.state.userName}</h2>
                        <h2>{this.state.userAge}</h2>
                        <h2>{this.userEmail}</h2>
                        <button onClick={this.changeName} className='btn btn-danger mb-3 mx-2'>Change Name</button>
                        <button onClick={this.changeAge} className='btn btn-danger mb-3 mx-2'>Change Age</button>
                        <button onClick={this.changeEmail} className='btn btn-danger mb-3 mx-2'>Change Email</button>
                    </div>
                </div>
            </>
        );
    }
}

export default About;