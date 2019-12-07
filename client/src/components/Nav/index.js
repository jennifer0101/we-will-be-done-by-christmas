import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                Neighborhood Pantry
        </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/search"
                        className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >
                            Search Items
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;