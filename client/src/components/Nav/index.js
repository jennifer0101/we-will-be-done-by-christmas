import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link className="navbar-brand" to="/">
                Neighborhood Pantry
            </Link>
            <Link 
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
                Search Items
            </Link>
            <Link  
                to="/addItems"
                className={window.location.pathname === "/addItems" ? "nav-link active" : "nav-link"}
            >
                Add Items
            </Link>
            <Link  
                to="/inviteFriends"
                className={window.location.pathname === "/inviteFriends" ? "nav-link active" : "nav-link"}
            >
                Invite Friends
            </Link>
            </div>
        </nav>
    );
}

export default Nav;