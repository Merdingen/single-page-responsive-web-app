import React, { Component } from 'react';
import './ServerError.css';
import { Link } from 'react-router-dom';

class ServerError extends Component {
    render() {
        return (
            <div className="server-error-page">
                <h1 className="server-error-title">
                    500
                </h1>
                <div className="server-error-desc">
                    Oops! Something went wrong at our Server. Why don't you go back?
                </div>
                <Link to="/"><button className="server-error-go-back-btn">Go Back</button></Link>
            </div>
        );
    }
}

export default ServerError;