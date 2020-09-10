import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Breadcrums() {
    const location = useLocation();
    const path = location.pathname;
    console.log(path);
    return (
        <nav aria-label="breadcrumb">
            {path.includes("/project/details/") ? (
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Details
                    </li>
                </ol>
            ) : (
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                        Home
                    </li>
                </ol>
            )}
        </nav>
    );
}

export default Breadcrums;
