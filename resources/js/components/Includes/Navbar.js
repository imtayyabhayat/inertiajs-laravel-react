import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Navbar = () => {
    const { base_url } = usePage().props

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <InertiaLink className="navbar-brand" href="#">Inertia</InertiaLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <InertiaLink className="nav-link active" aria-current="page" href={ base_url }>Home</InertiaLink>
                        </li>
                        <li className="nav-item">
                            <InertiaLink className="nav-link" href={ base_url+"users" }>Users</InertiaLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
                
}

export default Navbar;