import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa"; // COPIED OVER FROM NAVBAR.JS

function NavIn() {
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






           
            </div>
        </nav>
    );
}

export default NavIn;