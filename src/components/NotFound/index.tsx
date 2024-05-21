import React from 'react'
import {Link} from 'react-router-dom'

const NotFound: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="display-1">404</h1>
                <p className="lead">Page Not Found</p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound
