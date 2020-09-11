import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function getCrums(path) {
    if (path.includes("/project/details/") && path.includes("/log/new")) {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link className="text-info" to="/">
                        Home
                    </Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                    <Link className="text-info" to={path.split("log")[0]}>
                        Details
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    New Log
                </li>
            </ol>
        );
    } else if (path.includes("/project/details/")) {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link className="text-info" to="/">
                        Home
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Details
                </li>
            </ol>
        );
    } else if (path.includes("/project/new")) {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link className="text-info" to="/">
                        Home
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    New
                </li>
            </ol>
        );
    } else {
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                    Home
                </li>
            </ol>
        );
    }
}

function Breadcrums() {
    const location = useLocation();
    const path = location.pathname;
    return <nav aria-label="breadcrumb">{getCrums(path)}</nav>;
}

export default Breadcrums;
