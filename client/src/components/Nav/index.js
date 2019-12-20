import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa"; // COPIED OVER FROM NAVBAR.JS

function Nav() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // COPIED OVER FROM NAVBAR.JS

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                {/* COPIED OVER FROM NAVBAR.JS */}

                <div className="container">
                    <div>
                        {!isAuthenticated && (
                            <button onClick={() => loginWithRedirect({})}>Log in</button>
                        )}

                        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                    </div>
                </div>

                <Link className="navbar-brand" to="/">
                    Home
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