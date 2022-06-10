import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Navbar = (props) => {
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
                            <InertiaLink className="nav-link" href={ base_url+"/users" }>Users</InertiaLink>
                        </li>
                        <li className="nav-item dropdown">
                            <InertiaLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </InertiaLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><InertiaLink className="dropdown-item" href="#">Action</InertiaLink></li>
                                <li><InertiaLink className="dropdown-item" href="#">Another action</InertiaLink></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><InertiaLink className="dropdown-item" href="#">Something else here</InertiaLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <InertiaLink className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</InertiaLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
                
}

export default Navbar;