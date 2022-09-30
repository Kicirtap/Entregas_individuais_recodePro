import React, { Component } from 'react';


class HeaderApp extends Component {

    constructor(props) {
        super(props);
        this.state = "";
    }

    render() {
        return(
    <div className="app">
        <header className="nav_area">
            <div className="p-3 text-white nav_area">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <a className="navbar-brand " href="#"><img src={require('../assets/logo.png')} class="img-fluid" width="100"
                        height="50" alt="" /></a>
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            </svg>
                        </a>
                        
                        {this.props.navegacao}  
                    </div>
                </div>
                
            </div>
            
        </header>
    </div>
        );
    }
}

export default HeaderApp;