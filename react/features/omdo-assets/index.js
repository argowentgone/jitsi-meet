import React, { Component } from 'react';
import HeaderPage from './components/HeaderPage';

class OmdoHome extends Component {

    componentDidMount() {
        alert("MEE")
    }
    
    render() {
        return(
            <div>
                <HeaderPage />
                <main>
                    <h1>Login</h1>
                </main>
            </div>
        )
    }
}

export default OmdoHome;