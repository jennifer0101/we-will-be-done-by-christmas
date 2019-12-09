import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import home from "./pages/home";
import search from "./pages/search";
import addItems from "./pages/addItems";
import inviteFriends from "./pages/inviteFriends";
import cart from "./pages/cart";

import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Container from "./components/Container";

import { useAuth0 } from "./react-auth0-spa";
import Carousel from "./components/Carousel";




function App() {
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <NavBar />
        {isAuthenticated &&
          <div>
            <Nav />
            <Wrapper>
              {/* <Route exact path="/" component={home} /> */}
              <Route exact path="/search" component={search} />
              <Route exact path="/addItems" component={addItems} />
              <Route exact path="/inviteFriends" component={inviteFriends} />
              <Route exact path="/cart" component={cart} />
            </Wrapper>
          </div>
        }
      </div>
    </Router>
  );
}


export default App;

