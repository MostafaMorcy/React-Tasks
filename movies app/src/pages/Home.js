import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        
        <div className="d-flex align-items-center justify-content-center mt-5">
            <div className="text-center">
                <h1 className="display-1 fw-bold">Hello</h1>
                <p className="fs-3"> <span className="text-danger">Mostafa Mahmoud</span> sends his regards.</p>
                <p className="lead">
                    Have a nice time with us!
                </p>
                <Link to="/movies" className="btn btn-dark">Go to Movies</Link>
            </div>
        </div>
    )
    
    
}