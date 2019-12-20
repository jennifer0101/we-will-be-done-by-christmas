import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa"; // COPIED OVER FROM NAVBAR.JS

function NavOut() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // COPIED OVER FROM NAVBAR.JS

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <Link
                    to="/"
                    className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                >
                    <h2 className="logo">Neighborhood Pantry</h2>
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
                    to="/cart"
                    className={window.location.pathname === "/cart" ? "nav-link active" : "nav-link"}
                >
                    {<i className="material-icons"> add_shopping_cart </i>} Cart
            </Link>

                <div>
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>Log in</button>
                    )}

                    {isAuthenticated && <button onClick={() => logout({
                        returnTo: window.location.origin
                    })}>Log out</button>}
                </div>
            </div>
        </nav>
    );
}

export default NavOut;